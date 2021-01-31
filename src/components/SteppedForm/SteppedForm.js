import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import {
  FullScreenStepWrapper,
  StepMd,
  StepForm,
  StepMultipleChoice,
  StepTimeline,
  StepCustom,
} from './index';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import _findIndex from 'lodash/findIndex';
import _template from 'lodash/template';
import _merge from 'lodash/merge';

import { Loader } from '../Loader';
import { ProgressBar } from '../Progress';

class SteppedForm extends Component {
  constructor(props) {
    super(props);

    const emptyFormData = this._generateEmptyFormData(props.steps);
    const initialFormData = props.formData || {};
    const formData = _merge(emptyFormData, initialFormData);

    this.state = {
      stepShowing: null, // step gets set in componentWillMount
      formData,
      validationErrors: {},
    };
  }

  UNSAFE_componentWillMount() {
    const { stepSlug } = this.props.match.params;
    const stepShowing = this._getStepFromSlug(stepSlug);
    this.setState({ stepShowing }, this._matchRouteWithState);
  }

  /** This makes browser back/forward buttons work as expected. */
  componentDidUpdate(prevProps) {
    const {
      location,
      match: {
        params: { stepSlug },
      },
      formData,
    } = this.props;

    if (location !== prevProps.location) {
      const stepShowing = this._getStepFromSlug(stepSlug);
      this.setState({ stepShowing }, this._matchRouteWithState);
    }

    if (prevProps.formData !== formData) {
      const updatedFormData = _merge(this.state.formData, formData);
      this.setState({ formData: updatedFormData });
    }
  }

  _generateEmptyFormData = (steps) => {
    let emptyFormData = {};

    steps &&
      steps.forEach((step) => {
        // if it has fields, find them
        if ((step.type === 'form' || step.type === 'custom') && step.fields) {
          step.fields.forEach((field) => {
            // field groups are special, get each field in the array
            if (field.type === 'group') {
              field.list &&
                field.list.forEach((groupField) => {
                  emptyFormData[groupField.name] = '';
                });
            } else {
              emptyFormData[field.name] = '';
            }
          });
        }
        // if it's a multiple-choice, it's just got one field
        // but the field can be contain multiple values, hence an empty array
        if (step.type === 'multiple-choice' && step.name) {
          emptyFormData[step.name] = [];
        }
      });

    return emptyFormData;
  };

  _getNextStep = (step = this.state.stepShowing) => {
    const { steps } = this.props;
    const index = _findIndex(steps, { slug: step.slug });
    const notFound = index === -1;
    /**
     * set key `isLast` to true when defining a form step to finish the form there.
     * TODO: better to have a beforeEnter(formData) and beforeLeave(formData) fns?
     */
    const isLast = index + 1 === steps.length || step.isLast === true;
    const nextStepIndex = index + 1;

    return notFound || isLast ? steps[0] : steps[nextStepIndex];
  };

  _getStepBySlug = (slug) => {
    const { steps } = this.props;
    const index = _findIndex(steps, { slug: slug });
    const notFound = index === -1;
    return notFound ? this._getNextStep() : steps[index];
  };

  _getProgress = () => {
    const { steps } = this.props;
    const { stepShowing } = this.state;
    const index = stepShowing
      ? _findIndex(steps, { slug: stepShowing.slug }) + 1
      : 0;
    return (100 / steps.length) * index;
  };

  /**
   * this.props.match gets the parent route directly from router.
   * This allows us not to hard-code urls and re-use this component.
   */
  _getUrlForStep = (newSlug) => {
    const { url, params } = this.props.match;
    /**
     * if path `/root-of-component/:slideSlug`is missing the `/:slideSlug` add it
     * replace slideSlug in the params then assemble new path
     */

    const pathPrefix =
      params.stepSlug === undefined
        ? url.endsWith('/')
          ? url.slice(0, -1)
          : url
        : url.substring(0, url.lastIndexOf(`/${params.stepSlug}`));
    return `${pathPrefix}/${newSlug}`;
  };

