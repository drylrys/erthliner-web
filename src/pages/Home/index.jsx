import React, { useRef, useState } from "react";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import {
  motion,
  useAnimate,
  useInView,
  useScroll,
  useTransform
} from "framer-motion";
import ChooseUsCard from "../../components/ChooseUsCard";
import Collapse from "../../components/Collapse";
import MainLayout from "../../components/layout/MainLayout";
import Icon from "../../components/Icon";

function Home() {
  const whyChooseUsRef = useRef(null);
  const isInView = useInView(whyChooseUsRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: whyChooseUsRef,
    offset: ["start end", "end start"]
  });

  const contents = [
    {
      title: "Industry Expertise",
      textColor: "text-[#59886B]",
      borderColor: "border-[#59886B]",
      transition: { type: "spring", duration: 1, delay: 0 },
      content:
        "With years of industry expertise, our team navigates the complexities of customs regulations with precision. We stay abreast of the latest changes, allowing us to offer informed solutions tailored to your business."
    },
    {
      title: "Client-Centric Approach",
      textColor: "text-[#e4f801]",
      borderColor: "border-[#e4f801]",
      transition: { type: "spring", duration: 1, delay: 0.5 },
      content:
        "Your satisfaction is our priority. We take a client-centric approach, working closely with you to understand your unique requirements and providing personalized customs brokerage services that meet and exceed your expectations."
    },
    {
      title: "Cost Optimization",
      textColor: "text-[#e90100]",
      borderColor: "border-[#e90100]",
      transition: { type: "spring", duration: 1, delay: 1 },
      content:
        "We understand the financial implications of customs delays. Erthliner Cargo Express is committed to optimizing costs by minimizing delays and avoiding unnecessary fines through meticulous compliance management."
    }
  ];

  return (
    <MainLayout>
      <div className="px-5 md:px-20">
        <div className="flex flex-col justify-center items-center gap-10 mt-20">
          <h1 className="font-extrabold text-7xl text-center">
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
            <button className="bg-[#BD3531] text-white px-10 py-4 rounded-md font-bold">
              Contact Us Now
            </button>
          </div>
          <div
            className={`bg-[url("/assets/img/bg.jpg")] w-full h-[700px] bg-cover bg-no-repeat bg-bottom`}
          />
        </div>
        {/* <div className=" flex flex-col gap-4 p-6">
          <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl text-[#88888a]">
            Accreditations & Affiliations
          </h1>
          <div className=" flex gap-6 md:gap-10 justify-center">
            <img
              src="/assets/img/customs_logo1.png"
              alt="logo"
              className="filter grayscale aspect-[3/2] object-contain  sm:w-16 md:w-36"
            />
            <img
              src="/assets/img/dti_logo1.png"
              className="filter grayscale aspect-[3/2] object-contain sm:w-16 md:w-36"
              alt="logo"
            />
            <img
              src="/assets/img/peza_logo1.png"
              className="filter grayscale aspect-[3/2] object-contain sm:w-16 md:w-36"
              alt="logo"
            />
            <img
              src="/assets/img/ppa_logo1.png"
              className="filter grayscale aspect-[3/2] object-contain  sm:w-16 md:w-36"
              alt="logo"
            />
          </div>
        </div> */}
        <div className="my-32">
          <h1 className="text-[#BD3531] text-xl text-start  font-bold pl-24">
            We are
          </h1>
          <div className="flex justify-center flex-wrap md:flex-row gap-9 2xl:gap-52">
            <h1 className="font-extrabold text-6xl">Why Choose Us</h1>
            <p className="text-[#88888a] text-2xl lg:text-end lg:w-1/2">
              At Erth liner cargo express co., We pride ourselves on being a
              trusted partner in your global trade journey. Our customs
              brokerage services go beyond the basics, ensuring a seamless and
              compliant experience for your imports and exports.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 justify-center mt-20">
            {contents.map((content, index) => {
              return (
                <div
                  className="bg-white w-[380px] 2xl:w-[480px] p-10 flex flex-col gap-6"
                  key={index}
                >
                  <div
                    className={` bg-[url("/assets/img/expert.png")] h-[80px] w-[80px] bg-cover bg-no-repeat bg-center`}
                  />
                  <h1 className="font-extrabold text-2xl">{content.title}</h1>
                  <p className="text-lg">{content.content}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center flex-col items-center ">
          <h1 className="text-[#BD3531] text-xl font-bold">Our Services</h1>
          <div className="text-center lg:w-8/12 flex flex-col gap-6">
            <h1 className="font-extrabold text-6xl">
              Clearing the path for your <br /> global trade
            </h1>
            <p className="text-[#88888a] text-2xl">
              From seamless clearances to expert duty optimization, trust us to
              handle every aspect of your customs needs.
            </p>
          </div>
          <button className="bg-[#BD3531] text-lg text-white px-10 py-4 rounded-md font-bold mt-7 flex items-center gap-3">
            Explore Services
            <Icon
              src="/assets/svg/right-arrow.svg"
              className="w-4"
              alt="logo"
            />
          </button>

          <div className="grid lg:grid-cols-3 gap-2 my-12">
            <div className="flex flex-col">
              <div className="p-5 lg:text-end flex flex-col gap-4 ">
                <div className="flex lg:justify-end">
                  <div
                    className={` bg-[url("/assets/img/expert.png")] h-[80px] w-[80px] bg-cover bg-no-repeat bg-center`}
                  />
                </div>
                <h1 className="font-bold text-5xl">
                  Customs Brokerage Services
                </h1>
                <p className="text-[#88888a] text-2xl  ">
                  We handle all the necessary paperwork and logistics involved
                  in customs clearance for importing and exporting goods,
                  ensuring a smooth and efficient process for our clients
                </p>
              </div>
              <div className="p-5 lg:text-end flex flex-col gap-4 ">
                <div className="flex lg:justify-end">
                  <div
                    className={`bg-[url("/assets/img/expert.png")] h-[80px] w-[80px] bg-cover bg-no-repeat bg-center`}
                  />
                </div>
                <h1 className="font-bold text-5xl">
                  International Freight Forwarding (Door to Port)
                </h1>
                <p className="text-[#88888a] text-2xl">
                  Our service covers the transportation of goods from the
                  doorstep of your business to the designated port of arrival,
                  simplifying the complexities of global shipping and ensuring
                  timely delivery.
                </p>
              </div>
            </div>
            <div className="lg:flex lg:justify-center hidden">
              <div
                className={`bg-[url("/assets/img/ship3.png")] w-10/12 h-[700px] bg-cover bg-no-repeat bg-bottom`}
              />
            </div>
            <div className="flex flex-col  gap-8">
              <div className="p-5  flex flex-col gap-4 ">
                <div
                  className={` bg-[url("/assets/img/expert.png")] h-[80px] w-[80px] bg-cover bg-no-repeat bg-center`}
                />

                <h1 className="font-bold text-5xl">
                  Domestic Freight Forwarding (Door to Door)
                </h1>
                <p className="text-[#88888a] text-2xl  ">
                  We offer comprehensive freight forwarding solutions for
                  domestic shipments, managing the entire transportation process
                  from pickup at your location to delivery directly to the
                  desired destination, providing convenience and peace of mind.
                </p>
              </div>
              <div className="p-5  flex flex-col gap-4 ">
                <div
                  className={` bg-[url("/assets/img/expert.png")] h-[80px] w-[80px] bg-cover bg-no-repeat bg-center`}
                />

                <h1 className="font-bold text-5xl">
                  Hauling / Trucking for Domestic and International
                </h1>
                <p className="text-[#88888a] text-2xl  ">
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
          <div className="flex flex-col justify-center lg:order-1  order-2  ">
            <h1 className="text-[#BD3531] text-xl font-bold">About us</h1>
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
              <button className="bg-[#BD3531] text-lg  text-white font-bold w-64 p-4 rounded-lg flex items-center justify-center gap-3">
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
          <button className="bg-[#BD3531] text-white font-bold w-64 p-4 rounded-lg">
            FAQ
          </button>
          <button className="bg-white text-[#BD3531] font-bold w-64 p-4 rounded-lg">
            Contact us
          </button>
        </div>
      </div>

      {/* <div className="mx-4">
        <div
          className={`lg:h-[calc(100vh)] p-2 md:p-24 py-20 md:py-40 bg-[url("/assets/img/bg7.png")] bg-cover bg-no-repeat bg-top rounded-3xl `}
        >
          <motion.div
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="h-full flex justify-center flex-col lg:w-1/2 gap-9"
          >
            <h1 className="text-stroke font-extrabold text-6xl text-[#F1F1F1] ">
              Simplify Your Customs Brokerage Process with Us
            </h1>
            <h2 className="text-stroke font-normal text-[#F1F1F1] text-xl md:text-xl   ">
              Welcome to our customs brokerage services. We specialize in
              providing efficient and reliable solutions for all your customs
              needs. Whether you're importing or exporting goods, our team of
              experts will ensure a smooth and hassle-free process.
            </h2>
            <div className="flex gap-4 lg:gap-7 ">
              <button
                onClick={() => router.push("/contact-us")}
                className="border-4 border-[#F1F1F1]  w-40 h-14 lg:w-56 lg:h-20 rounded-tl-2xl rounded-br-2xl lg:text-xl  font-bold text-[#FFFFFF] animate-fade-right animate-once animate-duration-[2000ms] hover:bg-[#FDB827] hover:text-[#F1F1F1] "
              >
                Inquire now &gt;
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div ref={whyChooseUsRef}>
          <div className="w-full flex flex-col items-center gap-10 my-40 md:px-20 ">
            <div className="flex flex-col items-center lg:px-64 gap-5">
              <h1 className="text-5xl text-center font-extrabold text-[#59886B]">
                Why Choose Us?
              </h1>
              <p className="text-sm text-center font-semibold">
                At Erth liner cargo express co., We pride ourselves on being a
                trusted partner in your global trade journey. Our customs
                brokerage services go beyond the basics, ensuring a seamless and
                compliant experience for your imports and exports.
              </p>
            </div>
            <div className="flex flex-col gap-20 lg:flex-row lg:gap-10 items-stretch h-full mt-20 ">
              {contents.map((content, index) => {
                return (
                  <ChooseUsCard
                    // whyChooseUsRef={whyChooseUsRef}
                    animate={
                      isInView
                        ? {
                            x: [-2000, 0]
                          }
                        : {}
                    }
                    transition={content.transition}
                    className="chooseus-hidden chooseus"
                    key={index}
                    title={content.title}
                    content={content.content}
                    number={index + 1}
                    invert={index === 1}
                    borderColor={content.borderColor}
                    textColor={content.textColor}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 my-40  md:px-20">
          <div className="flex flex-col gap-8  justify-center items-center lg:order-1  order-2  ">
            <div className="flex flex-col gap-6">
              <h1 className="text-[40px] font-extrabold">
                Discover Erth liner Cargo Express Co., Your Trusted Partner in
                Cargo Solutions.
              </h1>
              <p className="text-[20px]">
                We understand the complexities of international trade and the
                critical role that customs brokerage plays in ensuring the
                smooth flow of goods across borders. Our dedicated team of
                experts is committed to providing you with top-notch customs
                brokerage services tailored to your unique business needs.
              </p>
              <button className="bg-[#59886B] text-white font-bold w-64 p-4 rounded-lg">
                Know more about us &gt; &gt;
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end  lg:pl-20 lg:pr-20 lg:order-2 order-1">
            <img
              src="/assets/img/container5.png"
              className=" w-[300px] h-[300px]  md:h-[400px] md:w-[400px]"
            />
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center gap-10 py-10  lg:h-[350px]  bg-[url("/assets/img/pic4.png")]   bg-cover bg-no-repeat bg-top rounded-3xl md:mx-20 my-40 `}
        >
          <div className="text-center">
            <h1 className="font-extrabold text-[45px] text-white">
              UNLOCK TRADE EXCELLENCE – REACH OUT TO US TODAY!
            </h1>
            <p className="font-bold  text-white">
              Empower your customs journey with a single call, where every
              connection opens doors to smoother logistics
            </p>
          </div>
          <div>
            <button className="bg-[#FFFFFF] text-[#59886B] font-bold w-64 p-4 rounded-lg">
              Explore Services &gt; &gt;
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 my-40 md:px-20">
          <div className="flex justify-center xl:justify-start ">
            <div
              className={`content-img-shadow bg-[url("/assets/img/pic1.jpg")] w-[300px] h-[300px]  md:h-[600px] md:w-[600px] bg-cover bg-no-repeat bg-center rounded-lg shadow-2xl`}
            />
          </div>
          <div className="flex flex-col gap-8 lg:pr-20 justify-center items-center  ">
            <div>
              <h1 className="text-[40px] font-extrabold">Our services</h1>
              <p className="text-[20px]">
                We transcend the ordinary, delivering logistics solutions that
                redefine efficiency and reliability in global trade. Our
                commitment to precision and streamlined operations positions us
                as your trusted partner for effortless solutions in the
                intricate world of international commerce. Trust Earthliner for
                customs brokerage that sets you apart.
              </p>
            </div>
            <div className="flex gap-10 flex-col lg:flex-row">
              <div className="flex flex-col gap-3">
                <h1 className="text-[20px] font-extrabold">Save Time</h1>
                <p className="text-[20px]">
                  Our experienced team handles all customs paperwork and
                  processes, saving you valuable time.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-[20px] font-extrabold">Save Time</h1>
                <p className="text-[20px]">
                  Our experienced team handles all customs paperwork and
                  processes, saving you valuable time.
                </p>
              </div>
            </div>
            <button className="bg-[#59886B] text-white font-bold w-64 p-4 rounded-lg self-start">
              Explore Services &gt; &gt;
            </button>
          </div>
        </div>

        <section className="flex items-center justify-center flex-col gap-10 md:px-20">
          <div className="text-[36px] text-center">
            <span className="font-bold">Questions?</span> Look Here
          </div>
          <Collapse />
        </section>
      </div> */}
    </MainLayout>
  );
}

export default Home;
