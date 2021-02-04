import React from 'react';
import { Field } from 'formik';
import { TextField, CheckboxWithLabel, RadioGroup  } from 'formik-material-ui';
import { FormControlLabel, Radio } from '@material-ui/core';

export const FieldSet2 = () => (
  <div>
    <h1>Give me some more info</h1>
    <Field
        component={TextField}
        name="favouritecolor"
        label="First Name"
    />
    <Field
        component={CheckboxWithLabel}
        type="checkbox"
        name="areyoualive"
        Label={{ label: 'Checkbox' }}
    />
    <Field component={RadioGroup} name="favoritactivity">
        <FormControlLabel
            value="painting"
            control={<Radio  />}
            label="Painting"
        />
        <FormControlLabel
            value="drawing"
            control={<Radio />}
            label="Drawing"
        />
        <FormControlLabel
            value="horse riding"
            control={<Radio />}
            label="Horse Riding"
        />
        <FormControlLabel
            value="zorbing"
            control={<Radio  />}
            label="Zorbing"
        />
    </Field>
  </div>
);
