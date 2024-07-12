"use client";

import { signIn } from "@/src/firebase/firebase";
import { loginRedux } from "@/src/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { getUser } from "../_lib/actions";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "../_lib/validationSchema";
import Button from "../_components/common/Button";
import AuthGuard from "../_components/common/AuthGuard";

const LoginPage = () => {
  const t = useTranslations("lang");
  const locale = useLocale();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    const { email, password } = values;
    const { uid } = await signIn(email, password);
    const user = await getUser(uid);
    dispatch(
      loginRedux({
        id: user.id,
        name: user.name,
        email: user.email,
        basket: user.basket,
      })
    );
    router.push(`/${locale}/`);
    setSubmitting(false);
  };

  return (
    <AuthGuard>
      <div className="container">
        <div className="row">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="col-lg-6 d-flex flex-column mx-auto gap-3 rounded-5 border p-4 mt-5">
                <h3 className="text-center text-uppercase integralFont">
                  {t("login")}
                </h3>
                <div className="d-flex flex-column">
                  <label htmlFor="email" className="form-label">
                    {t("email")}
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="password" className="form-label">
                    {t("password")}
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <small className="text-end">
                  {t("dontYouHaveAccount")}{" "}
                  <Link className="text-black" href={`/${locale}/signup`}>
                    {t("signup")}
                  </Link>
                </small>
                <Button type="submit" disabled={isSubmitting}>
                  {t("login")}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </AuthGuard>
  );
};

export default LoginPage;
