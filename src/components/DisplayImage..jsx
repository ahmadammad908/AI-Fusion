import React, { useState } from "react";

function DisplayImage({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(keyword);
  };

  return (
    <div>
      <h2>Random Image Generator</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="keyword">Enter a keyword: </label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
    </div>
  );
}

export default DisplayImage;
