import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './Accordion.css'

 const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript."
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React."
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js."
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js."
  },
];

function Accordion() {
    const [showContent, setShowContent] = useState(null)
    return (
        <div className="accordion">
            {items.map((item, index) => (
                <>
                    <div key={index} className="accordion-item">
                        <div className="accordion-title" onClick={() =>  setShowContent(showContent === index ? null : index) }>
                            {item.title}
                            {showContent===index ? <FaChevronDown /> : <FaChevronUp />}
                    </div>
                </div>
                    <div className="accordion-content">{showContent === index && <p>{item.content}</p>}</div>
                </>
            ))}
        </div>
    );
}

export default Accordion;