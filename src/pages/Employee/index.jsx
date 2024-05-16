import React from "react";

import MainLayout from "../../components/layout/MainLayout";
function Employee() {
  return (
    <MainLayout>
      <div className="lg:mx-20 my-16">
        <div className="w-1/2 flex flex-col gap-5">
          <h1 className="font-semibold text-[18px]">The team</h1>
          <h1 className="font-semibold text-[30px]">
            Meet our team of experts at <br /> Earthliner Cargo Express
          </h1>
          <p className="font-semibold text-[20px]">
            To become the company our clients desire, it requires an eclectic
            group of passionate operators. Familiarize yourself with the
            individuals at Earthliner Cargo Expres
          </p>
        </div>
        <div className="flex gap-2 justify-center w-full">
          <div
            className={`bg-[url("/assets/img/pic-1.png")] h-[300px] w-[300px] md:h-[350px] md:w-[280px] bg-cover bg-no-repeat bg-top rounded-tl-[80px] rounded-br-[80px] bg-[#d1ffe2]   flex items-end`}
          >
            <div className="p-5 text-white font-semibold">
              <h1>Daryl Reyes</h1>
              <h1>Software Engineer</h1>
            </div>
          </div>
          <div
            className={`bg-[url("/assets/img/pic-1.png")] h-[300px] w-[300px] md:h-[350px] md:w-[280px] bg-cover bg-no-repeat bg-top rounded-tl-[80px] rounded-br-[80px] bg-[#d1ffe2]   flex items-end`}
          >
            <div className="p-5 text-white font-semibold">
              <h1>Ryan Tito H. Eres</h1>
              <h1>Managing Director</h1>
            </div>
          </div>
          <div
            className={`bg-[url("/assets/img/pic-1.png")] h-[300px] w-[300px] md:h-[350px] md:w-[280px] bg-cover bg-no-repeat bg-top rounded-tl-[80px] rounded-br-[80px] bg-[#d1ffe2]   flex items-end`}
          >
            <div className="p-5 text-white font-semibold">
              <h1>Ryan Tito H. Eres</h1>
              <h1>Managing Director</h1>
            </div>
          </div>
          <div
            className={`bg-[url("/assets/img/pic-1.png")] h-[300px] w-[300px] md:h-[350px] md:w-[280px] bg-cover bg-no-repeat bg-top rounded-tl-[80px] rounded-br-[80px] bg-[#d1ffe2]   flex items-end`}
          >
            <div className="p-5 text-white font-semibold">
              <h1>Ryan Tito H. Eres</h1>
              <h1>Managing Director</h1>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </MainLayout>
  );
}

export default Employee;
