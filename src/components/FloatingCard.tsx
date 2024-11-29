import React, { useState } from "react";
import styled from "styled-components";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  service: string; // Added service field to hold the selected value
}

interface MainProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const FloatingFormCard: React.FC<MainProps> = ({ setShowForm }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    service: "", // Initialize service field
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const handleClose = () => {
    setShowForm(false); // Close the form when the cross button is clicked
  };

  return (
    <Overlay>
      <Card>
        <CloseButton onClick={handleClose}>X</CloseButton>{" "}
        {/* Cross button to close form */}
        <h2>Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="mobile"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="^\+?[1-9]\d{1,14}$" // Regex for valid phone number format
            maxLength={15} // Limiting to 15 characters for international format
          />
          <Select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="business Website Development">
              Business Website Development
            </option>
            <option value="ecommerce Website Development">
              Ecommerce Website Development
            </option>
          </Select>
          <Button type="submit">Submit</Button>
        </Form>
      </Card>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Dimmed background effect */
  z-index: 1000;
`;

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  position: relative; /* To position the close button */

  h2 {
    font-size: var(--font-size-large);
    color: var(--green);
    margin-bottom: 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  color: #333;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: red; /* Change color when hovered */
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: var(--font-size-button);
  cursor: pointer;
  margin-top: 10px;
`;

export default FloatingFormCard;
