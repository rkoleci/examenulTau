import * as yup from 'yup';

export const SendToClassRommSchema = yup.object().shape({
    name: yup.string().required('Name is required!'),
    description: yup.string().required('Description is required!'),
    student: yup.string().required('Student is required!'),
    class: yup.string().required('Class is required!'),
    timestamp: yup.string().required('Pick a test date & time!'),
});

export const ReportErrorSchema = yup.object().shape({
    error: yup.string().required('Pick an error!')
})