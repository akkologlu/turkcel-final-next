"use client";

import { useRouter } from "next/navigation";
import { useReducer } from "react";
import InputRange from "../common/InputRange";
import Image from "next/image";
import {
  StyledFilterMenu,
  StyledOrderSelect,
  StyledOrderSelectDiv,
} from "../../_styled";
import Pagination from "./Pagination";
import Button from "../common/Button";
import ButtonFilter from "./Filters/ButtonFilter";
import ColorFilter from "./Filters/ColorFilter";
import SizeFilter from "./Filters/SizeFilter";
import { useTranslations } from "next-intl";

const initialState = {
  price: [0, 200],
  colors: [],
  size: [],
  dressStyle: [],
  type: [],
  leftValue: 0,
  rightValue: 300,
  sort: "price,asc",
  page: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRICE":
      return {
        ...state,
        leftValue: action.payload.left,
        rightValue: action.payload.right,
      };
    case "SET_FILTERS":
      return { ...state, [action.payload.filter]: action.payload.value };
    case "SET_SORT":
      return { ...state, sort: action.payload };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

const Filter = ({ length }) => {
  const t = useTranslations("lang");
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateURL = (newState) => {
    const query = new URLSearchParams();

    if (
      newState.leftValue !== initialState.leftValue ||
      newState.rightValue !== initialState.rightValue
    ) {
      query.set("price_gte", newState.leftValue);
      query.set("price_lte", newState.rightValue);
    }

    if (newState.colors.length > 0) {
      query.set("colors_like", newState.colors.join("|"));
    }

    if (newState.size.length > 0) {
      query.set("sizes_like", newState.size.join("|"));
    }

    if (newState.dressStyle.length > 0) {
      query.set("dressStyle_like", newState.dressStyle.join("|"));
    }

    if (newState.type.length > 0) {
      query.set("type_like", newState.type.join("|"));
    }

    const order = newState.sort;
    if (order === "rating,asc" || order === "rating,desc") {
      query.set("_sort", "rating");
      query.set("_order", order.split(",")[1]);
    } else {
      query.set("_sort", "price");
      query.set("_order", order.split(",")[1]);
    }

    query.set("_page", newState.page);
    query.set("_limit", 9);

    router.push(`/en/products?${query.toString()}`);
  };

  const applyFilters = () => {
    updateURL(state);
  };

  const handleSortChange = (e) => {
    const order = e.target.value;
    const newState = { ...state, sort: order };
    dispatch({ type: "SET_SORT", payload: order });
    updateURL(newState);
  };

  const handleFilterChange = (filter, value) => {
    const newState = { ...state, [filter]: value };
    dispatch({ type: "SET_FILTERS", payload: { filter, value } });
    updateURL(newState);
  };

  const handlePageChange = (newPage) => {
    const newState = { ...state, page: newPage };
    dispatch({ type: "SET_PAGE", payload: newPage });
    updateURL(newState);
  };

  return (
    <StyledFilterMenu>
      <div className="border rounded-4 p-4">
        <div className="d-lg-flex d-none justify-content-between align-items-center">
          <h5 className="fw-bolder">{t("filters")}</h5>
          <StyledOrderSelectDiv>
            <p className="mb-0">
              {t("showing")} {length} {t("products")}. {t("sortBy")}:{" "}
            </p>
            <StyledOrderSelect
              value={state.sort}
              onChange={handleSortChange}
              className="border-0"
            >
              <option value="price,asc">{t("priceAsc")}</option>
              <option value="price,desc">{t("priceDesc")}</option>
              <option value="rating,asc">{t("ratingAsc")}</option>
              <option value="rating,desc">{t("ratingDesc")}</option>
            </StyledOrderSelect>
          </StyledOrderSelectDiv>

          <Image
            src="/icons/filter.png"
            alt="filter"
            width={24}
            height={24}
            sizes="(max-width: 640px) 24px, 48px"
          />
        </div>
        <hr />
        <ButtonFilter
          options={["T-Shirts", "Shorts", "Shirts", "Hoodie", "Jeans"]}
          stateKey="type"
          state={state}
          handleFilterChange={handleFilterChange}
        />
        <hr />
        <div className="py-lg-3">
          <h5 className="fw-bolder">{t("price")}</h5>
          <InputRange
            leftValue={state.leftValue}
            rightValue={state.rightValue}
            setLeftValue={(left) =>
              dispatch({
                type: "SET_PRICE",
                payload: { left, right: state.rightValue },
              })
            }
            setRightValue={(right) =>
              dispatch({
                type: "SET_PRICE",
                payload: { left: state.leftValue, right },
              })
            }
          />
        </div>
        <hr />
        <ColorFilter
          colors={[
            "red",
            "green",
            "blue",
            "yellow",
            "white",
            "black",
            "orange",
            "pink",
            "purple",
            "gray",
          ]}
          state={state}
          dispatch={dispatch}
        />
        <hr />
        <SizeFilter
          sizes={[
            "XX-Small",
            "X-Small",
            "Large",
            "X-Large",
            "XX-Large",
            "3X-Large",
            "4X-Large",
          ]}
          state={state}
          dispatch={dispatch}
        />
        <hr />
        <ButtonFilter
          options={["Casual", "Formal", "Party", "Gym"]}
          stateKey="dressStyle"
          state={state}
          handleFilterChange={handleFilterChange}
        />
        <Button onclick={applyFilters}>{t("applyFilter")}</Button>
      </div>
      <div className="d-none d-lg-flex">
        <Pagination
          currentPage={state.page}
          onPageChange={handlePageChange}
          plength={length}
        />
      </div>
    </StyledFilterMenu>
  );
};

export default Filter;
