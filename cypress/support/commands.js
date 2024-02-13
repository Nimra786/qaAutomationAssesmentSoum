import Ajv from 'ajv';

const ajv = new Ajv();

Cypress.Commands.add('validateJsonSchema', (schema, data) => {
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    cy.log('Response data did not match the expected JSON schema:');
    cy.log(validate.errors);
    throw new Error('JSON schema validation failed');
  }
});
