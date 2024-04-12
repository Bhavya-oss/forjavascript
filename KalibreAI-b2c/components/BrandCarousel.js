import React, { useState, useEffect } from "react";

const logos = [
  "/images/companyBrands/c1.png",
  "/images/companyBrands/c2.png",
  "/images/companyBrands/c3.png",
  "/images/companyBrands/c4.png",
  "/images/companyBrands/c5.png",
  "/images/companyBrands/c6.png",
  "/images/companyBrands/c7.png",
  "/images/companyBrands/c8.png",
  "/images/companyBrands/c9.png",
  "/images/companyBrands/c10.png",
  "/images/companyBrands/c1.png",
  "/images/companyBrands/c2.png",
  "/images/companyBrands/c3.png",
  "/images/companyBrands/c4.png",
  "/images/companyBrands/c5.png",
  "/images/companyBrands/c6.png",
  "/images/companyBrands/c7.png",
  "/images/companyBrands/c8.png",
  "/images/companyBrands/c9.png",
  "/images/companyBrands/c10.png",
];

function BrandCarousel() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) =>
        prevPosition === logos.length - 1 ? 0 : prevPosition + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="brand-carousel">
      {logos.map((logo, i) => (
        <img
          key={i}
          className="brand"
          src={logo}
          alt={`Logo ${i + 1}`}
          style={{ transform: `translateX(-${position * 10}rem)`, height: 32 }}
        />
      ))}
    </div>
  );
}

export default BrandCarousel;
