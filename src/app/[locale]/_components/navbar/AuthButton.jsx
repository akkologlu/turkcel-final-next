"use client";

import { useEffect, useState } from "react";
import { signOutFirebase } from "@/src/firebase/firebase";
import { logoutRedux } from "@/src/redux/features/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useLocale } from "next-intl";
import Image from "next/image";

const AuthButton = () => {
  const [isMounted, setIsMounted] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAuth = () => {
    if (user) {
      router.push(`/${locale}/login`);
      signOutFirebase();
      dispatch(logoutRedux());
    } else {
      router.push(`/${locale}/login`);
    }
  };

  if (!isMounted) {
    // becasuse of hydration error
    return null;
  }

  return (
    <div onClick={handleAuth} className="cursor">
      <Image
        src={user ? `/icons/signin.png` : `/icons/profile-icon.png`}
        alt="profile"
        width={24}
        height={24}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default AuthButton;
