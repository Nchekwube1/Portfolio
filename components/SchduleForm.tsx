import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

function SchduleForm() {
  return (
    <div className="relative w-full">
      <div className="relative w-full px-8 mt-10" data-aos="fade-up">
        <h2 className="eurostile text-center text-4xl capitalize tracking-wide">
          I&apos;m Buzzing to hear about your projects. Lets get started
        </h2>
      </div>
      <div className="relative w-full flex justify-center items-center">
        <Formik
          initialValues={{
            Email: "",
            Name: "",
            ProjectType: "",
            Budget: "",
            Additional: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form
              className="relative py-12 px-8 flex flex-col justify-evenly items-center w-full md:w-3/4  flex-wrap shadow-sm rounded-md mt-10"
              data-aos="fade-up"
            >
              <div className="relative w-full flex-col md:flex justify-evenly items-center ">
                <div className="flex flex-col w-full md:w-2/5 mt-4 ">
                  <label className="text-lg eurostile">
                    Name:
                    <input
                      required
                      type="text"
                      name="Name"
                      className="w-full relative border-gray-200 border-2 rounded-md py-4 indent-3 text-xl europa font-light bg-transparent outline-none mt-4"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full md:w-2/5 mt-4 ">
                  <label className="text-lg eurostile">
                    Email:
                    <input
                      required
                      type="email"
                      name="Email"
                      className="w-full relative border-gray-200 border-2 rounded-md py-4 indent-3 text-xl europa font-light bg-transparent outline-none mt-4"
                    />
                  </label>
                </div>
              </div>
              <div className="relative w-full flex-col md:flex justify-evenly items-center">
                <div className="flex flex-col w-full md:w-2/5 mt-4 ">
                  <label className="text-lg eurostile">
                    Project type:
                    <select
                      name="ProjectType"
                      required
                      className="w-full relative border-gray-200 border-2 rounded-md py-4 indent-3 text-xl europa font-light pr-3 bg-transparent outline-none mt-4"
                    >
                      <option value=""></option>
                      <option value="Web app">Web app</option>
                      <option value="Mobile app">Mobile app</option>
                    </select>
                  </label>
                </div>
                <div className="flex flex-col w-full md:w-2/5  mt-4">
                  <label className="text-lg eurostile">
                    Budget:
                    <input
                      required
                      type="number"
                      name="Budget"
                      className="w-full relative border-gray-200 border-2 rounded-md py-4 indent-3 text-xl europa font-light bg-transparent outline-none mt-4"
                    />
                  </label>
                </div>
              </div>

              <div className="flex flex-col w-full md:w-5/6 mt-4">
                <label className="text-lg eurostile">
                  Additional information:
                  <textarea
                    required
                    rows={6}
                    name="Additional"
                    className="w-full relative border-gray-200 border-2 rounded-md py-4 indent-3 text-xl europa font-light bg-transparent outline-none mt-4"
                  />
                </label>
              </div>
              <div className="flex flex-col mt-10 ">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-16 border-blue-100 text-blue-100 hover:bg-blue-100 hover:text-white dark:border-slate-700 dark:text-white dark:hover:bg-slate-700 dark:hover:text-blue-100 relative border-2 rounded-full py-4 indent-3 text-xl europa font-light bg-transparent outline-none "
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SchduleForm;
