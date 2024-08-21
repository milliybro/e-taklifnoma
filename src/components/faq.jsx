// import React, { useEffect, useState } from "react";
// import Title from "../ui/Title";
// import Axios from "../../utils/httpClient";
// import LoaderRound from "../ui/LoaderRound";
// import { useTranslation } from "react-i18next";

// const FAQ = () => {
//   const { t, i18n } = useTranslation();
//   const [faqData, setFaqData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     if (activeIndex === index) {
//       setActiveIndex(null);
//     } else {
//       setActiveIndex(index);
//     }
//   };

//   useEffect(() => {
//     getFaq();
//   }, [i18n.language]);
//   const getFaq = () => {
//     setLoading(true);
//     Axios()
//       .get(`faq/faq/`)
//       .then((r) => {
//         setFaqData(r.data || []);

//         const urlHash = window.location.hash;
//         if (urlHash.substring(1) === "faq") {
//           setTimeout(() => {
//             if (urlHash.length) {
//               const element = document.getElementById(urlHash.substring(1));
//               element.scrollIntoView({
//                 behavior: "smooth",
//                 block: "start",
//               });
//             }
//           }, 200);
//         }
//       })
//       .catch((e) => {})
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="container max-w-screen-xl pt-[120px]" id="faq">
//       <Title title={t("faq.title")} />
//       <div className="space-y-4 mt-12 p-4">
//         {loading ? (
//           <div className="flex items-center justify-center min-h-[300px] ">
//             <LoaderRound color={"#ffffff"} />
//           </div>
//         ) : (
//           <>
//               <div key={index} className={`border border-secondaryGray rounded-[32px] hover:bg-secondaryGray transition-all  ${activeIndex === index ? "bg-secondaryGray" : ""}`}>
//                 <button className="w-full flex justify-between items-center px-8 py-6 text-secondLight text-base font-semibold" onClick={() => toggleAccordion(index)}>
//                   {item.question}
//                   <img className={`w-4 transition-transform duration-300 ${activeIndex !== index ? "animate-rotate-down" : "animate-rotate-up"}`} src="/images/slide/down-arrow.svg" alt={activeIndex !== index ? "down-arrow" : "up-arrow"} />
//                 </button>
//                 <div className={`text-white px-8 transition-max-height duration-500 ease-in-out overflow-hidden font-normal ${activeIndex === index ? "max-h-48 pb-6" : "max-h-0"}`}>{item.answer}</div>
//               </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FAQ;
