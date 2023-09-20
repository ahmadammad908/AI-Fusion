import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
const Feedback = () => {
  const form = useRef();
  const [nameError, setNameError] = useState("");
  const [nameSuccessMessage, setNameSuccessMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSuccessMessage, setEmailSuccessMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [messageSuccessMessage, setMessageSuccessMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (e) => {
    const name = e.target.value;
    if (name.length < 3) {
      setNameError("Name must be at least 2 characters.");
      setNameSuccessMessage("");
    } else {
      setNameError("");
      setNameSuccessMessage("Success");
    }
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
      setEmailSuccessMessage("");
    } else {
      setEmailError("");
      setEmailSuccessMessage("Success");
    }
  };

  const handleMessageChange = (e) => {
    const message = e.target.value;
    if (message.length < 10) {
      setMessageError("Message must be at least 10 characters.");
      setMessageSuccessMessage("");
    } else {
      setMessageError("");
      setMessageSuccessMessage("Success");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setNameError("");
    setEmailError("");
    setMessageError("");
    setSuccessMessage("");

    const nameInput = form.current["user_name"];
    if (nameInput.value.length < 4) {
      setNameError("Name must be at least 2 characters.");
      return;
    } else {
      setNameError("");
      setNameSuccessMessage("Success");
    }

    const emailInput = form.current["user_email"];
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
      setEmailSuccessMessage("Success");
    }

    const messageInput = form.current["message"];
    if (messageInput.value.length < 10) {
      setMessageError("Message must be at least 10 characters.");
      return;
    } else {
      setMessageError("");
      setMessageSuccessMessage("Success");
    }

    setIsLoading(true);

    // Add a delay of 2 seconds (adjust as needed)
    setTimeout(() => {
      // If all validations pass, set a success message.
      setSuccessMessage("Your message was successfully sent.");

      emailjs
        .sendForm(
          "service_1a987wd", // Email service ID
          "template_uiiyo84", // Template ID
          form.current,
          "4pRsHhQ75qM9Mv6FP" // API key
        )
        .then(
          (result) => {
            console.log(result.text);
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000); // 2 seconds delay
  };

  return (
    <>
      {successMessage ? (
        <>
          <div className="flex flex-wrap">
            <section
              className="text-gray-400 bg-gray-900 body-font flex justify-center items-center 2xl:h-[100vh] md:h-[auto] w-full md:w-[50%] absolute top-0 md:relative"
              id="for"
            >
              <div className="flex justify-center items-center 2xl:h-[100vh] md:h-[100vh]">
                <div class="card">
                  <button class="dismiss" type="button">
                    ×
                  </button>
                  <div class="header">
                    <div class="div_image_v">
                      <div class="image">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M20 7L9.00004 18L3.99994 13"
                              stroke="#000000"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div class="content">
                      <h1 class="title">Your Message has Successfully Sent</h1>
                      <p class="message">Thank you for your Feedback</p>
                    </div>
                    <div className="flex justify-center mt-[20px] p-[10px] text-white bg-green-700 rounded-xl">
                      <Link to={"/"}>
                        <button>Back to Home</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              ;
            </section>
            <div className="w-full md:w-[50%]">
              <img
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "100%",
                }}
                src="https://cdn.pixabay.com/photo/2023/04/18/10/19/ai-generated-7934798_1280.jpg"
                alt="Background Image"
                className="w-[100%] md:h-[850px] 2xl:h-[100vh] hidden md:block"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-wrap">
          <section
            className="text-gray-400 bg-gray-900 body-font relative flex justify-center items-center 2xl:h-[100vh] md:h-[auto] w-full md:w-[50%]"
            id="for"
          >
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                  FeedBack
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Hello Ladies and gentleman if you see any problem in this
                  application please share the problem and send Your feedback
                </p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="name"
                          className="leading-7 text-sm text-gray-400"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          onChange={handleNameChange}
                          name="user_name"
                          className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-pink-500 focus:bg-gray-900 focus:ring-2 focus:ring-pink-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                      <p
                        className={`text-red-500 text-[10px] ${
                          nameError ? "" : "hidden"
                        }`}
                      >
                        {nameError}
                      </p>
                      <p
                        className={`text-green-500 text-[10px] pt-[10px] ${
                          nameSuccessMessage ? "" : "hidden"
                        }`}
                      >
                        {nameSuccessMessage}
                      </p>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="email"
                          className="leading-7 text-sm text-gray-400"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          onChange={handleEmailChange}
                          name="user_email"
                          className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-pink-500 focus:bg-gray-900 focus:ring-2 focus:ring-pink-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                      {emailError ? (
                        <p className="text-red-500 text-[10px] pt-[10px]">
                          {emailError}
                        </p>
                      ) : null}
                      <p className={`text-green-500 text-[10px] pt-[10px]`}>
                        {emailSuccessMessage}
                      </p>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label
                          htmlFor="message"
                          className="leading-7 text-sm text-gray-400"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          onChange={handleMessageChange}
                          name="message"
                          className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-pink-500 focus:bg-gray-900 focus:ring-2 focus:ring-pink-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                      </div>
                      {messageError ? (
                        <p className="text-red-500 text-[10px] pt-[10px]">
                          {messageError}
                        </p>
                      ) : null}
                      <p className={`text-green-500 text-[10px] pt-[10px]`}>
                        {messageSuccessMessage}
                      </p>
                    </div>
                    <div className="p-2 w-full">
                      <button
                        type="submit"
                        className={`flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg relative ${
                          isLoading ? "cursor-not-allowed" : ""
                        }`}
                        disabled={isLoading}
                      >
                        {isLoading && (
                          <div className="loader">
                            <div className="loader-dot"></div>
                            <div className="loader-dot"></div>
                            <div className="loader-dot"></div>
                          </div>
                        )}
                        {isLoading ? "" : "Send Message"}
                      </button>
                    </div>
                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                      <a className="text-pink-400">fusionai203@gmail.com</a>
                      <p className="leading-normal my-5">Ai generated images</p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-4 text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-4 text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                          </svg>
                        </a>
                        <a className="ml-4 text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <div className="w-full md:w-[50%]" style={{ background: "#212121" }}>
            <img
              style={{
                background: "#212121",
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
              src="https://cdn.pixabay.com/photo/2023/04/18/10/19/ai-generated-7934798_1280.jpg"
              alt="Background Image"
              className="w-[100%] md:h-[850px] 2xl:h-[100vh]  "
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Feedback;
