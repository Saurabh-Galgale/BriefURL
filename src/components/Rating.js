import { useState } from 'react';
import "./Rating.css";

const Rating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <>
        <div id='rating_main'>
            <div id="comments">
                <section className='section'>
                    <h1>Doctor Strange</h1>
                    <p>I was unable to short few URLs with magic this website helped me a lot.</p>
                </section>
                <section className='section'>
                    <h1>Captain America</h1>
                    <p>My friend strange suggest me this website. its fantastic.</p>
                </section>
                <section className='section'>
                    <h1>Tony stark</h1>
                    <p>Lo ab ye mechanical wale website bhi banane lage. kya bakwaas hai ye!</p>
                </section>
            </div>
            <div className="star-rating">
                <h1>Rate this site !</h1>
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "on" : "off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <span className="star">&#9733;</span>
                            {/* <span className="star">&#9785;</span> */}
                        </button>
                    );
                })}
                <div className='txt'>
                    <input placeholder='Type your message here...' />
                    <button onClick={() => {
                        alert("your message is submitted");
                    }}>Submit</button>
                </div>
            </div>
            </div>
        </>
    );
};

export default Rating;