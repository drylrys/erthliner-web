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
      icon: ` bg-[url("/assets/img/doc-prod.png")]`
    },
    {
      title: "International Freight Forwarding (Door to Port)",
      description:
        "Our service covers the transportation of goods from the doorstep of your business to the designated port of arrival, simplifying the complexities of global shipping and ensuring timely delivery.",
      icon: ` bg-[url("/assets/img/ship.png")]`
    },
    {
      title: "Domestic Freight Forwarding (Door to Door)",
      description:
        "We offer comprehensive freight forwarding solutions for domestic shipments, managing the entire transportation process from pickup at your location to delivery directly to the desired destination, providing convenience and peace of mind.",
      icon: ` bg-[url("/assets/img/truck-cargo.png")]`
    },
    {
      title: "Hauling / Trucking for Domestic and International",
      description:
        "Our hauling and trucking services cater to both domestic and international shipments, offering reliable transportation solutions to move your goods safely and efficiently, whether it's across town or across borders.",
      icon: ` bg-[url("/assets/img/truck-cargo1.png")]`
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
        "Let us handle the paperwork needed to process payment certificates for your vehicles hassle-free.",
      icon: ` bg-[url("/assets/img/payment.png")]`
    },
    {
      title: "LTO Processing (For Motor Vehicle)",
      description:
        "We manage the paperwork for securing necessary approvals from the Land Transportation Office, making vehicle processing a breeze.",
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
      <div className="lg:px-40 px-5 text-center py-20">
        <h1 className="font-extrabold text-[70px]">PRODUCT & SERVICES</h1>
        <p className="text-[20px]">
          At{" "}
          <span className="text-[25px] font-bold">
            Erth Liner Cargo Express Co.
          </span>
          , we firmly believe that QUALITY SERVICE is not just a goal but the
          very foundation upon which all our efforts are built. We understand
          that the satisfaction of both our clients and stakeholders is
          paramount, and it's this guiding principle that drives every aspect of
          our operation. From the moment you engage with us to the final
          delivery of your goods, our commitment to excellence shines through at
          every step of the journey.
        </p>
      </div>

      <div className="px-5 gap-4 my-16 flex flex-col items-center ">
        <div className="text-[60px] font-extrabold">Products</div>
        <div className="flex flex-wrap justify-center items-stretch gap-4">
          {products.map((product, index) => {
            return (
              <div
                className="flex flex-col gap-4 p-5 shadow-xl w-[350px]  xl:w-[340px]"
                key={index}
              >
                <div className="flex justify-center">
                  <div
                    className={` ${product?.icon} h-[60px] w-[60px] bg-cover bg-no-repeat bg-center `}
                  />
                </div>
                <h1 className="text-center text-[30px] font-extrabold">
                  {product?.title}
                </h1>
                <p>{product?.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-5 gap-4 my-16 flex flex-col items-center ">
        <div className="text-[60px] font-extrabold">Services</div>
        <div className="flex flex-wrap justify-center items-stretch gap-4">
          {services.map((service, index) => {
            return (
              <div
                className="flex flex-col gap-4 p-5 shadow-xl w-[350px] xl:w-[400px]"
                key={index}
              >
                <div className="flex justify-center">
                  <div
                    className={` ${service?.icon} h-[60px] w-[60px] bg-cover bg-no-repeat bg-center `}
                  />
                </div>
                <h1 className="text-center text-[30px] font-extrabold">
                  {service?.title}
                </h1>
                <p>{service?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export default Service;
