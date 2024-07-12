// pages/faq.js

import { getTranslations } from "next-intl/server";
import React from "react";
import { getFaqItems } from "../_lib/actions";

const Faqs = async () => {
  const faqItems = await getFaqItems();
  const t = await getTranslations("lang");
  return (
    <div className="container my-5">
      <h4 className="mb-4 text-center">{t("faqLong")}</h4>
      <div className="accordion" id="faqAccordion">
        {faqItems.map((item, index) => (
          <div className="accordion-item" key={item.id}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.id}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={item.id}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={item.id}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
