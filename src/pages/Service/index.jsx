import React from "react";
import Footer from "../../components/layout/Footer";
import Navigation from "../../components/layout/Navigation";
import MainLayout from "../../components/layout/MainLayout";
function Service() {
  return (
    <MainLayout>
      <div className="grid grid-row-2 md:grid-cols-2 px-5 gap-4 my-16 ">
        <div className="flex flex-col gap-8  justify-center  items-center lg:px-5 xl:px-20">
          <h1 className="font-extrabold  text-[75px]">SERVICES</h1>
        </div>
        <div className="flex flex-col gap-8 lg:px-20 xl:px-20 justify-center items-center  ">
          <div>
            <p className="text-[20px]">
              At
              <span className="text-[30px] font-bold">
                Erth Liner Cargo Express Co.
              </span>
              , we firmly believe that QUALITY SERVICE is not just a goal but
              the very foundation upon which all our efforts are built. We
              understand that the satisfaction of both our clients and
              stakeholders is paramount, and it's this guiding principle that
              drives every aspect of our operation. From the moment you engage
              with us to the final delivery of your goods, our commitment to
              excellence shines through at every step of the journey.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Service;
