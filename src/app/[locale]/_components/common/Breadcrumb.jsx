import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const Breadcrumb = ({ product, path }) => {
  const locale = useLocale();
  return (
    <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
      <ol className="breadcrumb">
        {path.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            <Link
              href={`/${locale}/${item.href}`}
              className="text-decoration-none text-black"
              aria-current={index === path.length - 1 ? "page" : ""}
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li className="breadcrumb-item" aria-current="page">
          {product.dressStyle}
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {product.type}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
