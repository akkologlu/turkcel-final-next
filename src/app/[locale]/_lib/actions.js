"use server";
import { revalidatePath } from "next/cache";
const baseUrl = process.env.NEXT_PUBLIC_DB_URL;
export const getProducts = async (query) => {
  const res = await fetch(`${baseUrl}/products?${query}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};
export const getAllProductsLength = async () => {
  const res = await fetch(`${baseUrl}/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.length;
};
export const getProduct = async (id) => {
  const res = await fetch(`${baseUrl}/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
export const searchProducts = async (query) => {
  if (query.lenght < 2) return;
  const res = await fetch(`${baseUrl}/products?_limit=5&q=${query}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
export const getProductsByDressStyle = async (style) => {
  const res = await fetch(`${baseUrl}/products?dressStyle=${style}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getProductsByType = async (type) => {
  const res = await fetch(`${baseUrl}/products?type_like=${type}&_end=4`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getCustomerComments = async () => {
  const res = await fetch(`${baseUrl}/customerComments`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const addComment = async (id, comment) => {
  const res = await fetch(`${baseUrl}/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });
  if (!res.ok) {
    throw new Error("Failed to add comment");
  }
  revalidatePath("/products/[slug]", "page");
  return res.json();
};

export const addUser = async (user) => {
  const res = await fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!res.ok) {
    throw new Error("Failed to add user");
  }
  return res.json();
};

export const getUser = async (id) => {
  const res = await fetch(`${baseUrl}/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const updateUserDB = async (id, basket) => {
  const res = await fetch(`${baseUrl}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(basket),
  });
  if (!res.ok) {
    throw new Error("Failed to add to basket");
  }
  return res.json();
};

export const getFaqItems = async () => {
  const res = await fetch(`${baseUrl}/faq`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
