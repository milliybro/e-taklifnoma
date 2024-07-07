import React from "react";
import { useSpring, animated } from "react-spring";

const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const calc = (x, y) => {
  const BUFFER = 50;
  const why = -(y - window.innerHeight / 2) / BUFFER;
  const ex = (x - window.innerWidth / 2) / BUFFER;
  return [-(y / 50), x / 50, 1.1];
};

const Card = ({ backgroundImage, children }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 50 }
  }));

  return (
    <div className="Card">
      <animated.div
        className="card"
        onMouseMove={(e) => {
          const { clientX: x, clientY: y } = e;
          set({ xys: calc(x, y) });
        }}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        {children}
      </animated.div>
    </div>
  );
};

export default Card;
