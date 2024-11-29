import React, { useState } from "react";
import "./Shorter.css";

const bitlyApiKey = process.env.REACT_APP_BITLY_API_KEY;

function Shorter() {
  const [longurl, setLongUrl] = useState(""); // Store the input long URL
  const [urlMap, setUrlMap] = useState({}); // Store long-url -> short-url mapping
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const fetchData = () => {
    if (!longurl) {
      alert("Please enter a valid link.");
      return;
    }

    // Check if the long URL is already in the map
    if (urlMap[longurl]) {
      alert(`This URL has already been shortened. Here’s the short version: ${urlMap[longurl]}`);
      setLongUrl(""); // Clear the input field
      return;
    }
    setIsLoading(true);
    fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bitlyApiKey}`,
      },
      body: JSON.stringify({
        long_url: longurl,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid URL or network issue.");
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.link) {
          // Add the long and short URL pair to the map
          setUrlMap((prevMap) => ({ ...prevMap, [longurl]: data.link }));
          setLongUrl(""); 
        } else {
          throw new Error("Unexpected API response.");
        }
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const copyFn = (el) => {
    navigator.clipboard
      .writeText(el)
      .then(() => alert("Copied to clipboard!"))
      .catch(() => alert("Failed to copy!"));
  };

  const handleClick = (event) => {
    setLongUrl(event.target.value);
  };

  return (
    <div id="urldiv">
      <h1>
        <span className="urlspan">URL</span> Shortener
      </h1>
      <div id="inpbtn">
        <input
          id="inp"
          type="text"
          placeholder="Add URL here..."
          onChange={handleClick}
          value={longurl}
        />
        <button id="btn" onClick={fetchData} disabled={isLoading}>
          {isLoading ? "Shortening..." : "Shorten"}
        </button>
      </div>
      <ul id="para">
        {Object.entries(urlMap).map(([longUrl, shortUrl], index) => (
          <li key={index}>
            <div className="short-url" onClick={() => window.open(shortUrl, "_blank")}>{shortUrl}</div>
            <button
              className="urlcopy"
              onClick={() => {
                copyFn(shortUrl);
              }}
            >
              &#128203;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shorter;
