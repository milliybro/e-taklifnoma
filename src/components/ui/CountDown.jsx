import React from "react";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>To'y!</span>
      <p>Toy bo'lib o'tgan</p>
    </div>
  );
};

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div
      className={`countdown flex flex-col items-center text-teal-900 font-semibold text-lg gap-1 ${
        isDanger ? "danger" : ""
      }`}
    >
      <p>{String(value).padStart(2, "0")}</p>
      <span>{type}</span>
    </div>
  );
};

const ShowCounter = ({ weeks, days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <p className="mt-10 countdown-link flex justify-evenly">
        <DateTimeDisplay value={weeks} type={"hafta"} isDanger={weeks <= 1} />
        <DateTimeDisplay
          value={days}
          type={"kun"}
          isDanger={weeks === 0 && days <= 3}
        />
        <DateTimeDisplay value={hours} type={"soat"} isDanger={false} />
        <DateTimeDisplay value={minutes} type={"daqiqa"} isDanger={false} />
        <DateTimeDisplay value={seconds} type={"soniya"} isDanger={false} />
      </p>
    </div>
  );
};

export { ExpiredNotice, ShowCounter, DateTimeDisplay };
