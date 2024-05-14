import React from "react";
import Footer from "../../components/layout/Footer";
import Navigation from "../../components/layout/Navigation";
function Service() {
  return (
    <div className="mx-10">
      <div className="px-[190px]">
        <div className="grid grid-cols-2 gap-0 mt-[150px] mb-[150px] ">
          <div className="300 flex font-extrabold text-[80px]  justify-center items-center  pl-20 pr-20">
            <h1>Services</h1>
          </div>
          <div className="flex flex-col gap-8 pr-20 justify-center items-center pl-20  ">
            <div>
              <p className="text-[20px]">
                At{" "}
                <span className="text-[30px] font-bold">
                  Erth Liner Cargo Express Co.{" "}
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

        <Footer />
      </div>
    </div>
  );
}

export default Service;
