"use client";
import { register } from "@/src/firebase/firebase";
import { loginRedux } from "@/src/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { addUser, getUser } from "../_lib/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "../_components/common/Button";
import { useLocale, useTranslations } from "next-intl";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupSchema } from "../_lib/validationSchema";
import AuthGuard from "../_components/common/AuthGuard";

const SignUpPage = () => {
  const locale = useLocale();
  const router = useRouter();
  const dispatch = useDispatch();
  const t = useTranslations("lang");
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { name, email, password } = values;
      const { uid } = await register(email, password);
      await addUser({
        id: uid,
        email: email,
        name: name,
        basket: [],
      });
      const user = await getUser(uid);
      dispatch(
        loginRedux({
          id: user.id,
          email: user.email,
          basket: user.basket,
          name: user.name,
        })
      );
      router.push("/");
    } catch (error) {
      toast.error("Signup error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthGuard>
      <div className="container">
        <div className="row">
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={signupSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="col-lg-6 d-flex flex-column mx-auto gap-3 rounded-5 border p-4 mt-5">
                <h3 className="text-center text-uppercase integralFont">
                  {t("signup")}
                </h3>
                <div className="d-flex flex-column">
                  <label htmlFor="name" className="form-label">
                    {t("name")}
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>
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
                  {t("alreadyHaveAccount")}{" "}
                  <Link className="text-black" href={`/${locale}/login`}>
                    {t("login")}
                  </Link>
                </small>
                <Button type="submit" disabled={isSubmitting}>
                  {t("signup")}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </AuthGuard>
  );
};

export default SignUpPage;
