import React, { useState } from "react";

const Gorizontal = () => {
  const initialCardsData = [
    {
      title: '"Yoz melodiyasi"',
      images: [
        { src: "/images/design/design1.png", alt: "Taklifnoma", label: "Taklifnoma" },
        { src: "/images/design/design2.png", alt: "Tasdiqlash", label: "Tasdiqlash" },
        { src: "/images/design/design3.png", alt: "Lokatsiya", label: "Lokatsiya" }
      ],
      selectedImage: "/images/design/design1.png"
    },
    {
      title: '"Intizor"',
      images: [
        { src: "/images/design/design2,1.png", alt: "Taklifnoma", label: "Taklifnoma" },
        { src: "/images/design/design2.png", alt: "Tasdiqlash", label: "Tasdiqlash" },
        { src: "/images/design/design3.png", alt: "Lokatsiya", label: "Lokatsiya" }
      ],
      selectedImage: "/images/design/design2,1.png"
    }
  ];

  const [cardsData, setCardsData] = useState(initialCardsData);

  const changeImage = (cardIndex, newSrc) => {
    const newCardsData = cardsData.map((card, index) => {
      if (index === cardIndex) {
        return { ...card, selectedImage: newSrc };
      }
      return card;
    });
    setCardsData(newCardsData);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {cardsData.map((card, index) => (
        <div key={index} className="border-[#000000] border-[1px] rounded-[12px] py-5 px-3">
          <h2 className="text-5xl text-center text-[#719A3F] pb-8">{card.title}</h2>
          <div className="md:col-span-1 sm:grid sm:grid-cols-2 lg:gap-5 sm:gap-28 flex flex-col justify-center items-center gap-6">
            <div className="relative w-[300px] h-[500px] overflow-hidden">
              <img className="relative w-[350px] z-10" src="/images/phone-image.png" alt="phone" />
              <img className="w-[225px] h-[470px] absolute top-5 left-10 object-cover z-0" src={card.selectedImage} alt="design" />
            </div>
            <div className="flex sm:flex-col justify-center gap-5">
              {card.images.map((image, idx) => (
                <button key={idx} className="flex items-center gap-4" onClick={() => changeImage(index, image.src)}>
                  <img className="w-[35px] h-[35px] rounded-full" src={image.src} alt={image.alt} />
                  <h5 className="sm:flex hidden">{image.label}</h5>
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gorizontal;