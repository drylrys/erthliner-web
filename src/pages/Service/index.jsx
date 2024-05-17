import React from "react";
import Footer from "../../components/layout/Footer";
import Navigation from "../../components/layout/Navigation";
import MainLayout from "../../components/layout/MainLayout";
function Service() {
  const products = [
    {
      title: "Customs Brokerage Services",
      description:
        "We handle all the necessary paperwork and logistics involved in customs clearance for importing and exporting goods, ensuring a smooth and efficient process for our clients.",
      icon: ` bg-[url("/assets/img/expert.png")]`
    },
    {
      title: "International Freight Forwarding (Door to Port)",
      description:
        "Our service covers the transportation of goods from the doorstep of your business to the designated port of arrival, simplifying the complexities of global shipping and ensuring timely delivery.",
      icon: ` bg-[url("/assets/img/expert.png")]`
    },
    {
      title: "Domestic Freight Forwarding (Door to Door)",
      description:
        "We offer comprehensive freight forwarding solutions for domestic shipments, managing the entire transportation process from pickup at your location to delivery directly to the desired destination, providing convenience and peace of mind.",
      icon: ` bg-[url("/assets/img/expert.png")]`
    },
    {
      title: "Hauling / Trucking for Domestic and International",
      description:
        "Our hauling and trucking services cater to both domestic and international shipments, offering reliable transportation solutions to move your goods safely and efficiently, whether it's across town or across borders.",
      icon: ` bg-[url("/assets/img/expert.png")]`
    }
  ];

  const services = [
    {
      title: "Tariff and Customs Consultancy",
      description:
        "Our team provides clear advice on tariffs and customs regulations, helping you navigate import/export processes with ease.",
      icon: ` bg-[url("/assets/img/consult.png")]`
    },
    {
      title: "IMPORT/EXPORT Documentation",
      description:
        "We take care of all the paperwork, ensuring your shipments move smoothly from point A to point B.",
      icon: ` bg-[url("/assets/img/ie-service.png")]`
    },
    {
      title: "Transhipments",
      description:
        "Seamlessly transferring goods between different modes of transport to keep your supply chain flowing.",
      icon: ` bg-[url("/assets/img/transhipment.png")]`
    },
    {
      title: "Certificate of Payment Processing (For Motor Vehicle)",
      description:
        " Certificate of Payment Processing (For Motor Vehicle) Let us handle the paperwork needed to process payment certificates for your vehicles hassle-free.",
      icon: ` bg-[url("/assets/img/payment.png")]`
    },
    {
      title: "LTO Processing (For Motor Vehicle)",
      description:
        " We manage the paperwork for securing necessary approvals from the Land Transportation Office, making vehicle processing a breeze.",
      icon: ` bg-[url("/assets/img/process.png")]`
    },
    {
      title: "Importer's Accreditation Processing",
      description:
        "We assist in the accreditation process, making sure your import operations meet all regulatory requirements without any hassle.",
      icon: ` bg-[url("/assets/img/iap-service.png")]`
    }
  ];
  return (
    <MainLayout>
      <div className="px-5 md:px-20 py-20">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-[#BD3531] text-xl  font-bold  ">
            PRODUCT & SERVICES
          </h1>
          <h1 className="text-4xl lg:text-5xl text-center lg:text-start font-extrabold mb-4">
            Business Competitiveness
          </h1>
          <p className="text-[20px] lg:text-center lg:w-8/12 text-[#88888a]">
            We firmly believe that QUALITY SERVICE is not just a goal but the
            very foundation upon which all our efforts are built. We understand
            that the satisfaction of both our clients and stakeholders is
            paramount, and it's this guiding principle that drives every aspect
            of our operation. From the moment you engage with us to the final
            delivery of your goods, our commitment to excellence shines through
            at every step of the journey.de
          </p>
        </div>

        <div className="flex flex-col items-center py-20 gap-8">
          <h1 className="text-[#BD3531] text-4xl font-bold">OUR PRODUCTS</h1>
          <div className="flex flex-col xl:flex-row gap-4">
            <div className="flex justify-center ">
              <div
                className={` bg-[url("/assets/img/port2.jpg")] w-full h-[350px] xl:w-[700px] xl:h-full  bg-cover bg-no-repeat bg-center `}
              />
            </div>
            <div className="justify-center grid md:grid-cols-2  gap-6">
              {products.map((product, index) => {
                return (
                  <div
                    className="flex flex-col gap-4  bg-white w-full p-5  "
                    key={index}
                  >
                    <div className="flex justify-center">
                      <div
                        className={` ${product?.icon} h-[50px] w-[50px] bg-cover bg-no-repeat bg-center `}
                      />
                    </div>
                    <h1 className="text-2xl font-extrabold">
                      {product?.title}
                    </h1>
                    <p className="text-[#88888a] text-lg  ">
                      {product?.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-8 py-20">
          <h1 className="text-[#BD3531] text-4xl font-bold">OUR SERVICES</h1>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 ">
            <div className="flex flex-col gap-4 p-10  bg-white order-2 xl:order1 ">
              <div
                className={` bg-[url("/assets/img/expert.png")] h-[60px] w-[60px] bg-cover bg-no-repeat bg-center `}
              />
              <h1 className="text-[25px] font-extrabold">Transhipments</h1>
              <p className="text-[#88888a] text-xl ">
                Seamlessly transferring goods between different modes of
                transport to keep your supply chain flowing.
              </p>
            </div>

            <div className="xl:col-span-3 xl:row-span-2 md:col-span-2 ">
              <div
                className={` bg-[url("/assets/img/containercargo.jpg")] h-[400px]  xl:h-full w-full bg-cover bg-no-repeat bg-center `}
              />
            </div>

            <div className="flex flex-col gap-4 p-10  bg-white  ">
              <div className="flex items-center">
                <div
                  className={` bg-[url("/assets/img/expert.png")] h-[60px] w-[60px] bg-cover bg-no-repeat bg-center `}
                />
              </div>
              <h1 className="text-[25px] font-extrabold">
                IMPORT/EXPORT Documentation
              </h1>

              <p className="text-[#88888a] text-xl  ">
                We take care of all the paperwork, ensuring your shipments move
                smoothly from point A to point B.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-10 bg-white  ">
              <div className="flex items-center">
                <div
                  className={` bg-[url("/assets/img/expert.png")] h-[60px] w-[60px] bg-cover bg-no-repeat bg-center `}
                />
              </div>
              <h1 className="text-[25px] font-extrabold">
                Tariff and Customs Consultancy
              </h1>

              <p className="text-[#88888a] text-xl  ">
                Our team provides clear advice on tariffs and customs
                regulations, helping you navigate import/export processes with
                ease.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-10  bg-white  ">
              <div className="flex items-center">
                <div
                  className={` bg-[url("/assets/img/expert.png")] h-[60px] w-[60px] bg-cover bg-no-repeat bg-center `}
                />
              </div>
              <h1 className="text-[25px] font-extrabold">
                Certificate of Payment Processing (For Motor Vehicle)
              </h1>

              <p className="text-[#88888a] text-xl  ">
                Let us handle the paperwork needed to process payment
                certificates for your vehicles hassle-free.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-10  bg-white  ">
              <div className="flex items-center ">
                <div
                  className={` bg-[url("/assets/img/expert.png")] h-[60px] w-[60px] bg-cover bg-no-repeat bg-center `}
                />
              </div>
              <h1 className="text-[25px] font-extrabold">
                LTO Processing (For Motor Vehicle)
              </h1>

              <p className="text-[#88888a] text-xl  ">
                We manage the paperwork for securing necessary approvals from
                the Land Transportation Office, making vehicle processing a
                breeze.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-10  bg-white  ">
              <div className="flex items-center ">
                <div
                  className={` bg-[url("/assets/img/expert.png")] h-[60px] w-[60px] bg-cover bg-no-repeat bg-center `}
                />
              </div>
              <h1 className="text-[25px] font-extrabold">
                Importer's Accreditation Processing
              </h1>

              <p className="text-[#88888a] text-xl  ">
                We assist in the accreditation process, making sure your import
                operations meet all regulatory requirements without any hassle.
              </p>
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
          <button className="bg-[#BD3531] text-white font-bold w-64 p-4 rounded-lg">
            FAQ
          </button>
          <button className="bg-white text-[#BD3531] font-bold w-64 p-4 rounded-lg">
            Contact us
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default Service;
