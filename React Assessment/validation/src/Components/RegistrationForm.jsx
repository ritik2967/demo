import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

// Custom Hook for validation
const useValidation = (validateFunction, errorMessage) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validate = (val) => {
    if (validateFunction(val)) {
      setError("");
    } else {
      setError(errorMessage);
    }
  };

  const onChange = (e) => {
    const val = e.target.value;
    setValue(val);
    validate(val);
  };

  return { value, onChange, error };
};

const RegistrationForm = () => {
  // Validators using regular expressions
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validateLength = (input) => input.length <= 4;
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  // Form fields
  const firstName = useValidation(
    validateLength,
    "First name must be 4 characters or less"
  );
  const lastName = useValidation(() => true, ""); // No specific validation
  const email = useValidation(validateEmail, "Enter a valid email address");
  const password = useValidation(() => true, "");
  const retypePassword = useValidation(
    (value) => value === password.value,
    "Passwords do not match"
  );
  const phoneNumber = useValidation(
    validatePhone,
    "Enter a valid 10-digit phone number"
  );
  const region = useValidation(() => true, "");
  const town = useValidation(() => true, "");
  const country = useValidation(() => true, "");
  const address = useValidation(() => true, "");
  const postcode = useValidation(() => true, "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidForm =
      !firstName.error &&
      !lastName.error &&
      !email.error &&
      !password.error &&
      !retypePassword.error &&
      !phoneNumber.error;

    if (isValidForm) {
      console.log("Form submitted successfully!", {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        region: region.value,
        town: town.value,
        country: country.value,
        address: address.value,
        postcode: postcode.value,
      });
    } else {
      console.log("Something miss");
    }
  };

  return (
    <Container className="mt-4">
      <h2>Registration Form</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={firstName.value}
                onChange={firstName.onChange}
                isInvalid={!!firstName.error}
              />
              <Form.Control.Feedback type="invalid">
                {firstName.error}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName.value}
                onChange={lastName.onChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email.value}
            onChange={email.onChange}
            isInvalid={!!email.error}
          />
          <Form.Control.Feedback type="invalid">
            {email.error}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password.value}
            onChange={password.onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Retype Password</Form.Label>
          <Form.Control
            type="password"
            value={retypePassword.value}
            onChange={retypePassword.onChange}
            isInvalid={!!retypePassword.error}
          />
          <Form.Control.Feedback type="invalid">
            {retypePassword.error}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            value={phoneNumber.value}
            onChange={phoneNumber.onChange}
            isInvalid={!!phoneNumber.error}
          />
          <Form.Control.Feedback type="invalid">
            {phoneNumber.error}
          </Form.Control.Feedback>
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Region</Form.Label>
              <Form.Control
                type="text"
                value={region.value}
                onChange={region.onChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Town</Form.Label>
              <Form.Control
                type="text"
                value={town.value}
                onChange={town.onChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            value={country.value}
            onChange={country.onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            value={address.value}
            onChange={address.onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Postcode/Zip</Form.Label>
          <Form.Control
            type="text"
            value={postcode.value}
            onChange={postcode.onChange}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegistrationForm;
