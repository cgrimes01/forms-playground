import React from 'react';
import { Formik, Form } from 'formik';
import { TextInput, Checkbox, Select } from './components/components';
 
export const FormikExample = () => {
    return (
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '' }}
        //   validationSchema={Yup.object({
        //     firstName: Yup.string()
        //       .max(15, 'Must be 15 characters or less')
        //       .required('Required'),
        //     lastName: Yup.string()
        //       .max(20, 'Must be 20 characters or less')
        //       .required('Required'),
        //     email: Yup.string().email('Invalid email address').required('Required'),
        //   })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
            { props => (
                <Form>
                    <TextInput
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="Jane"
                    />
                    <TextInput
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                    />
                    <TextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jane@formik.com"
                    />
                    <Select label="Job Type" name="jobType">
                        <option value="">Select a job type</option>
                        <option value="designer">Designer</option>
                        <option value="development">Developer</option>
                        <option value="product">Product Manager</option>
                        <option value="other">Other</option>
                    </Select>
                    <Checkbox name="acceptedTerms">
                        I accept the terms and conditions
                    </Checkbox>
                    { props.values.acceptedTerms &&
                    <Select label="Job Type" name="jobType">
                        <option value="">Select a job type</option>
                        <option value="designer">Designer</option>
                        <option value="development">Developer</option>
                        <option value="product">Product Manager</option>
                        <option value="other">Other</option>
                    </Select>
                    }
                    <button type="submit">Submit</button>
                </Form>
            )
            }  
        </Formik>
      );
};
