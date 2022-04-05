import React from "react";
import { Form } from "react-bootstrap";

const TextField = ({helperText, label, type, onChange, ...props}) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} {...props} onChange={onChange}/>
      <Form.Text className="text-muted">
       {helperText}
      </Form.Text>
    </Form.Group>
  );
};

export default TextField;
