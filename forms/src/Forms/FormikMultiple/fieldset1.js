import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

export const FieldSet1 = () => (
  <div>
    <h1>Give me some info</h1>
    <Field
        component={TextField}
        name="firstName"
        label="First Name"
    />
    <Field
        component={TextField}
        name="lastName"
        label="Last Name"
    />
    <Field
        component={TextField}
        name="email"
        type="email"
        label="Email"
    />
  </div>
);
