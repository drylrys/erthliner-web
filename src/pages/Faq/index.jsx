import React from "react";
import Footer from "../../components/layout/Footer";
import Navigation from "../../components/layout/Navigation";
import MainLayout from "../../components/layout/MainLayout";
import Collapse from "../../components/Collapse";
import { useNavigate } from "react-router-dom";
function Faq() {
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  const data = [
    {
      question: "Why do I need customs brokerage?",
      answer:
        "Customs brokerage helps streamline the process of importing and exporting goods by ensuring compliance with customs regulations, handling paperwork, and facilitating smooth clearance of shipments through customs."
    },
    {
      question: "What is customs brokerage?",
      answer:
        "Customs brokerage involves the preparation and submission of documentation required for importing or exporting goods. It also includes classification of products, calculation of duties and taxes, and liaising with customs authorities on behalf of the importer or exporter."
    },
    {
      question: "How much does customs brokerage cost?",
      answer:
        "The cost of customs brokerage services can vary depending on factors such as the complexity of the shipment, the volume of goods, and the specific services required. It may include fees for document preparation, customs clearance, and other related services. It's best to request a quote from a customs brokerage firm for accurate pricing."
    },
    {
      question: "What documents are required for customs brokerage?",
      answer:
        "The documents required for customs brokerage vary depending on the country, the type of goods being imported or exported, and the mode of transportation. Commonly required documents include a commercial invoice, packing list, bill of lading or air waybill, and any necessary permits or licenses."
    },
    {
      question: "How long does customs brokerage take?",
      answer:
        "The time it takes for customs brokerage depends on factors such as the efficiency of customs clearance processes, the accuracy and completeness of documentation, and any additional inspections or reviews required. It can range from a few hours to several days, but customs brokers strive to expedite the process as much as possible."
    }
  ];
  return (
    <MainLayout>
      <div className="px-5 md:px-20 py-20">
        <div className="flex flex-col justify-center items-center pb-20">
          <h1 className="text-[#BD3531] text-xl  font-bold  ">Common</h1>
          <h1 className="text-4xl lg:text-5xl text-center font-extrabold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[20px] lg:text-center lg:w-8/12 text-[#88888a] ">
            Find Answers to frequently asked questions about our customs
            brokerage services
          </p>
        </div>

        <Collapse data={data} />
      </div>
      <div
        className={`bg-[url("/assets/img/redbg.jpg")] bg-cover bg-no-repeat bg-top gap-10 flex flex-col w-full justify-center items-center p-2 md:h-[500px]`}
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-extrabold text-5xl lg:text-6xl text-center ">
            Need more information ? Contact us
          </h1>
          <p className="text-[20px]  text-center text-white ">
            If you have any questions or need assistance, please feel free to
            reach out to our team.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <button
            onClick={() => handleNavigate("/faq")}
            className="bg-[#BD3531] text-white font-bold w-64 p-4 rounded-lg"
          >
            FAQ
          </button>
          <button
            onClick={() => handleNavigate("/contact")}
            className="bg-white text-[#BD3531] font-bold w-64 p-4 rounded-lg"
          >
            Contact us
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default Faq;
