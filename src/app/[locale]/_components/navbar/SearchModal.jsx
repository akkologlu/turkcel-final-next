"use client";
import React, { useEffect, useState } from "react";
import Search from "./Search";
import { searchProducts } from "../../_lib/actions";
import SearchedItem from "./SearchedItem";
import Link from "next/link";
import { useLocale } from "next-intl";

const SearchModal = () => {
  const locale = useLocale();
  const [query, setQuery] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);
  const fetchData = async () => {
    const response = await searchProducts(query);
    setSearchedProducts(response);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <div
      className="modal fade"
      id="searchModal"
      aria-labelledby="searchModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content w-100">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setQuery("")}
            ></button>
          </div>
          <div className="modal-body">
            <form className="d-flex col-xxl-6 col-xl-4 px-2 rounded-pill bg-body-tertiary me-3 w-100">
              <Search query={query} setQuery={setQuery} />
            </form>
            {query.length > 3 &&
              searchedProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/${locale}/products/${product.id}`}
                  className="row my-2 text-decoration-none text-black"
                >
                  <SearchedItem product={product} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
