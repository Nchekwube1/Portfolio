import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

function SchduleForm() {
  return (
    <>
      <div className="relative w-full px-8 mt-10">
        <h2 className="eurostile text-center text-4xl capitalize tracking-wide">
          I&apos;m Buzzing to hear about your projects. Lets get started
        </h2>
      </div>
      <div className="relative w-full flex justify-center items-center">
        <Formik
          initialValues={{ email: "", name: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="relative py-12 px-8 flex justify-evenly items-center w-3/4  flex-wrap shadow-sm rounded-md mt-10">
              <div className="flex flex-col w-2/5">
                <label className="text-lg eurostile">
                  Name:
                  <input
                    required
                    type="text"
                    name="Name"
                    className="w-full relative border-gray-200 border-2 rounded-md py-4 indent-3 text-xl europa font-light"
                  />
                </label>
              </div>

              <div className="flex flex-col w-2/5">
                <label className="text-lg eurostile">
                  Email:
                  <input
                    required
                    type="email"
                    name="Email"
                    className="w-full relative border-gray-200 border-2 rounded-md py-4 indent-3 text-xl europa font-light"
                  />
                </label>
              </div>

              <div className="flex flex-col w-2/5 mt-4 ">
                <label className="text-lg eurostile">
                  Project type:
                  <select
                    required
                    className="w-full relative border-gray-200 border-2 rounded-md py-4 indent-3 text-xl europa font-light pr-3"
                  >
                    <option value=""></option>
                    <option value="Web app">Web app</option>
                    <option value="Mobile app">Mobile app</option>
                  </select>
                </label>
              </div>
              <div className="flex flex-col w-2/5 mt-4">
                <label className="text-lg eurostile">
                  Budget:
                  <input
                    required
                    type="number"
                    name="Budget"
                    className="w-full relative border-gray-200 border-2 rounded-md py-4 indent-3 text-xl europa font-light"
                  />
                </label>
              </div>
              <div className="flex flex-col w-2/5 mt-10">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative border-gray-200 border-2 rounded-md py-4 indent-3 text-xl europa font-light"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default SchduleForm;
