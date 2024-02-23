"use client";

// as this page is server side rendering to make use client side funcationlity
// we have to --->  'use client' <----

//  as this is by default server componenet
import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    // window.alert("welcome to my site");
    console.log("hello Home page ");
  }, []);

  return (
    <div>
      <h1>Indie Gamer</h1>
      <p>Only the best indie games, reviewed</p>
      <p>select user_id, name,mail from users where mail</p>
    </div>
  );
};

export default HomePage;
