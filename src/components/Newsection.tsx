"use client";
import React from "react";
import { Typography } from "./typography";
import { useState } from "react";
import Card from "./card/Card";

const Newsection = () => {
  const cards = [
    { imgUrl: "/backery/cupcake.jpg", title: "cake" },
    { imgUrl: "/backery/cake3.jpg", title: "cake" },
    { imgUrl: "/backery/cake4.jpeg", title: "cake" },
    { imgUrl: "/backery/cake3.jpg", title: "cake" },
    { imgUrl: "/backery/cupcake.jpg", title: "cake" },
    { imgUrl: "/backery/cake4.jpeg", title: "cake" },
  ];
  const cardsPerPage = 3; 
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const displayedCards = cards.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );
  return (
    <div className="mt-8">
      <div className="flex flex-col space-y-2">
        <Typography className="text-center" fontSize="title">
          What is News???
        </Typography>
        <Typography
          color="primary"
          fontSize="heading3"
          className="text-center mt-[3px]"
        >
          Our New teste! Welcome and Enjoy
        </Typography>
      </div>
      <div className="mt-8 relative">
      <div className="flex flex-row justify-center space-x-3 mt-6">
        {displayedCards.map((card, index) => (
          <Card key={index} imgUrl={card.imgUrl} title={card.title} />
        ))}
      </div>
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="absolute left-[143px] top-1/2 -translate-y-1/2 transform p-2"
      >
        <img src="/backery/arrow_back.svg" alt="Previous" />
      </button>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="absolute right-[143px] top-1/2 -translate-y-1/2 transform p-2"
      >
        <img src="/backery/arrow_next.svg" alt="Next" />
      </button>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`h-2 w-2 rounded-full ${
              currentPage === i + 1 ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Newsection;
