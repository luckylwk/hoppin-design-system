import React from 'react';
import { Box } from '../Box';
import { Container } from '../Container';
import { Errors } from '../Form';
import { ActionButtons, StepHeader } from './index';

const StepCustom = ({
  title,
  lede,
  SlideContent,
  fields,
  formData,
  slug,
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
      fields &&
      Array.isArray(fields) &&
      fields.length > 0 &&
      fields
        .map(field => {
          return (
            !field.required ||
            (formData[field.name] && formData[field.name] !== '')
          );
        })
        // check if all are true
        .reduce((all, current) => all && current)
    );
  };

  const containerProps = displayMode === 'flex' ? { padding: 0 } : {};
  return (
    <Container height="100%" width="narrow" {...containerProps}>
      <StepHeader title={title} lede={lede} />
      <SlideContent
        formData={formData}
        slug={slug}
        onChange={onChange}
        onNavigate={onNavigate}
        validationErrors={validationErrors}
        saveErrors={saveErrors}
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

StepCustom.displayName = 'StepCustom';
export default StepCustom;
