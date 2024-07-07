import React from "react";
import Card from "./ui/3d-card";

const Weddings = () => {
   const backgroundImageUrl1 = "/images/nikoh.jpg"; // Assuming this path exists in your project
  const backgroundImageUrl2 = "/images/nahor.jpg"; // Assuming this path exists in your project

  const backgroundImageUrl3 = "/images/qiz-uzatish.jpg"; // Assuming this path exists in your project

  return (
    <div className="container lg:grid lg:grid-cols-3 py-[60px] flex flex-col items-center gap-6">
      <Card backgroundImage={backgroundImageUrl1}>
        Visol oqshomi{/* Text inside the first Card */}
      </Card>
      <Card backgroundImage={backgroundImageUrl2}>
        Nahor oshi{/* Text inside the second Card */}
      </Card>
      <Card backgroundImage={backgroundImageUrl3}>
        Qizlar bazmi{/* Text inside the second Card */}
      </Card>
    </div>
  );
};

export default Weddings;
