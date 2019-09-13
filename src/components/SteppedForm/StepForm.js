import React from 'react';
import { Box } from '../Box';
import { Container } from '../Container';
import { Fields, Errors } from '../Form';

import { ActionButtons, StepHeader } from './index';

const StepForm = ({
  title,
  lede,
  fields,
  actions,
  onNavigate,
  onChange,
  validationErrors,
  saveErrors,
  isSaving,
  displayMode,
}) => {
  const hasRequiredFieldValues = () => {
    return (
      fields
        .map(field => {
          let fieldHasValue = false;
          if (field.type === 'group') {
            fieldHasValue =
              !field.list || // catch if field is defined as group but has no list of fields
              field.list // map over all grouped fields, check each one
                .map(groupField => {
                  return (
                    !groupField.required ||
                    (groupField.value && groupField.value.length > 0) ||
                    groupField.checked === 'checked'
                  );
                }) // check if all are true
                .reduce((all, current) => all && current);
          } else {
            // normal fields are easy to check
            fieldHasValue =
              !field.required ||
              (field.value && field.value.length > 0) ||
              field.checked === 'checked';
          }
          return fieldHasValue;
        })
        // check if all are true
        .reduce((all, current) => all && current)
    );
  };

  const containerProps = displayMode === 'flex' ? { padding: 0 } : {};
  return (
    <Container
      as="form"
      height="100%"
      width="narrow"
      overflow="scroll"
      {...containerProps}
    >
      <StepHeader title={title} lede={lede} />
      <Fields
        isSortable={false}
        onChangeSort={() => {}}
        onChange={onChange}
        fields={fields}
        type="host"
      />
      <Errors errors={[...validationErrors, ...saveErrors]} />
      <Box flexGrow={1} />
      <ActionButtons
        actions={actions}
        onNavigate={onNavigate}
        disableNext={validationErrors.length > 0 || !hasRequiredFieldValues()}
        isSaving={isSaving || false}
      />
    </Container>
  );
};

StepForm.displayName = 'StepForm';
export default StepForm;
