"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

const AuthGuard = ({ children }) => {
  const locale = useLocale();
  const [isMounted, setIsMounted] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    if (isMounted) {
      const pathname = window.location.pathname;
      if (
        user &&
        (pathname === `/${locale}/login` || pathname === `/${locale}/signup`)
      ) {
        router.push(`/${locale}/`);
      }
      if (!user && pathname === `/${locale}/cart`) {
        router.push(`/${locale}/login`);
      }
    }
  }, [user, isMounted, locale, router]);
  if (!isMounted) {
    return null;
  }
  const pathname = window.location.pathname;
  if (
    !user &&
    (pathname === `/${locale}/login` || pathname === `/${locale}/signup`)
  ) {
    return children;
  }
  if (!user && pathname === `/${locale}/cart`) {
    return null;
  }
  if (
    user &&
    (pathname === `/${locale}/login` || pathname === `/${locale}/signup`)
  ) {
    return null;
  }
  return children;
};
export default AuthGuard;
