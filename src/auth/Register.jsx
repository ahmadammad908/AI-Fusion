// import React, { useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   updateProfile,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "firebase/auth";
// import { auth } from "../Server/firebaseConfig";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   let navigate = useNavigate();

//   const handleSignup = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);

//       // Update the user's profile with the name
//       await updateProfile(auth.currentUser, { displayName: name });

//       // Store user information in local storage
//       const userInformation = {
//         email: email,
//         name: name,
//       };
//       localStorage.setItem("userInformation", JSON.stringify(userInformation));

//       navigate("/");
//     } catch (error) {
//       toast(error.code, { type: "error" });
//     }
//   };

//   const handleGoogleSignup = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);

//       // Store user information in local storage
//       const userInformation = {
//         email: result.user.email,
//         name: result.user.displayName,
//       };
//       localStorage.setItem("userInformation", JSON.stringify(userInformation));

//       navigate("/");
//     } catch (error) {
//       toast(error.code, { type: "error" });
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen "
//       style={{ margin: "30px", marginTop: "-90px" }}
//     >
//       <div className="bg-white shadow-md rounded-md p-8 max-w-sm w-full">
//         <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
//         <div className="space-y-4">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               autoComplete="name"
//               required
//               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               autoComplete="email"
//               required

//               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter your email"
//
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               autoComplete="new-password"
//               required
//               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               onClick={handleSignup}
//             >
//               Register
//             </button>
//             <button
//               className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//               onClick={handleGoogleSignup}
//             >
//               Sign Up with Google
//             </button>
//           </div>
//           <div>
//             <Link to={"/login"}>
//               <button>Login</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <ToastContainer
//         position="bottom-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//     </div>
//   );
// }
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../Server/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Fusion from "../assets/images/fusion.png";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      // Update the user's profile with the name
      await updateProfile(auth.currentUser, { displayName: name });

      // Store user information in local storage
      const userInformation = {
        email: email,
        name: name,
      };
      localStorage.setItem("userInformation", JSON.stringify(userInformation));

      navigate("/ai");
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Store user information in local storage
      const userInformation = {
        email: result.user.email,
        name: result.user.displayName,
      };
      localStorage.setItem("userInformation", JSON.stringify(userInformation));

      navigate("/");
    } catch (error) {
      toast(error.code, { type: "error" });
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
                className="tracking-[2px] font-bold font-sans text-center 2xl:text-8xl md:text-5xl text-5xl pt-[20px]"
                id="span"
              >
                Hello Guys
              </h1>
              <h1 className="font-bold text-white pt-[20px] 2xl:pt-[40px] 2xl:text-3xl text-center">
                Please <span>Sign Up</span> Your account and generate beautiful
                pictures
              </h1>
              <div className="flex justify-center pt-[50px]">
                <input
                  style={{ background: "transparent" }}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="border-b-2 border-solid border-white placeholder-white text-white p-[10px] w-[300px] outline-none 2xl:w-[500px]  "
                />
              </div>
              <div className="flex justify-center pt-[15px]">
                <input
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
                  style={{ background: "transparent" }}
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-b-2 border-solid border-white placeholder-white text-white p-[10px] w-[300px] outline-none 2xl:w-[500px] "
                />
              </div>
              <div className="flex flex-col items-center pt-[50px]">
                <button
                  onClick={handleSignup}
                  className="text-white w-[300px] p-[10px] rounded-lg 2xl:w-[500px] bg-gradient-to-r from-cyan-500 to-blue-500"
                >
                  Sign Up
                </button>
                <div className="flex items-center pt-[20px] relative m-[10px] ">
                  <img
                    src="https://img.freepik.com/free-icon/search_318-265146.jpg"
                    className="w-[30px] absolute left-0 ml-[35px]"
                    alt="Google Icon"
                  />
                  <button
                    onClick={handleGoogleSignup}
                    className="bg-slate-300 text-black w-[300px] p-[10px] rounded-lg font-bold pl-[35px] 2xl:w-[500px]"
                  >
                    Sign Up with Google
                  </button>
                </div>
                <Link to={"/login"}>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-[300px] p-[10px] rounded-lg 2xl:w-[500px] mt-[20px] m-[10px]">
                    Login
                  </button>
                </Link>
              </div>
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
    </>
  );
};

export default Register;
