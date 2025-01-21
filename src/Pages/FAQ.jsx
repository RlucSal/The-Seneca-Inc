import React, { useState } from "react";
import "../app.css";

const FAQ = () => {
  // FAQ data
  const faqData = [
    {
      question: "What is The Seneca?",
      answer:
        "The Seneca, Inc. is a non-profit organization committed to making the Harvard experience more rewarding for undergraduate women. The Seneca aims to impact both its membership, as well as the greater Harvard community through a wide variety of events. The Seneca also maintains an active alumnae community, which provides mentorship and friendship for The Seneca’s younger members.",
    },
    {
      question: "What type of events does The Seneca hold?",
      answer:
        "The Seneca holds a wide range of social and women’s advocacy events. In recent years, we have hosted campus-wide events such as The Red Party, Harvard-Yale tailgates, The Women’s Faculty Reception, The Women’s Community Fair, Women’s Week, and various speaker and discussion events. We also hold a variety of internal events for our membership, including retreats, date events, brunches and dinners, discussion groups, and career panels and social events with Seneca alumnae.",
    },
    {
      question: "What makes The Seneca different from a final club or sorority?",
      answer:
        "Like many all-female organizations, The Seneca provides its members with the opportunity to form close friendships with a diverse group of women and creates an alumnae network that members can use as a resource for years to come. However, The Seneca is a 501(c)(3) nonprofit organization with a charitable mission, namely to improve opportunities for all women (not just its members) at Harvard and beyond.",
    },
    {
      question: "Why is membership limited?",
      answer:
        "The Seneca is composed of approximately fifty Harvard undergraduate women, selected through an open application process. While many of our events are open to all undergraduates, we recognize that The Seneca is more effective as a smaller organization.",
    },
    {
      question: "When does the application process start?",
      answer:
        "The Seneca’s application process runs through the month of October. All applicants submit a written application as well as attend events to get to know Seneca members and other applicants.",
    },
    {
      question: "Is alcohol a component of the selection process?",
      answer:
        "No. We do not haze new members, and we do not pressure applicants into drinking. There are members who do not drink for religious or personal reasons, and there are members who do.",
    },
    {
      question: "What elements go into the final decisions about who becomes a member?",
      answer:
        "We hope to gauge the applicant’s enthusiasm and dedication to furthering the mission of The Seneca. We look for applicants who will complement and strengthen the organization. The written application should be original, creative and should convey the applicant’s genuine interest in the organization.",
    },
    {
      question: "Is financial aid available for member dues?",
      answer:
        "Yes, financial aid is available to members who qualify. Anyone concerned with her ability to pay dues should speak confidentially with the Membership Chair or Treasurer.",
    },
    {
      question: "How much of a time commitment is The Seneca?",
      answer:
        "Time commitment to The Seneca varies. The minimum requirement is that every member attends a weekly All Member meeting and a weekly committee meeting. These meetings occur every Wednesday between 8 and 10pm.",
    },
    {
      question: "I’m interested—what next?",
      answer:
        "Please attend our info session in mid-September (time and place TBD). For more information email our membership chair at SenecaMC@gmail.com.",
    },
    {
      question: "If I am not accepted, can I apply again next year?",
      answer:
        "Absolutely. It is not uncommon for applicants to apply again, and they are considered on the same basis as other applicants. In fact, a number of members and alumnae have applied multiple times!",
    },
  ];

  // State to track open FAQ items
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle FAQ answer visibility
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="faq-container">
        <div className="faq-image"></div>
        <div className="image-text5">
          <h1>FAQ</h1>
        </div>
      </div>
      <div className="faq-content">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
