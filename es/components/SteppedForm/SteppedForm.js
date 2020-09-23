import _regeneratorRuntime from "@babel/runtime/regenerator";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { FullScreenStepWrapper, StepMd, StepForm, StepMultipleChoice, StepTimeline, StepCustom } from './index';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import _findIndex from 'lodash/findIndex';
import _template from 'lodash/template';
import _merge from 'lodash/merge';
import { Loader } from '../Loader';
import { ProgressBar } from '../Progress';

var SteppedForm = /*#__PURE__*/function (_Component) {
  _inheritsLoose(SteppedForm, _Component);

  function SteppedForm(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "_generateEmptyFormData", function (steps) {
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
        } // if it's a multiple-choice, it's just got one field
        // but the field can be contain multiple values, hence an empty array


        if (step.type === 'multiple-choice' && step.name) {
          emptyFormData[step.name] = [];
        }
      });
      return emptyFormData;
    });

    _defineProperty(_assertThisInitialized(_this), "_getNextStep", function (step) {
      if (step === void 0) {
        step = _this.state.stepShowing;
      }

      var steps = _this.props.steps;

      var index = _findIndex(steps, {
        slug: step.slug
      });

      var notFound = index === -1;
      /**
       * set key `isLast` to true when defining a form step to finish the form there.
       * TODO: better to have a beforeEnter(formData) and beforeLeave(formData) fns?
       */

      var isLast = index + 1 === steps.length || step.isLast === true;
      var nextStepIndex = index + 1;
      return notFound || isLast ? steps[0] : steps[nextStepIndex];
    });

    _defineProperty(_assertThisInitialized(_this), "_getStepBySlug", function (slug) {
      var steps = _this.props.steps;

      var index = _findIndex(steps, {
        slug: slug
      });

      var notFound = index === -1;
      return notFound ? _this._getNextStep() : steps[index];
    });

    _defineProperty(_assertThisInitialized(_this), "_getProgress", function () {
      var steps = _this.props.steps;
      var stepShowing = _this.state.stepShowing;
      var index = stepShowing ? _findIndex(steps, {
        slug: stepShowing.slug
      }) + 1 : 0;
      return 100 / steps.length * index;
    });

    _defineProperty(_assertThisInitialized(_this), "_getUrlForStep", function (newSlug) {
      var _this$props$match = _this.props.match,
          url = _this$props$match.url,
          params = _this$props$match.params;
      /**
       * if path `/root-of-component/:slideSlug`is missing the `/:slideSlug` add it
       * replace slideSlug in the params then assemble new path
       */

      var pathPrefix = params.stepSlug === undefined ? url.endsWith('/') ? url.slice(0, -1) : url : url.substring(0, url.lastIndexOf("/" + params.stepSlug));
      return pathPrefix + "/" + newSlug;
    });

    _defineProperty(_assertThisInitialized(_this), "_getStepFromSlug", function (stepSlug, steps) {
      if (steps === void 0) {
        steps = _this.props.steps;
      }

      // find index of the step by slug (a unique attribute on the step object)
      var index = _findIndex(steps, {
        slug: stepSlug
      });

      var notFound = index === -1; // If we recognize the step from the slug use that, otherwise
      // start at the first available one.

      return notFound ? steps[0] : steps[index];
    });

    _defineProperty(_assertThisInitialized(_this), "_matchRouteWithState", function () {
      var _this$props = _this.props,
          history = _this$props.history,
          match = _this$props.match;
      var stepShowing = _this.state.stepShowing;

      var expectedUrl = _this._getUrlForStep(stepShowing.slug); // Push Route if not matching, so we get the
      // current step on a potential refresh.


      if (match.url !== expectedUrl) {
        history.push(expectedUrl);
      } // Scroll to top of window.


      window.scrollTo(0, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "finishSlide", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(action) {
        var _this$state, stepShowing, formData, _this$props2, onSaveStep, saveErrors;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$state = _this.state, stepShowing = _this$state.stepShowing, formData = _this$state.formData;
                _this$props2 = _this.props, onSaveStep = _this$props2.onSaveStep, saveErrors = _this$props2.saveErrors;
                _context.next = 4;
                return onSaveStep({
                  formData: formData,
                  stepSlug: stepShowing.slug
                });

              case 4:
                if (!(saveErrors && saveErrors.length > 0)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                _this.handleNavigate(action);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleNavigate", /*#__PURE__*/function () {
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
                return _context2.abrupt("return", _this.props.history.goBack());

              case 4:
                _context2.t1 = action.callback && typeof action.callback === 'function';

                if (!_context2.t1) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 8;
                return action.callback(_this.state.formData);

              case 8:
                _context2.t1 = _context2.sent;

              case 9:
                callbackResult = _context2.t1;
                // if callback result contains a navigate key, get the slug and navigate to it's slide
                callbackResult && _this.handleNavigate(callbackResult);
                return _context2.abrupt("break", 17);

              case 12:
                customStepShowing = _this._getStepBySlug(action.slide);
                return _context2.abrupt("return", _this.setState({
                  stepShowing: customStepShowing
                }, _this._matchRouteWithState));

              case 14:
                return _context2.abrupt("return", window.open(action.url, action.target || '_blank'));

              case 15:
                nextStepShowing = _this._getNextStep(_this.state.stepShowing);
                return _context2.abrupt("return", _this.setState({
                  stepShowing: nextStepShowing
                }, _this._matchRouteWithState));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleFieldChange", function (fieldName, event) {
      if (event && typeof event.preventDefault === 'function') {
        event.preventDefault();
      }

      var newValue = typeof event.target.value !== 'undefined' ? event.target.value : event.target.checked;

      _this.setState(function (state) {
        var _extends2;

        var formData = state.formData;

        var updatedFormData = _extends({}, formData, (_extends2 = {}, _extends2[fieldName] = newValue, _extends2));

        return {
          formData: updatedFormData
        };
      }, function () {
        _this._validateStepForm();

        if (_this.props.onFieldChange) {
          _this.props.onFieldChange(fieldName, newValue, _this.state.formData);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_validateStepForm", function () {
      var _this$state2 = _this.state,
          stepShowing = _this$state2.stepShowing,
          formData = _this$state2.formData;
      var errors = []; // validate StepForm slides

      if ((stepShowing.type === 'form' || stepShowing.type === 'custom') && stepShowing.fields) {
        errors = stepShowing.fields // check each field for the currently showing step
        .map(function (field) {
          var requiredError = null;
          var validationError = null;
          var missingFields = [];
          var fieldValidationErrors = [];

          var checkForMissingRequiredFields = function checkForMissingRequiredFields(field) {
            var fieldValue = formData[field.name];
            return field.required && (typeof fieldValue === 'string' && fieldValue === '' || // form fields will be strings
            typeof fieldValue === 'object' && // custom slides might have objects or arrays
            Object.keys(fieldValue).length === 0) && field.label || // return field label if it's missing
            null;
          };

          var checkForValidationError = function checkForValidationError(field) {
            var fieldValue = formData[field.name]; // check if we have a field.validate() func.
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
            msg: "Please add your " + missingFields.join(', ') + "."
          };
          validationError = fieldValidationErrors || fieldValidationErrors.lenth > 0;
          return requiredError ? requiredError // if it's required and not there, that's our error
          : validationError // if there's no requiredError, check for validationError
          ? validationError // if we have one, that's our error
          : null; // otherwise we're all good!
        });
      } // validate StepMultipleChoice slides


      if (stepShowing.type === 'multiple-choice' && (stepShowing.minChoices || stepShowing.maxChoices)) {
        var value = formData[stepShowing.name];
        var minChoices = stepShowing.minChoices,
            maxChoices = stepShowing.maxChoices;
        errors = value.length < minChoices || value.length > maxChoices ? [{
          msg: "Please choose " + ( // start with minChoices that will be our error (maxLen can't be reached as it automatically truncates)
          minChoices && value.length < minChoices && "at least " + minChoices) + (maxChoices !== undefined // if maxChoices is set, add upper limit to the sentence
          ? " and no more than " + maxChoices : '') + " options."
        }] : [];
      } // flatten array of error arrays


      errors = [].concat.apply([], errors);
      errors = errors.filter(function (e) {
        return e;
      }); // remove null values

      _this.setState(function (state) {
        var _extends3;

        return {
          validationErrors: _extends({}, state.validationErrors, (_extends3 = {}, _extends3[stepShowing.slug] = errors, _extends3))
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_replaceTemplateVarsIfNeeded", function (string) {
      if (string.indexOf('${') < 0) {
        return string;
      } else {
        var compiledTemplate = _template(string);

        return compiledTemplate(_this.state.formData);
      }
    });

    var _emptyFormData = _this._generateEmptyFormData(props.steps);

    var initialFormData = props.formData || {};

    var _formData = _merge(_emptyFormData, initialFormData);

    _this.state = {
      stepShowing: null,
      // step gets set in componentWillMount
      formData: _formData,
      validationErrors: {}
    };
    return _this;
  }

  var _proto = SteppedForm.prototype;

  _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    var stepSlug = this.props.match.params.stepSlug;

    var stepShowing = this._getStepFromSlug(stepSlug);

    this.setState({
      stepShowing: stepShowing
    }, this._matchRouteWithState);
  }
  /** This makes browser back/forward buttons work as expected. */
  ;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props3 = this.props,
        location = _this$props3.location,
        stepSlug = _this$props3.match.params.stepSlug,
        formData = _this$props3.formData;

    if (location !== prevProps.location) {
      var stepShowing = this._getStepFromSlug(stepSlug);

      this.setState({
        stepShowing: stepShowing
      }, this._matchRouteWithState);
    }

    if (prevProps.formData !== formData) {
      var updatedFormData = _merge(this.state.formData, formData);

      this.setState({
        formData: updatedFormData
      });
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$state3 = this.state,
        formData = _this$state3.formData,
        validationErrors = _this$state3.validationErrors;
    var _this$props4 = this.props,
        saveErrors = _this$props4.saveErrors,
        displayMode = _this$props4.displayMode,
        isSaving = _this$props4.isSaving;
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
                return _extends({}, groupField, {
                  value: formData[groupField.name]
                });
              });
            }

            return fieldsWithValue;
          } else {
            return _extends({}, field, {
              value: formData[field.name]
            });
          }
        });
        StepComponent = /*#__PURE__*/React.createElement(StepForm, _extends({}, stepShowing, {
          fields: fieldsWithData
        }, {
          onNavigate: this.finishSlide,
          onChange: this.handleFieldChange,
          validationErrors: validationErrors[stepShowing.slug] || [],
          saveErrors: saveErrors || [],
          isSaving: isSaving || false,
          displayMode: displayMode
        }));
        break;

      case 'multiple-choice':
        StepComponent = /*#__PURE__*/React.createElement(StepMultipleChoice, _extends({}, stepShowing, {
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
        StepComponent = /*#__PURE__*/React.createElement(StepTimeline, _extends({}, stepShowing, {
          onNavigate: this.handleNavigate
        }));
        break;

      case 'custom':
        StepComponent = /*#__PURE__*/React.createElement(StepCustom, _extends({}, stepShowing, {
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
        StepComponent = /*#__PURE__*/React.createElement(StepMd, _extends({}, stepShowing, {
          onNavigate: this.finishSlide,
          displayMode: displayMode
        }));
    }

    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(ProgressBar, {
      percent: this._getProgress()
    }), /*#__PURE__*/React.createElement(TransitionGroup, {
      component: null
    }, /*#__PURE__*/React.createElement(CSSTransition, {
      classNames: "step",
      timeout: 400,
      appear: true,
      key: stepShowing.slug
    }, /*#__PURE__*/React.createElement(FullScreenStepWrapper, {
      bg: stepShowing.bg || 'transparent',
      color: stepShowing.color || 'inherit',
      displayMode: displayMode
    }, StepComponent))));
  };

  return SteppedForm;
}(Component);

SteppedForm.defaultProps = {
  displayMode: 'fullscreen'
};
SteppedForm.displayName = 'SteppedForm';
export default withRouter(SteppedForm);