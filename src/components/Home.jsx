import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="for">
        <div className="flex flex-wrap">
          <div className=" w-full lg:w-[50%]">
            <div className="flex xl:justify-start md:justify-center justify-center m-[10px]">
              {" "}
              <h1 className="md:text-[5vw] text-white font-bold text-[40px]">
                REVOLUTIONIZE
              </h1>
            </div>
            <div className="flex xl:justify-start md:justify-center justify-center m-[10px]">
              {" "}
              <h1 className="md:text-[5vw] text-white font-bold text-[40px] text-center">
                YOUR <span>CREATIVITY</span>
              </h1>
            </div>
            <div className="flex xl:justify-start md:justify-center justify-center m-[10px]">
              {" "}
              <h1 className="md:text-[5vw] text-white font-bold text-[40px]">
                <h1>WITH AI</h1>
              </h1>
            </div>
            <div className="flex xl:justify-start md:justify-center justify-center ml-[20px] m-[15px]">
              <p className="md:text-2xl font-medium text-gray-500">
                AI Encompasses Various Subfields And
              </p>
            </div>
            <div className="flex xl:justify-start md:justify-center justify-center ml-[20px] m-[15px]">
              <p className="md:text-2xl font-medium text-gray-500">
                Approaches, Including Machine Learning,
              </p>
            </div>
            <div className="flex xl:justify-start md:justify-center justify-center ml-[20px] m-[15px]">
              <p className=" md:text-2xl font-medium text-center text-gray-500">
                Natural Language Processing,
              </p>
            </div>
            <div className="flex xl:justify-start md:justify-center justify-center ml-[20px] m-[15px] pt-[10px]">
              <Link to={"/ai"}>
                <button className="text-white  bg-gradient-to-r from-violet-500 to-fuchsia-500 p-[20px] rounded-full xl:text-2xl">
                  Generate Images
                </button>
              </Link>
            </div>
          </div>
          <div className=" w-full lg:w-[50%] flex justify-center">
            <img
              className="rounded-2xl m-[10px]"
              src="https://img.freepik.com/premium-photo/generative-ai-illustration-enthusiastic-young-women-wearing-virtual-reality-goggles-is-inside-metaverse-metaverse-concept-virtual-world-elements-games-entertainment-digital_620624-7057.jpg"
              alt="AI Illustration"
              style={{ width: "900px" }}
            />
          </div>
        </div>
        <div className=" mt-[50px]">
          <div className="flex md:justify-center  justify-center" id="flex">
            <div className="p-[10px] ">
              <img
                className="rounded-2xl  md:w-[250px] 2xl:w-[400px]"
                src="https://extrachill.com/wp-content/uploads/2023/05/jerry-garcia-brokedown-palace-cartoon.jpeg"
                alt="no image"
              ></img>
            </div>
            <div className=" md:w-[50%] w-[100%] m-[10px] md:m-[10px] bg-blue-600 rounded-2xl p-[10px]">
              <div className="flex md:justify-start justify-center">
                <h1 className="p-[10px] md:text-2xl 2xl:text-5xl font-bold text-white md:text-start text-center ">
                  Enter a Realm Where AI's Enchanting Magic Unveils Boundless
                  Possibilities Magic Unveils
                </h1>
              </div>

              <div className="flex md:justify-start justify-center text-center">
                <p className="p-[10px] md:text-1xl 2xl:text-3xl font-medium text-white text-center 2xl:mt-[40px] md:text-start">
                  Ai Has The Potential To Revolutionize Numerous<br></br>{" "}
                  Aspects of our daily Lives, from Personal <br></br>Assitant
                </p>
              </div>
            </div>

            <div className="p-[10px] ">
              <img
                className="rounded-2xl  md:w-[250px] 2xl:w-[400px]"
                src="https://cdn.pixabay.com/photo/2023/03/24/14/23/ai-generated-7874140_960_720.jpg"
                alt="no-image"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// import React from "react";

