import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    emailjs
      .sendForm("service_4ljnm2r", "template_e6p8b5h", form.current, API_KEY)
      .then(
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
