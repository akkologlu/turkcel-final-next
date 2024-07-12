"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { StyledCartLength, StyledIcon } from "../../_styled";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

const CartButton = () => {
  const locale = useLocale();
  const [isMounted, setIsMounted] = useState(false);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    // becasuse of hydration error
    return null;
  }
  return (
    <>
      {user ? (
        <>
          <Link
            href={`/${locale}/cart`}
            className="position-relative text-decoration-none text-black"
          >
            <StyledCartLength>{user.basket.length}</StyledCartLength>
            <StyledIcon className="p-3 d-flex justify-content-center align-items-center">
              <Image
                src={`/icons/box-icon.png`}
                alt="box"
                width={24}
                height={24}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="cursor"
              />
            </StyledIcon>
          </Link>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CartButton;
