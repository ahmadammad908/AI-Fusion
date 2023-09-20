import React from "react";

const AboutUs = () => {
  return (
    <>
      <section class="text-gray-400  body-font" id="section">
        <div class="container px-5 py-24 mx-auto flex flex-wrap ">
          <div class="flex flex-wrap w-full justify-between">
            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-500 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                    Purpose
                  </h2>
                  <p class="leading-relaxed">
                    AI-Fusion is an AI-based image enhancement and filtering
                    application that assists you in giving a fresh look to your
                    photos. Utilizing our AI technology, you can apply various
                    filters and effects in real-time to enhance your images.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-500 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                    Our Mission
                  </h2>
                  <p class="leading-relaxed">
                    AI-Fusion's mission is to help make your moments memorable.
                    Our AI-powered filters and tools make your photos even more
                    beautiful and vibrant.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-500 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                    Our Technology
                  </h2>
                  <p class="leading-relaxed">
                    We employ cutting-edge AI algorithms that specialize in
                    analyzing and improving images. This technology enables
                    real-time image processing, allowing you to see instant
                    results when applying filters to your photos.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-500 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                    Privacy and Security
                  </h2>
                  <p class="leading-relaxed">
                    Your privacy and data security are of utmost importance to
                    us. We employ robust security measures and data encryption
                    to ensure the safety of your photos and personal
                    information.
                  </p>
                </div>
              </div>
              <div class="flex relative">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                    Our Story
                  </h2>
                  <p class="leading-relaxed">
                    AI-Fusion's journey is a passion-filled one where we've made
                    a name for ourselves in the world of image processing. By
                    collaborating with our users, we continue to progress and
                    achieve new milestones.
                  </p>
                </div>
              </div>
            </div>
            <img
              class="lg:w-2/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="https://img.freepik.com/premium-photo/illustration-backpacker-man-abstract-art-ai-generated_57312-1445.jpg"
              alt="step"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
