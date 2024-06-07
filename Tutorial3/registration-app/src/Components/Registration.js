import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // for redirection
import validator from 'validator';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // hook for navigation



  // Handle input changes
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear errors when user modifies field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  // Validate all form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.match(/^[a-zA-Z]{1,18}$/)) {
      newErrors.firstName = 'First name should only contain letters and max 18 characters.';
    }
    if (!formData.lastName.match(/^[a-zA-Z]{1,18}$/)) {
      newErrors.lastName = 'Last name should only contain letters and max 18 characters.';
    }
    if (!validator.isEmail(formData.email)) {
        newErrors.email = 'Invalid email format.';
      }
    // Updated password validation
    if (formData.password.length < 8 || !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).+$/.test(formData.password)) {
        newErrors.password = 'Password must be at least 8 characters long, include letters, numbers, and special characters.';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    // Form is valid if no errors
    return Object.keys(newErrors).length === 0;
  };

   // Handle form submission
   const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Store the relevant data in local storage
      localStorage.setItem('userData', JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email
      }));
      alert('Registered successfully');
      navigate('/profile'); // redirect to Profile page
    }
  };

  return (
    <Container className="p-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            isInvalid={!!errors.firstName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            isInvalid={!!errors.lastName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            isInvalid={!!errors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default RegistrationForm;
