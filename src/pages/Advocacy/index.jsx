import React from "react";
import Footer from "../../components/layout/Footer";
import Navigation from "../../components/layout/Navigation";
import MainLayout from "../../components/layout/MainLayout";
function Advocacy() {
  return (
    <MainLayout>
      <div className="px-5 md:px-20 py-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#BD3531] text-xl  font-bold  ">Advocacy</h1>
          <h1 className="text-5xl text-center lg:text-start font-extrabold mb-4">
            Advocating for a Strong Customs Brokerage Industry
          </h1>
          <p className="text-[20px] lg:text-center lg:w-8/12 text-[#88888a]">
            At Customs Brokerage Inc., we are committed to advocating for the
            customs brokerage industry. Our primary focus is to ensure the
            industry's growth, success, and compliance with regulations. We
            believe that a strong customs brokerage industry is vital for
            international trade and the smooth movement of goods across borders.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

export default Advocacy;
