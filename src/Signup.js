import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./Signup.css";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must Be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "must be under 15 characters")
        .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required")
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log("touched", formik.touched);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && <p>{formik.errors.firstName}</p>}
      </div>
      <div className="input-container">
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
      </div>
      {formik.touched.lastName && formik.errors.lastName && <p>{formik.errors.lastName}</p>}
      <div className="input-container">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-Mail"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>
      {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