// const Home = () => {
//   return (
//     <>
//       <div id="for">
//         <div className="flex flex-wrap">
//           <div className=" w-full lg:w-[50%]">
//             <div className="flex xl:justify-start md:justify-center justify-center m-[10px]">
//               {" "}
//               <h1 className="md:text-[5vw] text-white font-bold text-[40px]">
//                 REVOLUTIONIZE
//               </h1>
//             </div>
//             <div className="flex xl:justify-start md:justify-center justify-center m-[10px]">
//               {" "}
//               <h1 className="md:text-[5vw] text-white font-bold text-[40px] text-center">
//                 YOUR <span>CREATIVITY</span>
//               </h1>
//             </div>
//             <div className="flex xl:justify-start md:justify-center justify-center m-[10px]">
//               {" "}
//               <h1 className="md:text-[5vw] text-white font-bold text-[40px]">
//                 <h1>WITH AI</h1>
//               </h1>
//             </div>
//             <div className="flex xl:justify-start md:justify-center justify-center ml-[20px] m-[15px]">
//               <p className="md:text-2xl font-medium text-gray-500">
//                 AI Encompasses Various Subfields And
//               </p>
//             </div>
//             <div className="flex xl:justify-start md:justify-center justify-center ml-[20px] m-[15px]">
//               <p className="md:text-2xl font-medium text-gray-500">
//                 Approaches, Including Machine Learning,
//               </p>
//             </div>
//             <div className="flex xl:justify-start md:justify-center justify-center ml-[20px] m-[15px]">
//               <p className=" md:text-2xl font-medium text-center text-gray-500">
//                 Natural Language Processing,
//               </p>
//             </div>
//             <div className="flex xl:justify-start md:justify-center justify-center ml-[20px] m-[15px] pt-[10px]">
//               <button className="text-white  bg-gradient-to-r from-violet-500 to-fuchsia-500 p-[20px] rounded-full xl:text-2xl">
//                 View Projects
//               </button>
//             </div>
//           </div>
//           <div className=" w-full lg:w-[50%] flex justify-center">
//             <img
//               className="rounded-2xl m-[10px]"
//               src="https://img.freepik.com/premium-photo/generative-ai-illustration-enthusiastic-young-women-wearing-virtual-reality-goggles-is-inside-metaverse-metaverse-concept-virtual-world-elements-games-entertainment-digital_620624-7057.jpg"
//               alt="AI Illustration"
//               style={{ width: "900px" }}
//             />
//           </div>
//         </div>
//         <div className=" mt-[50px]">
//           <div className="flex md:justify-center flex-wrap justify-center">
//             <div className="p-[10px] ">
//               <img
//                 className="rounded-2xl  md:w-[250px] 2xl:w-[400px]"
//                 src="https://extrachill.com/wp-content/uploads/2023/05/jerry-garcia-brokedown-palace-cartoon.jpeg"
//                 alt="no image"
//               ></img>
//             </div>
//             <div className=" md:w-[50%] w-[100%] m-[10px] md:m-[10px] bg-blue-600 rounded-2xl p-[10px]">
//               <div className="flex md:justify-start justify-center">
//                 <h1 className="p-[10px] md:text-2xl 2xl:text-5xl font-bold text-white text-center ">
//                   Enter a Realm Where AI's Enchanting
//                 </h1>
//               </div>
//               <div className="flex md:justify-start justify-center">
//                 <h1 className="p-[10px] md:text-2xl 2xl:text-5xl font-bold text-white text-center">
//                   Magic Unveils Boundless Possibilities
//                 </h1>
//               </div>
//               {/* <div className="flex md:justify-start justify-center ">
//                 <h1 className="p-[10px] md:text-2xl 2xl:text-5xl font-bold text-white ">
//                 </h1>
//               </div> */}
//               <div className="flex md:justify-start justify-center text-center">
//                 <p className="p-[10px] md:text-1xl 2xl:text-3xl font-medium text-white text-center 2xl:mt-[40px]">
//                   Ai Has The Potential To Revolutionize Numerous
//                 </p>
//               </div>
//               <div className="flex md:justify-start justify-center">
//                 <p className="  font-medium text-white text-center pl-[12px] md:text-1xl 2xl:text-3xl">
//                   Aspects of our daily Lives, from Personal Assitant
//                 </p>
//               </div>
//             </div>

//             <div className="p-[10px] ">
//               <img
//                 className="rounded-2xl  md:w-[250px] 2xl:w-[400px]"
//                 src="https://cdn.pixabay.com/photo/2023/03/24/14/23/ai-generated-7874140_960_720.jpg"
//                 alt="no-image"
//               ></img>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
