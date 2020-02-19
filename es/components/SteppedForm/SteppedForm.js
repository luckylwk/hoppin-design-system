import _regeneratorRuntime from 'babel-runtime/regenerator';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { FullScreenStepWrapper, StepMd, StepForm, StepMultipleChoice, StepTimeline, StepCustom } from './index';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import _findIndex from 'lodash/findIndex';
import _template from 'lodash/template';
import _merge from 'lodash/merge';

import { Loader } from '../Loader';
import { ProgressBar } from '../Progress';

var SteppedForm = (_temp = _class = function (_Component) {
  _inherits(SteppedForm, _Component);

  function SteppedForm(props) {
    _classCallCheck(this, SteppedForm);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    var emptyFormData = _this._generateEmptyFormData(props.steps);
    var initialFormData = props.formData || {};
    var formData = _merge(emptyFormData, initialFormData);

    _this.state = {
      stepShowing: null, // step gets set in componentWillMount
      formData: formData,
      validationErrors: {}
    };
    return _this;
  }

  SteppedForm.prototype.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    var stepSlug = this.props.match.params.stepSlug;

    var stepShowing = this._getStepFromSlug(stepSlug);
    this.setState({ stepShowing: stepShowing }, this._matchRouteWithState);
  };

  /** This makes browser back/forward buttons work as expected. */


  SteppedForm.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _props = this.props,
        location = _props.location,
        stepSlug = _props.match.params.stepSlug,
        formData = _props.formData;


    if (location !== prevProps.location) {
      var stepShowing = this._getStepFromSlug(stepSlug);
      this.setState({ stepShowing: stepShowing }, this._matchRouteWithState);
    }

    if (prevProps.formData !== formData) {
      var updatedFormData = _merge(this.state.formData, formData);
      this.setState({ formData: updatedFormData });
    }
  };

  /**
   * this.props.match gets the parent route directly from router.
   * This allows us not to hard-code urls and re-use this component.
   */


  /**
   * Takes the step slug (e.g. form the URL) and finds the matching step object
   * takes an optional second argument with a steps array, defaults to props.steps
   * returns the individual step object.
   * Fallback to the first step in the array.
   */


  /**
   * Takes the step to show from the state and make sure it
   * matches the right URL. This assumes a state `stepShowing`
   * is set.
   */


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


  /**
   * Validate all form fields for the currently showing step.
   * if errors are found, they are set in state.
   *
   * validationErrors (array) will have the following structure:
   *
   * [ { msg: 'error message 1' }, { msg: 'error message 2' } ]
   */


  /**
   * String interpolation in the steps lede, body, etc. use standard ES6 template string syntax ${formFieldName}
   */


  SteppedForm.prototype.render = function render() {
    var _this2 = this;

    var _state = this.state,
        formData = _state.formData,
        validationErrors = _state.validationErrors;
    var _props2 = this.props,
        saveErrors = _props2.saveErrors,
        displayMode = _props2.displayMode,
        isSaving = _props2.isSaving;


    var StepComponent = Loader;

    /*
     * replace vars in text strings if needed
     * use ES6 style string interpolation ${formFieldName} in title, lede or body (SlideMd)
     */
    var stepShowing = this.state.stepShowing;

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
      stepShowing.actions = stepShowing.actions.map(function (action) {
        action.label = _this2._replaceTemplateVarsIfNeeded(action.label);
        return action;
      });
    }

    /*
     * Get the right component to render the current step and pass it all the data we need.
     */
    switch (stepShowing.type) {
      case 'form':
        // map data and field info together to use with <FieldsWrapper/>
        var fieldsWithData = stepShowing.fields.map(function (field) {
          if (field.type === 'group') {
            var fieldsWithValue = _extends({}, field);
            if (fieldsWithValue.list) {
              fieldsWithValue.list = fieldsWithValue.list.map(function (groupField) {
                return _extends({}, groupField, { value: formData[groupField.name] });
              });
            }
            return fieldsWithValue;
          } else {
            return _extends({}, field, { value: formData[field.name] });
          }
        });

        StepComponent = React.createElement(StepForm, _extends({}, stepShowing, { fields: fieldsWithData }, {
          onNavigate: this.finishSlide,
          onChange: this.handleFieldChange,
          validationErrors: validationErrors[stepShowing.slug] || [],
          saveErrors: saveErrors || [],
          isSaving: isSaving || false,
          displayMode: displayMode
        }));
        break;
      case 'multiple-choice':
        StepComponent = React.createElement(StepMultipleChoice, _extends({}, stepShowing, {
          value: formData[stepShowing.name],
          onNavigate: this.finishSlide,
          onChange: this.handleFieldChange.bind(this, stepShowing.name),
          validationErrors: validationErrors[stepShowing.slug] || [],
          saveErrors: saveErrors || [],
          isSaving: isSaving || false,
          displayMode: displayMode
        }));
        break;
      case 'timeline':
        StepComponent = React.createElement(StepTimeline, _extends({}, stepShowing, { onNavigate: this.handleNavigate }));
        break;
      case 'custom':
        StepComponent = React.createElement(StepCustom, _extends({}, stepShowing, {
          onNavigate: this.finishSlide,
          formData: formData,
          onChange: this.handleFieldChange,
          validationErrors: validationErrors[stepShowing.slug] || [],
          saveErrors: saveErrors || [],
          isSaving: isSaving || false,
          displayMode: displayMode
        }));
        break;
      case 'md':
      default:
        StepComponent = React.createElement(StepMd, _extends({}, stepShowing, {
          onNavigate: this.finishSlide,
          displayMode: displayMode
        }));
    }

    return React.createElement(
      Fragment,
      null,
      React.createElement(ProgressBar, { percent: this._getProgress() }),
      React.createElement(
        TransitionGroup,
        { component: null },
        React.createElement(
          CSSTransition,
          {
            classNames: 'step',
            timeout: 400,
            appear: true,
            key: stepShowing.slug
          },
          React.createElement(
            FullScreenStepWrapper,
            {
              bg: stepShowing.bg || 'transparent',
              color: stepShowing.color || 'inherit',
              displayMode: displayMode
            },
            StepComponent
          )
        )
      )
    );
  };

  return SteppedForm;
}(Component), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this._generateEmptyFormData = function (steps) {
    var emptyFormData = {};

    steps && steps.forEach(function (step) {
      // if it has fields, find them
      if ((step.type === 'form' || step.type === 'custom') && step.fields) {
        step.fields.forEach(function (field) {
          // field groups are special, get each field in the array
          if (field.type === 'group') {
            field.list && field.list.forEach(function (groupField) {
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

  this._getNextStep = function () {
    var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this3.state.stepShowing;
    var steps = _this3.props.steps;

    var index = _findIndex(steps, { slug: step.slug });
    var notFound = index === -1;
    /**
     * set key `isLast` to true when defining a form step to finish the form there.
     * TODO: better to have a beforeEnter(formData) and beforeLeave(formData) fns?
     */
    var isLast = index + 1 === steps.length || step.isLast === true;
    var nextStepIndex = index + 1;

    return notFound || isLast ? steps[0] : steps[nextStepIndex];
  };

  this._getStepBySlug = function (slug) {
    var steps = _this3.props.steps;

    var index = _findIndex(steps, { slug: slug });
    var notFound = index === -1;
    return notFound ? _this3._getNextStep() : steps[index];
  };

  this._getProgress = function () {
    var steps = _this3.props.steps;
    var stepShowing = _this3.state.stepShowing;

    var index = stepShowing ? _findIndex(steps, { slug: stepShowing.slug }) + 1 : 0;
    return 100 / steps.length * index;
  };

  this._getUrlForStep = function (newSlug) {
    var _props$match = _this3.props.match,
        url = _props$match.url,
        params = _props$match.params;
    /**
     * if path `/root-of-component/:slideSlug`is missing the `/:slideSlug` add it
     * replace slideSlug in the params then assemble new path
     */

    var pathPrefix = params.stepSlug === undefined ? url.endsWith('/') ? url.slice(0, -1) : url : url.substring(0, url.lastIndexOf('/' + params.stepSlug));
    return pathPrefix + '/' + newSlug;
  };

  this._getStepFromSlug = function (stepSlug) {
    var steps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this3.props.steps;

    // find index of the step by slug (a unique attribute on the step object)
    var index = _findIndex(steps, { slug: stepSlug });
    var notFound = index === -1;
    // If we recognize the step from the slug use that, otherwise
    // start at the first available one.
    return notFound ? steps[0] : steps[index];
  };

  this._matchRouteWithState = function () {
    var _props3 = _this3.props,
        history = _props3.history,
        match = _props3.match;
    var stepShowing = _this3.state.stepShowing;

    var expectedUrl = _this3._getUrlForStep(stepShowing.slug);
    // Push Route if not matching, so we get the
    // current step on a potential refresh.
    if (match.url !== expectedUrl) {
      history.push(expectedUrl);
    }
    // Scroll to top of window.
    window.scrollTo(0, 0);
  };

  this.finishSlide = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(action) {
      var _state2, stepShowing, formData, _props4, onSaveStep, saveErrors;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _state2 = _this3.state, stepShowing = _state2.stepShowing, formData = _state2.formData;
              _props4 = _this3.props, onSaveStep = _props4.onSaveStep, saveErrors = _props4.saveErrors;
              _context.next = 4;
              return onSaveStep({ formData: formData, stepSlug: stepShowing.slug });

            case 4:
              if (!(saveErrors && saveErrors.length > 0)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt('return');

            case 6:

              _this3.handleNavigate(action);

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this3);
    }));

    return function (_x3) {
      return _ref.apply(this, arguments);
    };
  }();

  this.handleNavigate = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(action) {
      var callbackResult, customStepShowing, nextStepShowing;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = action.navigate;
              _context2.next = _context2.t0 === 'back' ? 3 : _context2.t0 === 'custom' ? 4 : _context2.t0 === 'goto' ? 12 : _context2.t0 === 'external' ? 14 : _context2.t0 === 'next' ? 15 : 15;
              break;

            case 3:
              return _context2.abrupt('return', _this3.props.history.goBack());

            case 4:
              _context2.t1 = action.callback && typeof action.callback === 'function';

              if (!_context2.t1) {
                _context2.next = 9;
                break;
              }

              _context2.next = 8;
              return action.callback(_this3.state.formData);

            case 8:
              _context2.t1 = _context2.sent;

            case 9:
              callbackResult = _context2.t1;

              // if callback result contains a navigate key, get the slug and navigate to it's slide
              callbackResult && _this3.handleNavigate(callbackResult);
              return _context2.abrupt('break', 17);

            case 12:
              customStepShowing = _this3._getStepBySlug(action.slide);
              return _context2.abrupt('return', _this3.setState({ stepShowing: customStepShowing }, _this3._matchRouteWithState));

            case 14:
              return _context2.abrupt('return', window.open(action.url, action.target || '_blank'));

            case 15:
              nextStepShowing = _this3._getNextStep(_this3.state.stepShowing);
              return _context2.abrupt('return', _this3.setState({ stepShowing: nextStepShowing }, _this3._matchRouteWithState));

            case 17:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this3);
    }));

    return function (_x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  this.handleFieldChange = function (fieldName, event) {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }

    var newValue = typeof event.target.value !== 'undefined' ? event.target.value : event.target.checked;

    _this3.setState(function (state) {
      var _extends2;

      var formData = state.formData;


      var updatedFormData = _extends({}, formData, (_extends2 = {}, _extends2[fieldName] = newValue, _extends2));

      return { formData: updatedFormData };
    }, function () {
      _this3._validateStepForm();
      if (_this3.props.onFieldChange) {
        _this3.props.onFieldChange(fieldName, newValue, _this3.state.formData);
      }
    });
  };

  this._validateStepForm = function () {
    var _state3 = _this3.state,
        stepShowing = _state3.stepShowing,
        formData = _state3.formData;


    var errors = [];
    // validate StepForm slides
    if ((stepShowing.type === 'form' || stepShowing.type === 'custom') && stepShowing.fields) {
      errors = stepShowing.fields
      // check each field for the currently showing step
      .map(function (field) {
        var requiredError = null;
        var validationError = null;
        var missingFields = [];
        var fieldValidationErrors = [];

        var checkForMissingRequiredFields = function checkForMissingRequiredFields(field) {
          var fieldValue = formData[field.name];
          return field.required && (typeof fieldValue === 'string' && fieldValue === '' || // form fields will be strings
          (typeof fieldValue === 'undefined' ? 'undefined' : _typeof(fieldValue)) === 'object' && // custom slides might have objects or arrays
          Object.keys(fieldValue).length === 0) && field.label || // return field label if it's missing
          null;
        };

        var checkForValidationError = function checkForValidationError(field) {
          var fieldValue = formData[field.name];
          // check if we have a field.validate() func.
          // if there's no field.validate() func, then field is valid.
          return field.validate && typeof field.validate === 'function' && field.validate(fieldValue) || null;
        };

        if (field.type === 'group') {
          missingFields = field.list && // catch if field is defined as group but has no list of fields
          field.list // map over all grouped fields, check each one
          .map(function (groupField) {
            return checkForMissingRequiredFields(groupField);
          }) || [];
          fieldValidationErrors = field.list && // catch if field is defined as group but has no list of fields
          field.list // map over all grouped fields, check each one
          .map(function (groupField) {
            return checkForValidationError(groupField);
          }) || [];
        } else {
          // normal fields are easy to check
          missingFields.push(checkForMissingRequiredFields(field));
          fieldValidationErrors.push(checkForValidationError(field));
        }

        missingFields = missingFields.filter(function (e) {
          return e;
        }); // remove null values
        fieldValidationErrors = fieldValidationErrors.filter(function (e) {
          return e;
        });

        requiredError = missingFields && missingFields.length > 0 && {
          msg: 'Please add your ' + missingFields.join(', ') + '.'
        };

        validationError = fieldValidationErrors || fieldValidationErrors.lenth > 0;

        return requiredError ? requiredError // if it's required and not there, that's our error
        : validationError // if there's no requiredError, check for validationError
        ? validationError // if we have one, that's our error
        : null; // otherwise we're all good!
      });
    }
    // validate StepMultipleChoice slides
    if (stepShowing.type === 'multiple-choice' && (stepShowing.minChoices || stepShowing.maxChoices)) {
      var value = formData[stepShowing.name];
      var minChoices = stepShowing.minChoices,
          maxChoices = stepShowing.maxChoices;


      errors = value.length < minChoices || value.length > maxChoices ? [{
        msg: 'Please choose ' + (
        // start with minChoices that will be our error (maxLen can't be reached as it automatically truncates)
        minChoices && value.length < minChoices && 'at least ' + minChoices) + (maxChoices !== undefined // if maxChoices is set, add upper limit to the sentence
        ? ' and no more than ' + maxChoices : '') + ' options.'
      }] : [];
    }

    // flatten array of error arrays
    errors = [].concat.apply([], errors);
    errors = errors.filter(function (e) {
      return e;
    }); // remove null values

    _this3.setState(function (state) {
      var _extends3;

      return {
        validationErrors: _extends({}, state.validationErrors, (_extends3 = {}, _extends3[stepShowing.slug] = errors, _extends3))
      };
    });
  };

  this._replaceTemplateVarsIfNeeded = function (string) {
    if (string.indexOf('${') < 0) {
      return string;
    } else {
      var compiledTemplate = _template(string);
      return compiledTemplate(_this3.state.formData);
    }
  };
}, _temp);


SteppedForm.defaultProps = {
  displayMode: 'fullscreen'
};

SteppedForm.displayName = 'SteppedForm';

export default withRouter(SteppedForm);