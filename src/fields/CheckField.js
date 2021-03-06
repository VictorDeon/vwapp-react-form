import React, { Fragment } from "react";
import { Form } from "react-bootstrap";

export const CheckField = field => {
  const { error } = field.meta;

  return (
    <Fragment>
      <Form.Check
        custom
        {...field.input}
        checked={field.input.type === "switch" ? field.input.value : field.input.checked}
        disabled={field.disabled || false}
        id={field.id}
        inline={field.inline || false}
        label={field.label}
        feedback={error}
        isInvalid={error}
      />
    </Fragment>
  );
};
