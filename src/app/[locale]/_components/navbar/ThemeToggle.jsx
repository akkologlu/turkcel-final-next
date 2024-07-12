"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { StyledIcon } from "../../_styled";
import { toggleDarkMode } from "@/src/redux/features/themeSlice";
import Image from "next/image";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <button
      onClick={handleToggle}
      darkmode={{ darkMode }}
      className="bg-transparent border-0"
    >
      <StyledIcon>
        <Image
          src={darkMode ? "/icons/moon.png" : "/icons/sun.png"}
          alt="moon"
          width={24}
          height={24}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </StyledIcon>
    </button>
  );
};

export default ThemeToggle;
