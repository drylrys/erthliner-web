import React from "react";
import Footer from "../../components/layout/Footer";
import Navigation from "../../components/layout/Navigation";
import MainLayout from "../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <MainLayout>
      <div className="px-5 md:px-20 py-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#BD3531] text-xl  font-bold  ">About Us</h1>
          <h1 className="text-5xl text-center lg:text-start font-extrabold mb-4">
            Erth Liner Cargo Express Co.
          </h1>
          <p className="text-[20px] lg:text-center lg:w-8/12 text-[#88888a]">
            is an import/export trade solution specialist in the Philippines,
            both for air and sea shipments, that provides expert customs
            documentation and all transactions with customs concerning the entry
            and admissibility of merchandise by reason of importation and
            exportation. With our expertise and professional services, rest
            assured that your company will not experience delays and penalties,
            thus saving your valuable time and precious resources.
          </p>
        </div>

        <div className="py-20 flex flex-col items-center gap-8">
          <div className="bg-white p-4 flex flex-col xl:flex-row gap-4 items-center justify-center ">
            <div
              className={` bg-[url("/assets/img/ship2.jpg")] h-[300px] w-[300px] md:h-[600px] md:w-[600px] bg-cover bg-no-repeat bg-center `}
            />
            <div className="lg:flex-1 flex items-center flex-col text-2xl ">
              <div className="flex flex-col justify-center items-center lg:px-20 lg:text-center">
                <h1 className="text-[#BD3531] text-xl  font-bold  ">
                  Company History
                </h1>
                <h1 className="text-5xl font-extrabold mb-4">
                  Erthliner Cargo Express: Redefining Customs Brokerage and
                  Logistics Since 2013
                </h1>
              </div>
              <p className="lg:w-9/12 text-[20px]  text-[#88888a]">
                ERTH Liner Cargo Express Co., is a duly registered and licensed
                partnership (Securities and Exchange Commission,November, 2013)
                engaged in customs releasing and brokerage services, domestic
                forwarding. It was established for the sole purpose of providing
                excellent service and professional handling of cargoes through
                CUSTOMS BROKERAGE NETWORK, INTERNATIONAL and LOCAL FREIGHT
                FORWARDING SERVICES (Air/Sea), DOOR-TO-DOOR DELIVERY, PACKAGING
                and PACKING, CRATING and LABELING. composed of a group of highly
                tested entrepreneurs molded by long experience in cargo handling
                industry.A company 100% owned by highly professional Filipino
                businessmen and stockholders who pooled their talents, expertise
                and resources to create the most reliable service provider.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap  gap-4 py-20">
          <div className="flex flex-col justify-center items-center flex-1">
            <h1 className="text-[#BD3531] text-xl  font-bold  ">What we do</h1>
            <h1 className="text-5xl text-center font-extrabold mb-4">
              We at ERTH Liner Cargo <br /> Express Co.
            </h1>
          </div>
          <div className="flex flex-col gap-14  flex-1">
            <div className="p-12 text-[20px] bg-white flex flex-col items-center   border-[#BD3531] border-l-8 text-[#88888a] flex-1 gap-5">
              <p>
                We facilitate worry-free transactions to our clients, and
                provide easy access to importers and exporters in and out of the
                country.
              </p>
            </div>
            <div className="p-12 text-[20px] bg-white flex flex-col items-center border-[#BD3531] border-l-8  text-[#88888a] flex-1 gap-5">
              <p>
                We offers cost-effective and efficient solutions from tariff
                computations based on the most economical and efficient
                commodity classification with timely deliveries and conveyance
                of goods to their respective destinations.
              </p>
            </div>
            <div className="p-12 text-[20px] bg-white flex flex-col items-center  border-[#BD3531] border-l-8 text-[#88888a] flex-1 gap-5">
              <p>
                Our first class services provide uninterrupted access to our
                most progressive clientele world-wide, as well as ensure
                security and personalized handling of goods for the satisfaction
                of our valued stakeholders.
              </p>
            </div>
          </div>
        </div>

        <div className="my-20">
          <div className="flex flex-col justify-center items-center lg:px-20 lg:text-center gap-4 mb-7">
            <h1 className="text-[#BD3531] text-xl  font-bold  ">
              Strategy and Vision
            </h1>
            <h1 className="text-5xl font-extrabold mb-4">
              BUSINESS GOALS & OBJECTIVES
            </h1>
            <p className="text-[20px] lg:text-center lg:w-8/12 text-[#88888a]">
              Our main goal is to provide excellent service at all times. We
              prioritize making sure that both our clients and stakeholders are
              happy with what we do. This means consistently delivering
              top-quality results and ensuring that everyone involved feels
              satisfied with the outcome of our efforts.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap gap-4 ">
            <div className="flex flex-col gap-4 ">
              <div className="p-5 lg:p-14 bg-white flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={` bg-[url("/assets/img/vision.png")] h-[60px] w-[60px] bg-cover bg-no-repeat bg-center`}
                  />
                  <h1 className="text-[40px]  font-extrabold mb-4">
                    OUR VISON
                  </h1>
                </div>

                <p className="text-[#88888a] text-[20px]">
                  ERTH LINER CARGO EXPRESS CO., is a highly professional,
                  dependable and client-friendly customs brokerage services
                  provider that renders the fastest, most competitive and most
                  innovative services in the country and the world.
                </p>
              </div>
              <div className="p-5 lg:p-14 bg-white flex flex-col gap-4 ">
                <div className="flex items-center gap-4">
                  <div
                    className={` bg-[url("/assets/img/mission.png")] h-[60px] w-[60px] bg-cover bg-no-repeat bg-center`}
                  />
                  <h1 className="text-[40px]  font-extrabold mb-4">
                    OUR MISSION
                  </h1>
                </div>

                <p className="text-[#88888a] text-[20px]">
                  To provide the general clientele with professional, reliable,
                  efficient and A-1 brokerage and freight forwarding services
                  that will facilitate fast release of import and dispatch of
                  export items with high quality service at par with our
                  international principals.
                </p>
              </div>
            </div>
            <div className=" bg-white flex flex-col gap-4 p-5 lg:p-10  ">
              <div className="flex items-center gap-4">
                <div
                  className={` bg-[url("/assets/img/core-value.png")] h-[60px] w-[60px] bg-cover bg-no-repeat bg-center`}
                />
                <h1 className="text-[40px] font-extrabold mb-4">Core Values</h1>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h1 className="font-extrabold text-[25px]">
                    PROFESSIONALISM
                  </h1>
                  <p className="text-[#88888a] text-[20px]">
                    infusing high professionalism in handling its clientele and
                    dealing with its stakeholders with an end-in view of
                    establishing long-term partnerships.
                  </p>
                </div>
                <div>
                  <h1 className="font-extrabold text-[25px]">INTEGRITY</h1>
                  <p className="text-[#88888a] text-[20px]">
                    Honesty, reliability and honor... rolled into one - the
                    highest ethical and moral standards that shall crown the
                    over-all corporate well-being of ELEX.
                  </p>
                </div>
                <div>
                  <h1 className="font-extrabold text-[25px]">EXCELLENCE</h1>
                  <p className="text-[#88888a] text-[20px]">
                    ELEX is committed to offer superior performance in all
                    aspects of ELEX operations redounding to the clientele's and
                    stakeholders' over-all satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-[url("/assets/img/redbg.jpg")] bg-cover bg-no-repeat bg-top gap-10 flex flex-col w-full justify-center items-center p-2 md:h-[500px]`}
      >
        <div className="text-white font-extrabold text-5xl md:text-6xl md:w-1/2">
          UNLOCK TRADE EXCELLENCE – REACH OUT TO US TODAY!
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

export default About;