  /**
   * Takes the step slug (e.g. form the URL) and finds the matching step object
   * takes an optional second argument with a steps array, defaults to props.steps
   * returns the individual step object.
   * Fallback to the first step in the array.
   */
  _getStepFromSlug = (stepSlug, steps = this.props.steps) => {
    // find index of the step by slug (a unique attribute on the step object)
    const index = _findIndex(steps, { slug: stepSlug });
    const notFound = index === -1;
    // If we recognize the step from the slug use that, otherwise
    // start at the first available one.
    return notFound ? steps[0] : steps[index];
  };

  /**
   * Takes the step to show from the state and make sure it
   * matches the right URL. This assumes a state `stepShowing`
   * is set.
   */
  _matchRouteWithState = () => {
    const { history, match } = this.props;
    const { stepShowing } = this.state;
    const expectedUrl = this._getUrlForStep(stepShowing.slug);
    // Push Route if not matching, so we get the
    // current step on a potential refresh.
    if (match.url !== expectedUrl) {
      history.push(expectedUrl);
    }
    // Scroll to top of window.
    window.scrollTo(0, 0);
  };

  /**
   * Navigation between slides
   *
   * set `navigate` attribute of the slide actions to `back`, `next` or `custom`
   * to jump to a different slide, use `onClick` handler on action Buttons and return an action object
   * to implement dynamic navigation routes.
   * onClick(formData) callback gets full formData object
   *
   * first finishSlide(action) gets called to save data, and on success, it'll call handleNavigate(action)
   */
  finishSlide = async (action) => {
    const { stepShowing, formData } = this.state;
    const { onSaveStep, saveErrors } = this.props;

    await onSaveStep({ formData, stepSlug: stepShowing.slug });

    /** Then continue to navigate on, unless we got save errors. */
    if (saveErrors && saveErrors.length > 0) {
      return;
    }

    this.handleNavigate(action);
  };

  handleNavigate = async (action) => {
    switch (action.navigate) {
      case 'back':
        return this.props.history.goBack();
      case 'custom':
        /*
         * Use an action: 'custom' and provide a callback: (formData) => {navigate: 'slideSlug<String>'}
         * by specifying `navigate: custom` and `onClick: fn(formData)` keys in the steps action array.
         * callback receives formData for all the steps completed and should retuen an object with at least
         * the key `navigate` and that slug of the step that should be navigated to.
         */
        // check if the callback is a valid funciton, then execute it
        const callbackResult =
          action.callback &&
          typeof action.callback === 'function' &&
          (await action.callback(this.state.formData));
        // if callback result contains a navigate key, get the slug and navigate to it's slide
        callbackResult && this.handleNavigate(callbackResult);
        break;
      case 'goto':
        const customStepShowing = this._getStepBySlug(action.slide);
        return this.setState(
          { stepShowing: customStepShowing },
          this._matchRouteWithState
        );
      case 'external':
        return window.open(action.url, action.target || '_blank');
      default:
      case 'next':
        const nextStepShowing = this._getNextStep(this.state.stepShowing);
        return this.setState(
          { stepShowing: nextStepShowing },
          this._matchRouteWithState
        );
    }
  };

  handleFieldChange = (fieldName, event) => {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }

    const newValue =
      typeof event.target.value !== 'undefined'
        ? event.target.value
        : event.target.checked;

