import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import toast from "react-hot-toast"; // Import react-hot-toast

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
  const [loading, setLoading] = useState(false); // Loading state to track form submission status
  const [isMounted, setIsMounted] = useState(true); // Track whether the component is mounted

  useEffect(() => {
    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      setIsMounted(false);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when submitting

    // Form validation
    if (!formData.name) {
      toast.error("Name is required!");
      setLoading(false); // Reset loading state
      return;
    }
    if (!formData.email) {
      toast.error("Email is required!");
      setLoading(false); // Reset loading state
      return;
    }
    if (!formData.mobile) {
      toast.error("Mobile number is required!");
      setLoading(false); // Reset loading state
      return;
    }
    if (!formData.service) {
      toast.error("Service selection is required!");
      setLoading(false); // Reset loading state
      return;
    }

    // Proceed with the form submission if validation passes
    toast
      .promise(
        fetch("https://nodemailer-gmail.onrender.com/divyanshu", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then(async (response) => {
            if (response.ok) {
              const data = await response.json();
              console.log("Form submitted successfully:", data);
              setFormData({
                name: "",
                email: "",
                mobile: "",
                service: "",
              });

              if (isMounted) {
                setShowForm(false); // Hide the form on successful submission
              }
              setTimeout(() => {
                toast("While you're here, you can view my portfolio!", {
                  icon: "👏",
                });
              }, 1000); // 1-second delay

              return "Form submitted successfully!"; // Return success message
            } else {
              throw new Error("Error submitting form");
            }
          })
          .catch((error) => {
            console.error("Form submission failed:", error);
            throw new Error("Could not submit the form. Please try again.");
          }),
        {
          loading: "Submitting form...",
          success: <b>Form submitted successfully!</b>,
          error: <b>Could not submit the form. Please try again.</b>,
        }
      )
      .finally(() => {
        setLoading(false); // Ensure loading is reset after the promise is settled (success or failure)
      });
  };

  const handleClose = () => {
    setShowForm(false); // Close the form when the cross button is clicked
  };

  return (
    <Overlay>
      <Card>
        <CloseButton onClick={handleClose}>X</CloseButton>
        {/* Cross button to close form */}
        <h2>Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </Label>

          <Label>
            Email
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </Label>

          <Label>
            Mobile Number
            <Input
              type="tel"
              name="mobile"
              placeholder="+91 9879618851" // Added example number in the placeholder
              value={formData.mobile}
              onChange={handleChange} // Limiting to 15 characters for international format
            />
          </Label>

          <Label>
            Service
            <Select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select Service</option>
              <option value="business Website Development">
                Business Website Development
              </option>
              <option value="ecommerce Website Development">
                Ecommerce Website Development
              </option>
            </Select>
          </Label>

          <Button type="submit">
            {loading ? <RotatingCircle /> : "Submit"}
          </Button>
        </Form>
      </Card>
    </Overlay>
  );
};
const Label = styled.label`
  text-align: left;
  font-size: 1rem;
  margin-bottom: 5px;
  color: #333;
`;

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
  gap: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%; /* Ensure inputs take up the full width of the container */
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%; /* Ensure select takes up full width */
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: var(--font-size-button);
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RotatingCircle = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default FloatingFormCard;
