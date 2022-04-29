import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("", "", form.current, "").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    alert("Your email is sent now submit form!");
    window.localStorage.clear();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Message</label>
      <input name="message" placeholder="Do not use" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
