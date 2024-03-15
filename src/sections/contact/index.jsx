import { useState } from "react";
import Heading from "../../components/heading";
import FormInput from "../../components/formInput";
import Text from "../../components/text";
import Button from "../../components/button";
import "./index.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="content">
          <Heading level={2}>Contact</Heading>
          <Text size="1.4rem" className="text">
            Questions or concerns? Just fill out the form below and our support
            <br />
            team will get back to you within 24 hours
          </Text>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <FormInput
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <FormInput
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <FormInput
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            style="full"
          />
          <FormInput
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            placeholder="What Service are you interested in?"
            required
            style="full"
          />
          <Button uppercase link="/">
            submit now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
