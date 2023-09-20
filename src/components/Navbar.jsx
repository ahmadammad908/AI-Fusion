import React, { useState } from "react";
import Fusion from "../assets/images/fusion.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Server/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  let navigate = useNavigate();

  const [navbar, setNavbar] = useState(false);
  const handleClick = () => {
    setNavbar(!navbar);
  };
  const handleClose = () => {
    setNavbar(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("userInformation");
      navigate("/register");
      // Remove user data from local storage
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const defaultName = "Guest"; // Default name for users without a name
  const defaultImage =
    "https://images.pexels.com/photos/1105058/pexels-photo-1105058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"; // Default image URL

  return (
    <>
      <div
        className="w-[100%]"
        id="demo1"
        style={{ position: "sticky", top: "0px" }}
      >
        <div className="flex justify-between items-center p-[30px]">
          <Link to={"/"}>
            {" "}
            <img src={Fusion} className="w-[60px]"></img>
          </Link>{" "}
          <nav className="md:flex items-center hidden ">
            <Link to={"/"}>
              <li className="list-none text-white font-bold m-[20px] cursor-pointer	">
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="list-none text-white font-bold m-[20px] cursor-pointer	">
                About Us
              </li>
            </Link>
            <Link to={"/feedback"}>
              <li className="list-none text-white font-bold m-[20px] cursor-pointer	]">
                Feedbacks
              </li>
            </Link>
          </nav>
          <div className="md:flex items-center hidden">
            {user ? (
              // If user is logged in, show user's name and profile picture (or default values)
              <>
                <span className="text-white mr-2">
                  Welcome, {user.displayName || defaultName}
                </span>
                <img
                  src={user.photoURL || defaultImage}
                  alt={`${user.displayName || defaultName}'s profile`}
                  className="w-[30px] h-[30px] rounded-full"
                />
                <button
                  className="p-[10px] bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-md ml-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              // If user is not logged in, show Sign Up button
              <Link to={"/register"}>
                <button className="p-[10px] bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-md">
                  Sign Up
                </button>
              </Link>
            )}
          </div>
          {user && (
            <>
              <div className="md:hidden block flex w-[100%] justify-end mr-[20px] pt-[2px]">
                {/* <span className="text-white mr-2">
                  Welcome, {user.displayName || defaultName}
                </span> */}
                <img
                  src={user.photoURL || defaultImage}
                  alt={`${user.displayName || defaultName}'s profile`}
                  className="w-[30px] h-[30px] rounded-full"
                />
              </div>
            </>
          )}
          <p
            className="md:hidden text-white text-[30px] cursor-pointer	"
            onClick={handleClick}
          >
            {navbar ? <FaTimes /> : <FaBars />}
          </p>
          {navbar && (
            <>
              <nav
                className="md:hidden absolute w-[100%] top-[130px] left-[0] items-center text-center "
                id="demo3"
              >
                <div className="grid justify-center">
                  <Link to={"/"}>
                    <li
                      className="list-none text-white font-bold m-[20px] cursor-pointer	"
                      onClick={handleClose}
                    >
                      Home
                    </li>
                  </Link>
                  <Link to={"/about"}>
                    <li
                      className="list-none text-white font-bold m-[20px] cursor-pointer	"
                      onClick={handleClose}
                    >
                      About Us
                    </li>
                  </Link>
                  <Link to={"/feedback"}>
                    <li
                      className="list-none text-white font-bold m-[20px] cursor-pointer	"
                      onClick={handleClose}
                    >
                      Feedback
                    </li>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <div className="md:hidden flex items-center p-[10px]">
                    {user ? (
                      // If user is logged in, show user's name and profile picture (or default values)
                      <>
                        <button onClick={handleClose}>
                          <button
                            className="p-[10px] bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-md ml-2 w-[83px]"
                            onClick={handleLogout}
                          >
                            Logout
                          </button>
                        </button>
                      </>
                    ) : (
                      // If user is not logged in, show Sign Up button
                      <Link to={"/register"}>
                        <button
                          className="p-[10px] bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-md  w-[83px]"
                          onClick={handleClose}
                        >
                          Sign Up
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
