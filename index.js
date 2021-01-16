import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.scss";

const Feedback = () => {
  return (
    <div className="container">
      <div className="title">Feedback Page</div>
      <Form>
        <div className="fields-form">
          <div className="field">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" name="Email ID" placeholder="Enter your Email ID" />
          </div>
          <div className="field">
            <Form.Label>Feedback</Form.Label>
            <Form.Control as="textarea" rows={5} name="Feedback" />
          </div>
        </div>
        <div className="submit-button">
          <Button variant="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Feedback;
