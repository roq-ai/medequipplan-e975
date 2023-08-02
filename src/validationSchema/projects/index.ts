import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
});
