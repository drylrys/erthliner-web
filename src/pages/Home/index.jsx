import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import Icon from "../../components/Icon";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const contents = [
    {
      title: "Industry Expertise",
      textColor: "text-[#59886B]",
      borderColor: "border-[#59886B]",
      icon: `bg-[url("/assets/img/expert.png")]`,
      transition: { type: "spring", duration: 1, delay: 0 },
      content:
        "With years of industry expertise, our team navigates the complexities of customs regulations with precision. We stay abreast of the latest changes, allowing us to offer informed solutions tailored to your business."
    },
    {
      title: "Client-Centric Approach",
      textColor: "text-[#e4f801]",
      icon: `bg-[url("/assets/img/client.png")]`,
      borderColor: "border-[#e4f801]",
      transition: { type: "spring", duration: 1, delay: 0.5 },
      content:
        "Your satisfaction is our priority. We take a client-centric approach, working closely with you to understand your unique requirements and providing personalized customs brokerage services that meet and exceed your expectations."
    },
    {
      title: "Cost Optimization",
      textColor: "text-[#e90100]",
      borderColor: "border-[#e90100]",
      icon: `bg-[url("/assets/img/save-money.png")]`,
      transition: { type: "spring", duration: 1, delay: 1 },
      content:
        "We understand the financial implications of customs delays. Erthliner Cargo Express is committed to optimizing costs by minimizing delays and avoiding unnecessary fines through meticulous compliance management."
    }
  ];
  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <MainLayout>
      <div className="px-2 md:px-20">
        <div className="flex flex-col justify-center items-center gap-10 mt-20">
          <h1 className="font-extrabold text-6xl md:text-7xl text-center">
            Simplify Your{" "}
            <span className="text-[#BD3531]">
              Customs <br /> Brokerage
            </span>{" "}
            Process with Us
          </h1>
          <p className="text-[#868686] text-center text-lg md:w-7/12">
            Welcome to our customs brokerage services. We specialize in
            providing efficient and reliable solutions for all your customs
            needs. Whether you're importing or exporting goods, our team of
            experts will ensure a smooth and hassle-free process.
          </p>
          <div>
            <button
              onClick={() => handleNavigate("/contact")}
              className="bg-[#BD3531] text-white px-10 py-4 rounded-md font-bold"
            >
              Contact Us Now
            </button>
          </div>
          <div
            className={`bg-[url("/assets/img/bg.jpg")] w-full h-[700px] bg-cover bg-no-repeat bg-bottom`}
          />
        </div>

        <div className="my-32">
          <h1 className="animate-hidden text-[#BD3531] text-xl text-start  font-bold  md:pl-24">
            We are
          </h1>
          <div className="animate-hidden flex justify-center flexpublic-wrap md:flex-row gap-9 2xl:gap-52">
            <h1 className="font-extrabold  text-6xl">Why Choose Us</h1>
            <p className="text-[#88888a] text-2xl lg:text-end lg:w-1/2">
              At Erth liner cargo express co., We pride ourselves on being a
              trusted partner in your global trade journey. Our customs
              brokerage services go beyond the basics, ensuring a seamless and
              compliant experience for your imports and exports.
            </p>
          </div>

          <div className="animate-hidden flex flex-wrap gap-8 justify-center mt-20 ">
            {contents.map((content, index) => {
              return (
                <div
                  className="bg-white w-[380px] 2xl:w-[480px] p-10 flex flex-col gap-6"
                  key={index}
                >
                  <div
                    className={`${content.icon} h-[80px] w-[80px] bg-cover bg-no-repeat bg-center`}
                  />
                  <h1 className="font-extrabold text-2xl">{content.title}</h1>
                  <p className="text-lg">{content.content}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center flex-col items-center ">
          <h1 className="animate-hidden text-[#BD3531] text-xl font-bold">
            Our Services
          </h1>
          <div className=" animate-hidden text-center lg:w-8/12 flex flex-col gap-6">
            <h1 className="font-extrabold text-6xl">
              Clearing the path for your <br /> global trade
            </h1>
            <p className="text-[#88888a] text-2xl">
              From seamless clearances to expert duty optimization, trust us to
              handle every aspect of your customs needs.
            </p>
          </div>
          <button
            onClick={() => handleNavigate("/services")}
            className="bg-[#BD3531] text-lg text-white px-10 py-4 rounded-md font-bold mt-7 flex items-center gap-3"
          >
            Explore Services
            <Icon
              src="/assets/svg/right-arrow.svg"
              className="w-4"
              alt="logo"
            />
          </button>

          <div className="grid lg:grid-cols-3 gap-2 my-12">
            <div className="flex flex-col gap-8">
              <div className="animate-hidden p-5 lg:text-end flex flex-col gap-4 ">
                <div className="flex lg:justify-end">
                  <div
                    className={` bg-[url("/assets/img/docs.png")] h-[80px] w-[80px] bg-cover bg-no-repeat bg-center`}
                  />
                </div>
                <h1 className="font-bold text-4xl">
                  Customs Brokerage Services
                </h1>
                <p className="text-[#88888a] text-xl  ">
                  We handle all the necessary paperwork and logistics involved
                  in customs clearance for importing and exporting goods,
                  ensuring a smooth and efficient process for our clients
                </p>
              </div>
              <div className="animate-hidden p-5 lg:text-end flex flex-col gap-4  ">
                <div className="flex lg:justify-end">
                  <div
                    className={`bg-[url("/assets/img/ship.png")] h-[80px] w-[80px] bg-cover bg-no-repeat bg-center`}
                  />
                </div>
                <h1 className="font-bold text-4xl">
                  International Freight Forwarding (Door to Port)
                </h1>
                <p className="text-[#88888a] text-xl">
                  Our service covers the transportation of goods from the
                  doorstep of your business to the designated port of arrival,
                  simplifying the complexities of global shipping and ensuring
                  timely delivery.
                </p>
              </div>
            </div>
            <div className="lg:flex lg:justify-center hidden">
              <div
                className={`bg-[url("/assets/img/ship3.png")] w-full h-full bg-cover bg-no-repeat bg-top`}
              />
            </div>
            <div className="flex flex-col  gap-8">
              <div className="animate-hidden p-5  flex flex-col gap-4 ">
                <div
                  className={` bg-[url("/assets/img/cargo-truck.png")] h-[80px] w-[80px] bg-cover bg-no-repeat bg-center`}
                />

                <h1 className="font-bold text-4xl">
                  Domestic Freight Forwarding (Door to Door)
                </h1>
                <p className="text-[#88888a] text-xl  ">
                  We offer comprehensive freight forwarding solutions for
                  domestic shipments, managing the entire transportation process
                  from pickup at your location to delivery directly to the
                  desired destination, providing convenience and peace of mind.
                </p>
              </div>
              <div className="animate-hidden p-5  flex flex-col gap-4 ">
                <div
                  className={` bg-[url("/assets/img/trucks.png")] h-[80px] w-[80px] bg-cover bg-no-repeat bg-center`}
                />

                <h1 className="font-bold text-4xl">
                  Hauling / Trucking for Domestic and International
                </h1>
                <p className="text-[#88888a] text-xl  ">
                  Our hauling and trucking services cater to both domestic and
                  international shipments, offering reliable transportation
                  solutions to move your goods safely and efficiently, whether
                  it's across town or across borders.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 my-32  ">
          <div className="flex justify-center">
            <img
              src="/assets/img/bg1.jpg"
              className=" w-[400px] h-[400px]  md:h-[550px] md:w-[550px]"
            />
          </div>
          <div className="flex flex-col justify-center lg:order-1  order-2 animate-hidden   ">
            <h1 className=" text-[#BD3531] text-xl font-bold">About us</h1>
            <div className="flex flex-col gap-12">
              <h1 className="text-[40px] font-extrabold">
                Discover Erth liner Cargo Express Co., Your Trusted Partner in
                Cargo Solutions.
              </h1>
              <p className="text-[20px] text-xl text-[#88888a]">
                We understand the complexities of international trade and the
                critical role that customs brokerage plays in ensuring the
                smooth flow of goods across borders. Our dedicated team of
                experts is committed to providing you with top-notch customs
                brokerage services tailored to your unique business needs.
              </p>
              <button
                onClick={() => handleNavigate("/about-us")}
                className="bg-[#BD3531] text-lg  text-white font-bold w-64 p-4 rounded-lg flex items-center justify-center gap-3"
              >
                Know more about us
                <Icon
                  src="/assets/svg/right-arrow.svg"
                  className="w-4"
                  alt="logo"
                />
              </button>
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

export default Home;
