import React, { useEffect } from "react";

const About = () => {
  let interval = setInterval(() => {
    console.log("heyy i am about");
  }, 1000);

  useEffect(() => {

    console.log("About rendering...")

    return () => {
      clearInterval(interval);
      console.log("i m triggred kyunki mein about hu isliye mein jaa chuka hu");
    };
  }, []);

  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;
