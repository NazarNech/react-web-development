import React, { Component, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import ".././App.css";

export default function Contacts() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [textDirty, setTextDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не може бути порожнім");
  const [textError, setTextError] = useState("");
  const [formValid, setFormValid] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^[a-zA-Z0-9.!#$%&amp;&#39;*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!re.test(String(e.target.value.toLowerCase()))) {
      setEmailError("Invalid Email");
    } else {
      setEmailError("");
    }
  };

  const textHandler = (e) => {
    setText(e.target.value);
    if (e.target.value.length < 10) {
      setTextError("It should be at least 10 characters");
      if (!e.target.value) {
        setTextError("The message cannot be empty");
      }
    } else {
      setTextError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.type) {
      case "email":
        setEmailDirty(true);
        break;
      default:
        if (e.target.tagName === "TEXTAREA") {
          setTextDirty(true);
        }
        break;
    }
  };

  useEffect(() => {
    if (emailError || textError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, textError]);

  return (
    <div style={{ marginTop: 100 }}>
      <Form className="contactsFormStyle">
        <Form.Text style={{ fontSize: 28, color: "black" }}>
          Contact Us:
        </Form.Text>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address:</Form.Label>
          {emailDirty && emailError && (
            <div style={{ color: "red" }}>{emailError}</div>
          )}
          <Form.Control
            onChange={(e) => emailHandler(e)}
            type="email"
            value={email}
            onBlur={(e) => blurHandler(e)}
            placeholder="Enter email"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Text style={{ fontSize: 20, color: "black" }}>
            Leave your feadback:
          </Form.Text>
          {textDirty && textError && (
            <div style={{ color: "red" }}>{textError}</div>
          )}
          <Form.Text
            as="textarea"
            onChange={(e) => textHandler(e)}
            value={text}
            onBlur={(e) => blurHandler(e)}
            className="textAreaContacts"
          />
        </Form.Group>
        <div disabled={!formValid} className="bStyle">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
