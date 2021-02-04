import React from "react";
import { Formik, Form } from 'formik';
import { FieldSet1 } from "./fieldset1";
import { FieldSet2 } from "./fieldset2";

export const FormikMultiple = () => {

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        favouritecolor: '',
        areyoualive: true,
        favoritactivity: 'drawing',
      }}
    >
        <Form>
            <h1>Multiple Form in one submission</h1>
            <FieldSet1 />
            <FieldSet2 />

            <button type="submit">Submit</button>
        </Form>
    </Formik>
  );
}
