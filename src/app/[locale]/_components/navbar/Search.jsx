"use client";
import React from "react";
import { StyledIcon, StyledNewsletterInput } from "../../_styled";
import Image from "next/image";

const Search = ({ query, setQuery }) => {
  return (
    <>
      <StyledIcon className="my-auto d-flex justify-content-center align-items-center">
        <Image
          src={`/icons/search-icon.png`}
          alt="search"
          width={20}
          height={20}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </StyledIcon>
      <StyledNewsletterInput
        className="form-control bg-transparent border-0 w-100"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
};

export default Search;
