import React from 'react';
import Cards from "./Cards"
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

function Course() {
  const [book,setBook]=useState([])

  useEffect(()=>{
    const getBook=async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  },[]);

  return (
    <>
      {/* Full screen background */}
      <div className="w-screen min-h-screen pt-20 bg-white dark:bg-slate-900 dark:text-white">

        {/* Existing container */}
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">

          <div className="items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl">
              We're delighted to hava you
              <span className="text-pink-500"> Here! :)</span>
            </h1>

            <p className="mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam expedita accusamus velit, corrupti placeat laborum nesciunt, ipsa ex error veniam nulla repellat culpa sint consequuntur, deserunt dolore maxime voluptates sit voluptatem nostrum fugiat inventore perferendis sequi porro. Necessitatibus ipsa, optio velit corporis, impedit provident, voluptatibus odit id modi quos tempore.
            </p>

            <Link to="/">
              <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                Back
              </button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
              book.map((item) => (
                <Cards key={item.id} item={item} />
              ))
            }
          </div>

        </div>
      </div>
    </>
  );
}

export default Course;