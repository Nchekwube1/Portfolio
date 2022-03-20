import Axios from "axios";
import React, { useState } from "react";
interface Props {
  setEmailRes: React.Dispatch<React.SetStateAction<string>>;
  setEmailSent: React.Dispatch<React.SetStateAction<boolean>>;
}
function SchduleForm({ setEmailRes, setEmailSent }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [additional, setAdditional] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      projectType,
      budget,
      additional,
    };
    setIsSubmitting(true);
    Axios.post("/api/contact/", formData)
      .then((res) => {
        if (res.status === 200) {
          setEmailSent(true);
          setEmailRes(res.data);
          setName("");
          setEmail("");
          setProjectType("");
          setBudget("");
          setAdditional("");
          setIsSubmitting(false);

          setTimeout(() => {
            setEmailSent(false);
          }, 5000);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsSubmitting(false);
      });
  };
  return (
    <div className="relative w-full">
      <div className="relative w-full px-8 mt-10" data-aos="fade-up">
        <h2 className="eurostile text-center text-4xl capitalize tracking-wide">
          I&apos;m Buzzing to hear about your projects. Lets get started
        </h2>
      </div>
      <div className="relative w-full flex justify-center items-center">
        <form
          className="relative py-12 px-8 flex flex-col justify-evenly items-center w-full md:w-3/4  flex-wrap shadow-sm rounded-md mt-10"
          data-aos="fade-up"
          onSubmit={onSubmit}
        >
          <div className="relative w-full flex flex-col md:flex-row justify-evenly items-center ">
            <div className="flex flex-col w-full md:w-2/5 mt-4 ">
              <label className="text-lg eurostile">
                Name:
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full relative border-gray-200 border-2 rounded-md py-4 indent-3 text-xl europa font-light bg-transparent outline-none mt-4"
                />
              </label>
            </div>
          </div>
          <div className="relative w-full flex-col md:flex-row flex justify-evenly items-center">
            <div className="flex flex-col w-full md:w-2/5 mt-4 ">
              <label className="text-lg eurostile">
                Project type:
                <select
                  name="ProjectType"
                  required
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full relative border-gray-200 border-2 rounded-md py-4 indent-3 text-xl europa font-light pr-3 bg-transparent outline-none mt-4 "
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
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  type="text"
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
                value={additional}
                onChange={(e) => setAdditional(e.target.value)}
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
        </form>
      </div>
    </div>
  );
}

export default SchduleForm;
