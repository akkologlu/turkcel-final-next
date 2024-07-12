"use client";
import React, { useEffect, useState } from "react";
import { getCustomerComments } from "../../_lib/actions";
import Comment from "./Comment";
import { StyledIcon } from "../../_styled";
import Image from "next/image";
import { useTranslations } from "next-intl";

const HomePageComments = () => {
  const t = useTranslations("lang");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    const data = await getCustomerComments();
    setCustomers(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? customers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === customers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container pt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold integralFont">{t("ourHappyCustomers")}</h2>
        <div className="d-flex gap-3">
          <button className="border-0 bg-white" onClick={handlePrev}>
            <StyledIcon>
              <Image
                src="/icons/left-arrow.png"
                alt="verified"
                className="object-fit-contain"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </StyledIcon>
          </button>
          <button className="border-0 bg-white" onClick={handleNext}>
            <StyledIcon>
              <Image
                src="/icons/right-arrow.png"
                alt="verified"
                className="object-fit-contain"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </StyledIcon>
          </button>
        </div>
      </div>
      <div className="position-relative overflow-hidden">
        <div
          className="d-flex transition-transform gap-3"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / (customers.length - 2)
            }%)`,
            transition: "transform 0.5s",
          }}
        >
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="rounded-4 border p-6 mb-4 col-lg-4 p-4 col-12"
            >
              <Comment customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageComments;
