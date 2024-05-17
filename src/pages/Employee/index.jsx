import React from "react";

import MainLayout from "../../components/layout/MainLayout";
import Icon from "../../components/Icon";
function Employee() {
  const employees = [
    {
      name: "Daryl Reyes",
      position: "Software Engineer"
    },
    {
      name: "Daryl Reyes",
      position: "Software Engineer"
    },
    {
      name: "Daryl Reyes",
      position: "Software Engineer"
    },
    {
      name: "Daryl Reyes",
      position: "Software Engineer"
    },
    {
      name: "Daryl Reyes",
      position: "Software Engineer"
    },
    {
      name: "Daryl Reyes",
      position: "Software Engineer"
    }
  ];
  return (
    <MainLayout>
      <div className="px-5 md:px-20">
        <div className="flex flex-col justify-center items-center  py-20">
          <h1 className="text-[#BD3531] text-xl  font-bold  ">The Team</h1>
          <h1 className="text-4xl lg:text-5xl text-center lg:text-start font-extrabold mb-4">
            Meet our team of experts at <br /> Earthliner Cargo Express
          </h1>
          <p className="text-[20px] lg:text-center lg:w-8/12 text-[#88888a] ">
            To become the company our clients desire, it requires an eclectic
            group of passionate operators. Familiarize yourself with the
            individuals at Earthliner Cargo Expres
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col xl:flex-row justify-center items-center gap-12 p-8 xl:w-9/12 xl:h-[500px]  rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px]   bg-white">
            <div>
              <div
                className={`bg-[url("/assets/img/pic-1.png")] h-[300px] w-[300px] md:h-[360px] md:w-[290px] bg-cover bg-no-repeat bg-top rounded-tl-[80px] rounded-br-[80px] bg-[#BD3531]  flex `}
              />
            </div>

            <div className=" flex flex-col gap-4">
              <Icon
                src="/assets/svg/qoutation.svg"
                className="w-10 h-w-10"
                alt="logo"
              />
              <h1 className="text-4xl md:text-5xl font-bold">
                Success is not a destination; it's a journey. Stay resilient,
                adapt to challenges, and keep moving forward.
              </h1>
              <div>
                <p className="font-bold text-[#BD3531] text-2xl">Daryl Reyes</p>
                <p className="font-semibold xl">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-20">
          <div className="flex  flex-wrap gap-8 justify-center  xl:w-11/12">
            {employees.map((employee, index) => {
              return (
                <div
                  key={index}
                  className={`bg-[url("/assets/img/pic-1.png")] md:h-[300px] md:w-[280px]  h-[300px] w-[280px]  lg:h-[400px] lg:w-[380px] : bg-cover bg-no-repeat bg-top rounded-tl-[80px] rounded-br-[80px] bg-[#FFFFFF]   flex items-end`}
                >
                  <div className="pl-6 text-white font-semibold">
                    <h1>{employee.name}</h1>
                    <h1>{employee.position}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div
        className={`bg-[url("/assets/img/redbg.jpg")] bg-cover bg-no-repeat bg-top gap-10 flex flex-col w-full justify-center items-center p-2 md:h-[500px]`}
      >
        <div className="text-white font-extrabold text-5xl lg:text-6xl text-center md:w-1/2">
          Ready to take your next step? Connect with us now and let's make your
          vision a reality
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <button className="bg-[#BD3531] text-white font-bold w-64 p-4 rounded-lg">
            FAQ
          </button>
          <button className="bg-white text-[#BD3531] font-bold w-64 p-4 rounded-lg">
            Contact us
          </button>
        </div>
      </div> */}
    </MainLayout>
  );
}

export default Employee;
