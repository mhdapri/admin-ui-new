import React from "react";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Nama wajib diisi"),
  email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: Yup.string()
    .min(6, "Password minimal 6 karakter")
    .required("Password wajib diisi"),
});

function FormSignUp({ onSubmit }) {
  return (
    <>
      {/* form start */}
      <div className="mt-10">
        <h1 className="text-2xl font-bold mt-3 mb-6 text-center">
          Create an Account
        </h1>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await onSubmit(values.name, values.email, values.password);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Name */}
              <div className="mb-6 font-bold">
                <Field name="name">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      label="Name"
                      id="name"
                      type="text"
                      placeholder="Tanzir Rahman"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Email */}
              <div className="mb-6 font-bold">
                <Field name="email">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      label="Email Address"
                      id="email"
                      type="email"
                      placeholder="hello@example.com"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Password */}
              <div className="mb-6 font-bold">
                <Field name="password">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      label="Password"
                      id="password"
                      type="password"
                      placeholder="********"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Terms */}

              {/* Sign up button */}
              <Button type="submit">
                {isSubmitting ? "Loading..." : "Register"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      {/* form end */}

      {/* Divider */}
      <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
        <div className="border border-gray-05 w-full"></div>
        <div className="px-2 bg-special-mainBg absolute">or sign in with</div>
      </div>

      {/* Google button */}
      <div className="mb-8">
        <Button type="button" variant="secondary">
          <span className="flex items-center justify-center">
            <svg
              className="h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-0.5 0 48 48"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M9.827 24c0-1.524.253-2.985.705-4.356L2.623 13.604C1.082 16.734.214 20.26.214 24c0 3.737.868 7.262 2.407 10.389l7.905-6.051A14.17 14.17 0 0 1 9.827 24"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094l6.836-6.827C35.036 2.773 29.695.533 23.714.533c-9.287 0-17.269 5.311-20.091 13.071l7.91 6.039c1.822-5.532 7.016-9.51 13.181-9.51"
                  fill="#EB4335"
                ></path>
                <path
                  d="M23.714 37.867c-6.165 0-11.36-3.979-13.182-9.51l-7.908 6.039C6.445 42.156 14.427 47.467 23.714 47.467c5.732 0 11.204-2.035 15.312-5.848l-7.507-5.803c-2.118 1.335-4.785 2.051-7.804 2.051"
                  fill="#34A853"
                ></path>
                <path
                  d="M46.145 24c0-1.387-.214-2.88-.534-4.267H23.714v9.067h12.604c-.63 3.09-2.346 5.466-4.801 7.013l7.507 5.804C43.339 37.614 46.145 31.649 46.145 24"
                  fill="#4285F4"
                ></path>
              </g>
            </svg>
            Continue with Google
          </span>
        </Button>
      </div>

      {/* Link to Sign In */}
      <div className="flex justify-center text-sm">
        <p className="text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-primary text-sm font-bold">
            Sign in Here
          </Link>
        </p>
      </div>
    </>
  );
}

export default FormSignUp;