    this.setState(
      (state) => {
        const { formData } = state;

        let updatedFormData = {
          ...formData,
          [fieldName]: newValue,
        };

        return { formData: updatedFormData };
      },
      () => {
        this._validateStepForm();
        if (this.props.onFieldChange) {
          this.props.onFieldChange(fieldName, newValue, this.state.formData);
        }
      }
    );
  };

  /**
   * Validate all form fields for the currently showing step.
   * if errors are found, they are set in state.
   *
   * validationErrors (array) will have the following structure:
   *
   * [ { msg: 'error message 1' }, { msg: 'error message 2' } ]
   */
  _validateStepForm = () => {
    const { stepShowing, formData } = this.state;

    let errors = [];
    // validate StepForm slides
    if (
      (stepShowing.type === 'form' || stepShowing.type === 'custom') &&
      stepShowing.fields
    ) {
      errors = stepShowing.fields
        // check each field for the currently showing step
        .map((field) => {
          let requiredError = null;
          let validationError = null;
          let missingFields = [];
          let fieldValidationErrors = [];

          const checkForMissingRequiredFields = (field) => {
            const fieldValue = formData[field.name];
            return (
              (field.required &&
                ((typeof fieldValue === 'string' && fieldValue === '') || // form fields will be strings
                  (typeof fieldValue === 'object' && // custom slides might have objects or arrays
                    Object.keys(fieldValue).length === 0)) &&
                field.label) || // return field label if it's missing
              null
            );
          };

          const checkForValidationError = (field) => {
            const fieldValue = formData[field.name];
            // check if we have a field.validate() func.
            // if there's no field.validate() func, then field is valid.
            return (
              (field.validate &&
                typeof field.validate === 'function' &&
                field.validate(fieldValue)) ||
              null
            );
          };

          if (field.type === 'group') {
            missingFields =
              (field.list && // catch if field is defined as group but has no list of fields
                field.list // map over all grouped fields, check each one
                  .map((groupField) =>
                    checkForMissingRequiredFields(groupField)
                  )) ||
              [];
            fieldValidationErrors =
              (field.list && // catch if field is defined as group but has no list of fields
                field.list // map over all grouped fields, check each one
                  .map((groupField) => checkForValidationError(groupField))) ||
              [];
          } else {
            // normal fields are easy to check
            missingFields.push(checkForMissingRequiredFields(field));
            fieldValidationErrors.push(checkForValidationError(field));
          }

          missingFields = missingFields.filter((e) => e); // remove null values
          fieldValidationErrors = fieldValidationErrors.filter((e) => e);

          requiredError = missingFields &&
            missingFields.length > 0 && {
              msg: `Please add your ${missingFields.join(', ')}.`,
            };

          validationError =
            fieldValidationErrors || fieldValidationErrors.lenth > 0;

          return requiredError
            ? requiredError // if it's required and not there, that's our error
            : validationError // if there's no requiredError, check for validationError
            ? validationError // if we have one, that's our error
            : null; // otherwise we're all good!
        });
    }
    // validate StepMultipleChoice slides
    if (
      stepShowing.type === 'multiple-choice' &&
      (stepShowing.minChoices || stepShowing.maxChoices)
    ) {
      const value = formData[stepShowing.name];
      const { minChoices, maxChoices } = stepShowing;

      errors =
        value.length < minChoices || value.length > maxChoices
          ? [
              {
                msg: `Please choose ${
                  // start with minChoices that will be our error (maxLen can't be reached as it automatically truncates)
                  minChoices &&
                  value.length < minChoices &&
                  `at least ${minChoices}`
                }${
                  maxChoices !== undefined // if maxChoices is set, add upper limit to the sentence
                    ? ` and no more than ${maxChoices}`
                    : ''
                } options.`,
              },
            ]
          : [];
    }

    // flatten array of error arrays
    errors = [].concat.apply([], errors);
    errors = errors.filter((e) => e); // remove null values

    this.setState((state) => {
      return {
        validationErrors: {
          ...state.validationErrors,
          [stepShowing.slug]: errors,
        },
      };
    });
  };

  /**
   * String interpolation in the steps lede, body, etc. use standard ES6 template string syntax ${formFieldName}
   */
  _replaceTemplateVarsIfNeeded = (string) => {
    if (string.indexOf('${') < 0) {
      return string;
    } else {
      const compiledTemplate = _template(string);
      return compiledTemplate(this.state.formData);
    }
  };

  render() {
    const { formData, validationErrors } = this.state;
    const { saveErrors, displayMode, isSaving } = this.props;

    let StepComponent = Loader;

    /*
     * replace vars in text strings if needed
     * use ES6 style string interpolation ${formFieldName} in title, lede or body (SlideMd)
     */
    let { stepShowing } = this.state;
    if (stepShowing.title) {
      stepShowing.title = this._replaceTemplateVarsIfNeeded(stepShowing.title);
    }
    if (stepShowing.lede) {
      stepShowing.lede = this._replaceTemplateVarsIfNeeded(stepShowing.lede);
    }
    if (stepShowing.body) {
      stepShowing.body = this._replaceTemplateVarsIfNeeded(stepShowing.body);
    }
    if (stepShowing.actions && stepShowing.actions.length > 0) {
      stepShowing.actions = stepShowing.actions.map((action) => {
        action.label = this._replaceTemplateVarsIfNeeded(action.label);
        return action;
      });
    }

    /*
     * Get the right component to render the current step and pass it all the data we need.
     */
    switch (stepShowing.type) {
      case 'form':
        // map data and field info together to use with <FieldsWrapper/>
        const fieldsWithData = stepShowing.fields.map((field) => {
          if (field.type === 'group') {
            let fieldsWithValue = { ...field };
            if (fieldsWithValue.list) {
              fieldsWithValue.list = fieldsWithValue.list.map((groupField) => {
                return { ...groupField, value: formData[groupField.name] };
              });
            }
            return fieldsWithValue;
          } else {
            return { ...field, value: formData[field.name] };
          }
        });

        StepComponent = (
          <StepForm
            {...stepShowing}
            {...{ fields: fieldsWithData }}
            onNavigate={this.finishSlide}
            onChange={this.handleFieldChange}
            validationErrors={validationErrors[stepShowing.slug] || []}
            saveErrors={saveErrors || []}
            isSaving={isSaving || false}
            displayMode={displayMode}
          />
        );
        break;
      case 'multiple-choice':
        StepComponent = (
          <StepMultipleChoice
            {...stepShowing}
            value={formData[stepShowing.name]}
            onNavigate={this.finishSlide}
            onChange={this.handleFieldChange.bind(this, stepShowing.name)}
            validationErrors={validationErrors[stepShowing.slug] || []}
            saveErrors={saveErrors || []}
            isSaving={isSaving || false}
            displayMode={displayMode}
          />
        );
        break;
      case 'timeline':
        StepComponent = (
          <StepTimeline {...stepShowing} onNavigate={this.handleNavigate} />
        );
        break;
      case 'custom':
        StepComponent = (
          <StepCustom
            {...stepShowing}
            onNavigate={this.finishSlide}
            formData={formData}
            onChange={this.handleFieldChange}
            validationErrors={validationErrors[stepShowing.slug] || []}
            saveErrors={saveErrors || []}
            isSaving={isSaving || false}
            displayMode={displayMode}
          />
        );
        break;
      case 'md':
      default:
        StepComponent = (
          <StepMd
            {...stepShowing}
            onNavigate={this.finishSlide}
            displayMode={displayMode}
          />
        );
    }

    return (
      <Fragment>
        <ProgressBar percent={this._getProgress()} />
        <TransitionGroup component={null}>
          <CSSTransition
            classNames="step"
            timeout={400}
            appear={true}
            key={stepShowing.slug}
          >
            <FullScreenStepWrapper
              bg={stepShowing.bg || 'transparent'}
              color={stepShowing.color || 'inherit'}
              displayMode={displayMode}
            >
              {StepComponent}
            </FullScreenStepWrapper>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

SteppedForm.defaultProps = {
  displayMode: 'fullscreen',
};

SteppedForm.displayName = 'SteppedForm';

export default withRouter(SteppedForm);
