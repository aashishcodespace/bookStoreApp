import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';

function Freebook() {
    const [book, setBook] = useState([]);

    // Screen ke according cards ki quantity
    const getSlidesToShow = () => {
        if (window.innerWidth < 768) {
            return 1;
        }

        if (window.innerWidth < 1024) {
            return 2;
        }

        return 3;
    };

    const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("https://bookstore-backend-arbw.onrender.com/book");
                console.log(res.data);

                const data = res.data.filter(
                    (data) => data.category === "Free"
                );

                console.log(data);
                setBook(data);
            } catch (error) {
                console.log(error);
            }
        };

        getBook();
    }, []);

    // Screen resize hone par cards ki quantity update hogi
    useEffect(() => {
        const handleResize = () => {
            setSlidesToShow(getSlidesToShow());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    console.log("SCREEN:", window.innerWidth);

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className="font-semibold text-xl pb-2">
                        Free Offered Courses
                    </h1>

                    <p>
                        Explore our free courses designed to help you learn new
                        skills, build your knowledge, and grow at your own pace!
                    </p>
                </div>

                <div>
                    <div>
                        {book.length > 0 && (
                            <Slider {...settings}>
                                {book.map((item) => (
                                    <Cards item={item} key={item.id} />
                                ))}
                            </Slider>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Freebook;