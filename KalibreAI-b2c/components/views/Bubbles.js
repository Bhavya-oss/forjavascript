import React, { useState, useEffect, useRef } from 'react';

const SCROLL_SPEED = 0.8;
const NOISE_SPEED = 0.004;
const NOISE_AMOUNT = 6;
const CANVAS_WIDTH = 2800;

const Bubbles = () => {
  const bubblesRef = useRef(null);
  const [bubbleSpecs] = useState([
    

    {s: 0.6, x: 1134, y: 45 },
  {s: 0.6, x: 1620, y: 271 },
  {s: 0.6, x: 1761, y: 372 },
  {s: 0.6, x: 2499, y: 79 },
  {s: 0.6, x: 2704, y: 334 },
  {s: 0.6, x: 2271, y: 356 },
  {s: 0.6, x: 795, y: 226 },
  {s: 0.6, x: 276, y: 256 },
  {s: 0.6, x: 1210, y: 365 },
  {s: 0.6, x: 444, y: 193 },
  {s: 0.6, x: 2545, y: 387 },
  { s: 0.8, x: 1303, y: 193 },
  { s: 0.8, x: 907, y: 88 },
  { s: 0.8, x: 633, y: 320 },
  { s: 0.8, x: 323, y: 60 },
  { s: 0.8, x: 129, y: 357 },
  { s: 0.8, x: 1440, y: 342 },
  { s: 0.8, x: 1929, y: 293 },
  { s: 0.8, x: 2135, y: 198 },
  { s: 0.8, x: 2276, y: 82 },
  { s: 0.8, x: 2654, y: 182 },
  { s: 0.8, x: 2783, y: 60 },
  { x: 1519, y: 118 },
  { x: 1071, y: 233 },
  { x: 1773, y: 148 },
  { x: 2098, y: 385 },
  { x: 2423, y: 244 },
  { x: 901, y: 385 },
  { x: 624, y: 111 },
  { x: 75, y: 103 },
  { x: 413, y: 367 },
  { x: 2895, y: 271 },
  { x: 1990, y: 75 }
  ]);


  const bubbleImages = [
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597874/b2c%20images/clients/Stripe%20Sheet/Vector_11_d1zogt.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597874/b2c%20images/clients/Stripe%20Sheet/Vector_12_vo04z2.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597873/b2c%20images/clients/Stripe%20Sheet/Vector_13_hbhiu4.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597871/b2c%20images/clients/Stripe%20Sheet/Group_54_zz1qy5.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597870/b2c%20images/clients/Stripe%20Sheet/Group_61_fcytl5.svg',

    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597870/b2c%20images/clients/Stripe%20Sheet/Group_50_gadzzj.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597869/b2c%20images/clients/Stripe%20Sheet/netlify.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597869/b2c%20images/clients/Stripe%20Sheet/css3_u7rehd.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597869/b2c%20images/clients/Stripe%20Sheet/Group_57_vc9yse.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597868/b2c%20images/clients/Stripe%20Sheet/Group_32_xu9yg0.svg',

    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597868/b2c%20images/clients/Stripe%20Sheet/Group_125_curhbj.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597867/b2c%20images/clients/Stripe%20Sheet/Vector_fknblf.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597868/b2c%20images/clients/Stripe%20Sheet/Group_126_gtfojy.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597867/b2c%20images/clients/Stripe%20Sheet/Group_26_kxayoe.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597866/b2c%20images/clients/Stripe%20Sheet/Group_63_ylezd2.svg',

    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597866/b2c%20images/clients/Stripe%20Sheet/r-lang_ecveuv.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597865/b2c%20images/clients/Stripe%20Sheet/Group_25_lunilg.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597865/b2c%20images/clients/Stripe%20Sheet/Group_62_m5aykx.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597865/b2c%20images/clients/Stripe%20Sheet/Group_100_zr8uii.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597864/b2c%20images/clients/Stripe%20Sheet/Group_68_u27t6t.svg',

    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597864/b2c%20images/clients/Stripe%20Sheet/Group_52_hd9hzf.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597863/b2c%20images/clients/Stripe%20Sheet/Group_97_auuwgs.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597863/b2c%20images/clients/Stripe%20Sheet/Group_35_tnyefy.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597863/b2c%20images/clients/Stripe%20Sheet/Group_81_euy8yc.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597863/b2c%20images/clients/Stripe%20Sheet/html5_kuemyg.svg',

    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597862/b2c%20images/clients/Stripe%20Sheet/Group_22_ma2gz2.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597862/b2c%20images/clients/Stripe%20Sheet/Vector-1_trn93w.svg',
    // 'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597861/b2c%20images/clients/Stripe%20Sheet/Group_126-1_zhcv6y.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597861/b2c%20images/clients/Stripe%20Sheet/Group_59_i4fwje.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597861/b2c%20images/clients/Stripe%20Sheet/Group_93_kklb2r.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597861/b2c%20images/clients/Stripe%20Sheet/Group_70_oetman.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597861/b2c%20images/clients/Stripe%20Sheet/Group_72_zvdjjo.svg',
    'https://res.cloudinary.com/kalibre-ai/image/upload/v1696597861/b2c%20images/clients/Stripe%20Sheet/Group_76_gsuexz.svg',

    // Add more image URLs as needed
  ];





  useEffect(() => {
    const bubblesEl = bubblesRef.current;

    class Bubble {
      constructor(index, { x, y, s = 1 }) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.scale = s;
        this.noiseSeedX = Math.floor(Math.random() * 64000);
        this.noiseSeedY = Math.floor(Math.random() * 64000);

        this.el = document.createElement('div');
        this.el.className = `bubble logo${this.index + 1} bg-position image-responsive`;
        
        // Select the image URL based on the index
        this.el.style.backgroundImage = `url(${bubbleImages[this.index % bubbleImages.length]})`;
        
        
        bubblesEl.appendChild(this.el);
      }

      update() {
        this.noiseSeedX += NOISE_SPEED;
        this.noiseSeedY += NOISE_SPEED;
        let randomX = Math.sin(this.noiseSeedX) * 2 - 1; // Replace with your own noise function
        let randomY = Math.sin(this.noiseSeedY) * 2 - 1; // Replace with your own noise function

        this.x -= SCROLL_SPEED;
        this.xWithNoise = this.x + randomX * NOISE_AMOUNT;
        this.yWithNoise = this.y + randomY * NOISE_AMOUNT;

        if (this.x < -200) {
          this.x = CANVAS_WIDTH;
        }

        this.el.style.transform = `translate(${this.xWithNoise}px, ${this.yWithNoise}px) scale(${this.scale})`;
      }
    }

    const bubbles = bubbleSpecs.map((spec, index) => new Bubble(index, spec));

    const updateBubbles = () => {
      bubbles.forEach((bubble) => bubble.update());
      requestAnimationFrame(updateBubbles);
    };

    requestAnimationFrame(updateBubbles);

    // Cleanup function
    return () => {
      bubbles.forEach((bubble) => {
        bubblesEl.removeChild(bubble.el);
      });
    };
  }, [bubbleSpecs]);

  return (
    <div className="bubble-wrap">
      <div className="bubbles" ref={bubblesRef}></div>
    </div>
  );
};

export default Bubbles;