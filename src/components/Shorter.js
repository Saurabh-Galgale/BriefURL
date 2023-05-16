import { computeHeadingLevel } from '@testing-library/react';
import React, { useState } from 'react';
import "./Shorter.css";

function Shorter() {
  const [longurl, setlongUrl] = useState("");
  const [shorturl, setShortUrl] = useState([]);

  const fetchData = () => {
    if (!longurl) {
      alert("please enter the link");
      return;
    }
    fetch(`https://api.shrtco.de/v2/shorten?url=${longurl}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert("Something went wrong (Invalid link)");
          return;
        }
      }).then((data) => {
        if (!data) {
          return;
        }else{
        setShortUrl(() => {
          return [...shorturl, data.result.full_short_link]
        })
      }});

    setlongUrl("");
  }

  let copyFn = (el) => {
    navigator.clipboard.writeText(el);
  }

  const handleClick = (event) => {
    setlongUrl(event.target.value);
  };

  return (
    <>
      <div id="urldiv">
        <h1><span className='urlspan'> URL </span> Shortener</h1>
        <div id="inpbtn">
          <input id="inp" type="text" placeholder="Add URL here..." onChange={handleClick} value={longurl} />
          <button id="btn" onClick={() => { fetchData() }}> Short </button>
        </div>
        <ul id="para">
          {shorturl.map((el) => {
            {/* window.onerror(); */}
            return <li><div key={el} onClick={() => {window.open(el)}}>{el}</div><button className='urlcopy' onClick={() => { copyFn(el) }}>&#128203;</button></li>
          })}
        </ul>
      </div>
    </>
  )
}

export default Shorter