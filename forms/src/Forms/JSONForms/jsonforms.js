import React from 'react';
import { JsonForms } from '@jsonforms/react';
import { person } from '@jsonforms/examples';
import {
  materialRenderers,
  materialCells
} from '@jsonforms/material-renderers';

const schema = person.schema;
const uischema = person.uischema;
const data = person.data;

export const JsonFormsExample = () => {
    return (
      <div className='App'>
        <JsonForms
          schema={schema}
          uischema={uischema}
          data={data}
          renderers={materialRenderers}
          cells={materialCells}
        />
      </div>
    );
  }
