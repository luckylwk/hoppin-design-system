import React from 'react';
import { Box } from '../Box';
import { Container } from '../Container';
import { Errors } from '../Form';
import { Button, ButtonGroup } from '../Button';

import { ActionButtons, StepHeader } from './index';

const StepForm = ({
  title,
  lede,
  options,
  minChoices,
  maxChoices,
  value,
  actions,
  onNavigate,
  onChange,
  validationErrors,
  saveErrors,
  isSaving,
  displayMode,
}) => {
  /*
   * Handle multiple choice logic in component.
   * Makes this component behave similar to StepForm
   */
  const handleClick = (option, event) => {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    // add the freshly clicked option to the array, if id doesn't exist yet.
    let newValue = [...value];
    const index = newValue.indexOf(option.value);
    if (index >= 0) {
      // the option was already selected, deselect it
      newValue.splice(index, 1);
    } else {
      // add the option to the selection.
      newValue.push(option.value);
    }
    // if we got too many options now, take the last chosen ones (from  end of array)
    if (newValue.length > maxChoices) {
      newValue = newValue.slice(-maxChoices);
    }
    // call onChange(slideSlug, fieldName, event)
    // slideSlug and fieldName are already bound
    // -> fake event to be picked up.
    onChange({ target: { value: newValue } });
  };

  const containerProps = displayMode === 'flex' ? { padding: 0 } : {};

  return (
    <Container
      as="form"
      height="100%"
      width="full"
      overflow="scroll"
      padding={0}
    >
      <Container width="narrow" {...containerProps}>
        <StepHeader title={title} lede={lede} />
      </Container>
      <ButtonGroup
        flexWrap="wrap"
        flexGrow={0}
        justifyContent="center"
        margin={['base', 'large', 'xlarge']}
      >
        {options.length > 0 &&
          options.map(option => {
            return (
              <Button
                key={option.value}
                variant={value.indexOf(option.value) >= 0 ? 'full' : 'outline'}
                type="button"
                context="neutral"
                size="large"
                onClick={handleClick.bind(null, option)}
                marginBottom="large"
              >
                {option.label}
              </Button>
            );
          })}
      </ButtonGroup>
      <Container width="narrow" {...containerProps}>
        <Errors errors={[...validationErrors, ...saveErrors]} />
        <Box flexGrow={1} />
        <ActionButtons
          actions={actions}
          onNavigate={onNavigate}
          disableNext={value.length < minChoices}
          isSaving={isSaving || false}
        />
      </Container>
    </Container>
  );
};

StepForm.displayName = 'StepForm';

export default StepForm;
