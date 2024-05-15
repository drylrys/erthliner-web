import React from "react";
import Footer from "../../components/layout/Footer";
import Navigation from "../../components/layout/Navigation";
import MainLayout from "../../components/layout/MainLayout";

function About() {
  return (
    <MainLayout>
      <div className="grid grid-row-2 md:grid-cols-2 px-5 gap-4 my-16 ">
        <div className="flex flex-col gap-8  justify-center  items-center lg:px-5 xl:px-20">
          <h1 className="font-extrabold text-center text-[80px] ">ABOUT US</h1>
        </div>
        <div className="flex flex-col gap-8 lg:px-20 xl:px-20 justify-center items-center  ">
          <div>
            <h1 className="text-[30px] font-extrabold mb-4 text-center">
              Erth Liner Cargo Express Co.
            </h1>
            <p className="text-[20px]">
              is an import/export trade solution specialist in the Philippines,
              both for air and sea shipments, that provides expert customs
              documentation and all transactions with customs concerning the
              entry and admissibility of merchandise by reason of importation
              and exportation. With our expertise and professional services,
              rest assured that your company will not experience delays and
              penalties, thus saving your valuable time and precious resources.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-row-2 md:grid-cols-2 px-5 gap-4 my-16">
        <div className="flex justify-center  lg:justify-start lg:px-5 xl:px-20">
          <div
            className={`content-img-shadow bg-[url("/assets/img/bg.jpg")] h-[300px] w-[300px] md:h-[600px] md:w-[600px] bg-cover bg-no-repeat bg-center rounded-lg shadow-2xl`}
          />
        </div>
        <div className="flex flex-col gap-8 lg:px-5 xl:px-20 justify-center items-center  ">
          <div>
            <h1 className="text-[30px] font-extrabold mb-4 text-center">
              Company History
            </h1>
            <p className="text-[20px]">
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

      <div className="grid grid-row-2 md:grid-cols-2 px-5 gap-4 my-16">
        <div className="flex flex-col gap-8  justify-center items-center lg:px-5 xl:px-20 order-2 md:order-1">
          <h1 className="text-[30px] font-extrabold mb-4">What we do</h1>
          <ul className="flex flex-col gap-10 text-[20px]">
            <li className=" border-black border-l-4 pl-6">
              We at ERTH Liner Cargo Express Co., facilitate worry-free
              transactions to our clients, and provide easy access to importers
              and exporters in and out of the country.
            </li>
            <li className=" border-black border-l-4 pl-6">
              We offers cost-effective and efficient solutions from tariff
              computations based on the most economical and efficient commodity
              classification with timely deliveries and conveyance of goods to
              their respective destinations.
            </li>
            <li className=" border-black border-l-4 pl-6">
              Our first class services provide uninterrupted access to our most
              progressive clientele world-wide, as well as ensure security and
              personalized handling of goods for the satisfaction of our valued
              stakeholders.
            </li>
          </ul>
        </div>
        <div className="flex justify-center  xl:justify-end lg:px-5 xl:px-20 order-1 md:order-2">
          <div
            className={`content-img-shadow bg-[url("/assets/img/bg.jpg")] h-[300px] w-[300px] md:h-[600px] md:w-[600px] bg-cover bg-no-repeat bg-center rounded-lg shadow-2xl`}
          />
        </div>
      </div>

      <div className="grid grid-row-3 gap-8 lg:grid-cols-2 md:gap-8 mt-[150px] mb-[150px] ">
        <div className=" flex justify-end gap-5 flex-col px-5 lg:px-20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div
                className={` bg-[url("/assets/img/vision.png")] h-[60px] w-[60px] bg-cover bg-no-repeat bg-center `}
              />
              <h1 className="font-extrabold text-[30px] text-black">
                OUR VISON
              </h1>
            </div>
            <p className="font-semibold text-[20px] text-black">
              ERTH LINER CARGO EXPRESS CO., is a highly professional, dependable
              and client-friendly customs brokerage services provider that
              renders the fastest, most competitive and most innovative services
              in the country and the world.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div
                className={` bg-[url("/assets/img/mission.png")] h-[60px] w-[60px] bg-cover bg-no-repeat bg-center `}
              />
              <h1 className="font-extrabold text-[30px] text-black">
                OUR MISSION
              </h1>
            </div>
            <p className="font-semibold text-[20px] text-black">
              To provide the general clientele with professional, reliable,
              efficient and A-1 brokerage and freight forwarding services that
              will facilitate fast release of import and dispatch of export
              items with high quality service at par with our international
              principals.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 px-5 lg:px-20">
          <div className="flex gap-6">
            <div
              className={` bg-[url("assets/img/values.png")] h-[60px] w-[60px] bg-cover bg-no-repeat bg-center `}
            />
            <h1 className="text-[30px] font-extrabold">CORE VALUES</h1>
          </div>
          <div>
            <h1 className="font-extrabold text-[20px] text-black">
              PROFESSIONALISM
            </h1>
            <p className="font-semibold text-[18px] text-black">
              infusing high professionalism in handling its clientele and
              dealing with its stakeholders with an end-in view of establishing
              long-term partnerships.
            </p>
          </div>
          <div>
            <h1 className="font-extrabold text-[20px] text-black">INTEGRITY</h1>
            <p className="font-semibold text-[18px] text-black">
              Honesty, reliability and honor... rolled into one - the highest
              ethical and moral standards that shall crown the over-all
              corporate well-being of ELEX.
            </p>
          </div>
          <div>
            <h1 className="font-extrabold text-[20px] text-black">
              EXCELLENCE
            </h1>
            <p className="font-semibold text-[18px] text-black">
              ELEX is committed to offer superior performance in all aspects of
              ELEX operations redounding to the clientele's and stakeholders'
              over-all satisfaction.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center lg:col-span-2 lg:pt-14 px-5 ">
          <div className="lg:w-1/2 ">
            <div className="flex items-center gap-5 ">
              <div
                className={`bg-[url("/assets/img/business.png")] h-[60px] w-[60px] bg-cover bg-no-repeat bg-center p-8  `}
              />

              <h1 className="font-extrabold text-[30px] text-black">
                BUSINESS GOALS & OBJECTIVES
              </h1>
            </div>
            <p className="font-semibold text-[20px] text-black">
              Our main goal is to provide excellent service at all times. We
              prioritize making sure that both our clients and stakeholders are
              happy with what we do. This means consistently delivering
              top-quality results and ensuring that everyone involved feels
              satisfied with the outcome of our efforts.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default About;
