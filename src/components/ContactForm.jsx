import React, { useState, useRef } from "react";
import Tooltip from "./Tooltip";

const ContactForm = ({ iconColor, errColor, handleSent }) => {
  const [formInput, setFormInput] = useState({
    name: "",
    company: "",
    email: "",
    msg: "",
  });

  const [showTooltip, setShowTooltip] = useState(false);
  const [validationErr, setValidationErr] = useState([
    {
      fieldName: "",
      message: "",
      top: "0px",
    },
  ]);

  const nameRef = useRef();
  const companyRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
    setShowTooltip(false);
    setValidationErr({ fieldName: "", message: "", top: "0px" });
  };

  //used to trim whitespace off the value.
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value.replace(/\s+/g, " ").trim(),
    });
  };

  const sentHandler = (isSent, errMsg) => {
    handleSent(isSent, errMsg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTooltip(false);
    setValidationErr({ fieldName: "", message: "", top: "0px" });

    //validate
    if (
      /^[a-zA-Z]+ [a-zA-Z]+$/.test(formInput.name) === false ||
      formInput.name.length === 0
    ) {
      setValidationErr({
        fieldName: "name",
        message: "Please enter your full name.",
        top: nameRef.current.offsetTop + nameRef.current.offsetHeight + "px",
      });

      setShowTooltip(true);
      nameRef.current.focus();
      return false;
    } else if (/(.*[a-z]){3}/i.test(formInput.company) === false) {
      setValidationErr({
        fieldName: "company",
        message: "Please enter your company name.",
        top:
          companyRef.current.offsetTop + companyRef.current.offsetHeight + "px",
      });

      setShowTooltip(true);
      companyRef.current.focus();
      return false;
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formInput.email) === false) {
      setValidationErr({
        fieldName: "email",
        message: "Please enter a valid email address.",
        top: emailRef.current.offsetTop + emailRef.current.offsetHeight + "px",
      });

      setShowTooltip(true);
      emailRef.current.focus();
      return false;
    } else if (formInput.msg.length == 0) {
      setValidationErr({
        fieldName: "msg",
        message: "Please include a meaningful message.",
        top: msgRef.current.offsetTop + msgRef.current.offsetHeight + "px",
      });

      setShowTooltip(true);
      msgRef.current.focus();
      return false;
    } else if (formInput.msg.length > 0 && formInput.msg.length < 40) {
      setValidationErr({
        fieldName: "msg",
        message: "Please be more descriptive.",
        top: msgRef.current.offsetTop + msgRef.current.offsetHeight + "px",
      });

      setShowTooltip(true);
      msgRef.current.focus();
      return false;
    } else {
      const formData = new FormData();
      Object.entries(formInput).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const mailer = import.meta.env.VITE_MAIL_URL;

      fetch(mailer, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            sentHandler(true, "");
            localStorage.setItem("sent", "true");
          } else {
            sentHandler(false, "Something went terribly wrong.");
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        autoComplete="on"
        className="relative mt-5 min-w-[280px]"
      >
        <Tooltip
          showTooltip={showTooltip}
          offsetTop={validationErr.top}
          tooltipText={validationErr.message}
        />

        <div className="form-input-wrapper">
          <label
            className="form-label"
            htmlFor="name"
            style={{
              color: `${
                validationErr.fieldName === "name" ? errColor : iconColor
              }`,
            }}
          >
            <span className="lnr lnr-user"></span>
          </label>

          <input
            className="form-input"
            ref={nameRef}
            type="text"
            name="name"
            id="name"
            value={formInput.name}
            placeholder="Name"
            maxLength={50}
            autoComplete="name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="form-input-wrapper">
          <label
            className="form-label"
            htmlFor="company"
            style={{
              color: `${
                validationErr.fieldName === "company" ? errColor : iconColor
              }`,
            }}
          >
            <span className="lnr lnr-map-marker"></span>
          </label>
          <input
            className="form-input"
            ref={companyRef}
            type="text"
            name="company"
            id="company"
            value={formInput.company}
            placeholder="Company"
            maxLength={100}
            autoComplete="organization"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="form-input-wrapper">
          <label
            className="form-label"
            htmlFor="email"
            style={{
              color: `${
                validationErr.fieldName === "email" ? errColor : iconColor
              }`,
            }}
          >
            <span className="lnr lnr-envelope"></span>
          </label>
          <input
            className="form-input"
            ref={emailRef}
            type="text"
            name="email"
            id="email"
            value={formInput.email}
            placeholder="Email"
            maxLength={75}
            autoComplete="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="form-input-wrapper">
          <label
            className="form-label"
            htmlFor="msg"
            style={{
              color: `${
                validationErr.fieldName === "msg" ? errColor : iconColor
              }`,
            }}
          >
            <span className="lnr lnr-bubble"></span>
          </label>
          <textarea
            className="form-input [line-height:1.5]"
            ref={msgRef}
            name="msg"
            id="msg"
            value={formInput.msg}
            placeholder="Message"
            rows="3"
            cols="40"
            maxLength={500}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
        </div>
        <div className="w-full pt-3 pb-8 sm:pt-5 sm:pb-0 text-center">
          <button className="form-btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
