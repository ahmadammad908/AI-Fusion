import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Server/firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fusion from "../assets/images/fusion.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  };

  //////////////////////handle Google Login/////////////

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();

      await signOut(auth); // Sign out any currently signed-in user
      const result = await signInWithPopup(auth, provider);

      // Store user information in local storage
      const userInformation = {
        email: result.user.email,
        name: result.user.displayName,
      };
      localStorage.setItem("userInformation", JSON.stringify(userInformation));
      navigate("/ai");
    } catch (error) {
      console.error("Google login error:", error);
      toast("Error during Google login. Please try again.", {
        type: "error",
      });
    }
  };

  return (
    <>
      <div className="w-[100%] min-h-screen 2xl:absolute 2xl:top-0" id="demo10">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] md:min-h-screen bg-slate-50 flex justify-center">
            <img
              src="https://1.thewoodcafe.com/wp-content/uploads/2023/08/Elon-Musk-Explains-Why-He-Stopped-TikTok-Felt-There-AI-Probe-My-Brain-7.jpg"
              alt="Image"
            ></img>
          </div>
          <div className="w-full md:w-[50%]">
            <div className="flex flex-col justify-center items-center pt-[30px] 2xl:h-[100vh] md:h-[100vh] ">
              <img
                src={Fusion}
                className="w-[100px] 2xl:w-[200px] hidden 2xl:block"
                alt="Logo"
              />
              <h1
                className="tracking-[2px] font-bold font-sans text-center 2xl:text-8xl md:text-5xl text-5xl p-[10px]"
                id="span"
              >
                Login
              </h1>
              <h1 className="font-bold text-white pt-[20px] 2xl:pt-[40px] 2xl:text-3xl text-center">
                Please <span>Login</span> Your account and generate beautiful
                pictures
              </h1>
              <div className="flex justify-center pt-[15px]">
                <input
                  id="email"
                  name="email"
                  style={{ background: "transparent" }}
                  type="text"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-b-2 border-solid border-white placeholder-white text-white p-[10px] w-[300px] outline-none 2xl:w-[500px]  "
                />
              </div>
              <div className="flex justify-center pt-[20px]">
                <input
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  style={{ background: "transparent" }}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-b-2 border-solid border-white placeholder-white text-white p-[10px] w-[300px] outline-none 2xl:w-[500px] "
                />
              </div>
              <div className="flex flex-col items-center pt-[50px]">
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-[300px] p-[10px] rounded-lg 2xl:w-[500px] "
                >
                  Login
                </button>
                <div className="flex items-center pt-[15px] relative m-[10px] ">
                  <img
                    src="https://img.freepik.com/free-icon/search_318-265146.jpg"
                    className="w-[30px] absolute left-0 ml-[35px]"
                    alt="Google Icon"
                  />
                  <button
                    type="submit"
                    onClick={handleGoogleLogin}
                    className="bg-slate-300 text-black w-[300px] p-[10px] rounded-lg font-bold pl-[35px] 2xl:w-[500px]"
                  >
                    Login with Google
                  </button>
                </div>

                <Link to={"/register"}>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-[300px] p-[10px] rounded-lg 2xl:w-[500px] mt-[20px] m-[10px]">
                    SignUp
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
};

export default Login;
