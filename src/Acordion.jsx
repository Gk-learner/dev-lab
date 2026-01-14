import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import "./styles.css";

const faqs = [
  {
    question: "What is this app about?",
    answer: "This app helps users track and improve their daily habits.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login screen and follow instructions.",
  },
  {
    question: "Can I use this app offline?",
    answer: "Yes, some features are available offline after the initial setup.",
  },
];

function Accordion() {
    const [show, setShow] = React.useState(false);
  const handleOpen = (e, index) => {
    console.log(e, index)
    setShow(!show);
  }
  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <><div onClick={handleOpen} className="faq-item" key={faq.question}>
          <button  className="faq-question">
            <span>{faq.question}</span>
            <span className="faq-icon">
              <FiChevronDown />
            </span>
          </button>
        </div>
          <div key={index} show>{faq.answer}</div></>

      ))}
    </div>
  );
}

export default Accordion;
