import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Server/firebaseConfig"; // Import your Firebase authentication instance

function ImageGeneratorForm() {
  const [user] = useAuthState(auth); // Assuming you have initialized Firebase correctly

  const [keyword, setKeyword] = useState("");
  const [randomImages, setRandomImages] = useState([]);
  const apiKey = "39532938-6c38cdff91e56a88d971c1c80";
  const [noImages, setNoImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setRandomImages([]);
      const response = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=${keyword}&image_type=photo&per_page=20`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.hits.length > 0) {
        const randomImageUrls = data.hits.map((hit) => hit.webformatURL);
        setRandomImages(randomImageUrls);
        setNoImages(false);
      } else {
        setNoImages(true);
      }
    } catch (error) {
      console.error("Error fetching data from Pixabay API:", error);
    }
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = selectedImage;
    link.download = "selected_image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Conditionally render the form based on the user's authentication status
  return (
    <>
      {user ? ( // Check if the user is logged in
        <div className="p-4" id="for12">
          <span className="text-2xl text-center mb-4 flex justify-center">
            Random Image Generator
          </span>
          <form onSubmit={handleSubmit} className="text-center">
            <label htmlFor="keyword" className="text-lg text-white">
              Enter a keyword:
            </label>
            <input
              type="text"
              id="keyword"
              value={keyword}
              placeholder="Cat, Dog, Batman, Superman"
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full py-2 px-3 border rounded-md mt-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
            >
              Generate
            </button>
          </form>
          {noImages ? (
            <div className="text-red-500 mt-4 text-center font-bold">
              <p>Sorry, there are no images for the keyword "{keyword}"</p>
            </div>
          ) : (
            randomImages.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-4">
                {randomImages.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="w-full h-auto rounded-md"
                    onClick={() => openModal(imageUrl)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={imageUrl}
                      alt={`Random Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      ) : (
        <div className="p-4" id="for12">
          <span className="text-2xl text-center mb-4 flex justify-center">
            Random Image Generator
          </span>
          <form onSubmit={handleSubmit} className="text-center">
            <label htmlFor="keyword" className="text-lg text-white">
              Enter a keyword:
            </label>
            <input
              type="text"
              id="keyword"
              value={keyword}
              placeholder="Cat, Dog, Batman, Superman"
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full py-2 px-3 border rounded-md mt-2"
            />
            <Link to={"/register"}>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
              >
                Generate
              </button>
            </Link>
          </form>
        </div>
        // If user is not logged in, prompt them to log in
      )}
    </>
  );
}

export default ImageGeneratorForm;
