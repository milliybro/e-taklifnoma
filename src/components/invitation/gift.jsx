import React, { useState } from "react";


const Gift = () => {
  const [state, setState] = useState({
    number: "5614 6822 0051 9405",
    name: "Shohruh Rustamov",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
  });
  console.log(setState);

  const handleCopyCardNumber = () => {
    navigator.clipboard.writeText(state.number);
    alert("Karta raqami xotiraga saqlandi!");
  };

  return (
    <div
      className="relative flex flex-col justify-center h-screen w-screen md:w-[500px] md:h-[700px] bg-[#ffffff] pt-6 py-6 px-6 pb-10 sm:px-[0px] sm:py-[30px] rounded-md shadow-lg"
      style={{
        backgroundImage: "url('/images/slide/design3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h3 className="text-center text-teal-800 text-2xl names">
          To'yona uchun
        </h3>
      </div>
      <button
        className="relative m-0 p-0 w-[500px] h-[450px] text-center"
        style={{
          backgroundImage: "url('/images/card.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Card Number and Cardholder Name Display */}
        <div className="absolute top-[230px] left-[70px] flex flex-col text-xl font-semibold text-amber-300">
          <span className="!font-FUTSALSPEED tracking-[1px]">
            {state.number}
          </span>
          <span className="!font-FUTSALSPEED mt-8 uppercase">{state.name}</span>
        </div>
      </button>

      {/* Button to copy card number */}
      <button
        className="absolute bottom-1/4 right-32 text-lg px-3 py-1 bg-white text-amber-300 rounded-md shadow"
        onClick={handleCopyCardNumber}
      >
        Karta raqamini nusxalash
      </button>
    </div>
  );
};

export default Gift;
