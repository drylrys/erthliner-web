import React from "react";

import MainLayout from "../../components/layout/MainLayout";
import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import ContactForm from "../../components/ContactForm";
function Contact() {
  return (
    <MainLayout>
      <section className="relative py-20">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
          <div className=" flex-1 w-full">
            <div className="lg:w-full px-5 md:px-20 lg:px-20">
              <div className="flex flex-col justify-center items-center pb-20">
                <h1 className="text-[#BD3531] text-xl  font-bold  ">
                  Contact us
                </h1>
                <h1 className="text-4xl lg:text-5xl text-center font-extrabold mb-4">
                  Let us hear from you!
                </h1>
                <p className="text-[20px] lg:text-center  text-[#88888a] ">
                  Contact Erth Liner Cargo Express today and experience
                  reliable, efficient, and personalized cargo services. Your
                  logistics journey starts with a simple conversation!
                </p>
              </div>
              <div className="flex flex-col gap-10 justify-center">
                <div className="flex flex-col lg:flex-row items-center gap-5 text-[#88888a]  font-semibold text-lg">
                  <MdLocationPin
                    className="bg-[#BD3531] text-white rounded-full p-2 "
                    size={50}
                  />
                  <p className="lg:w-10/12">
                    Room 611-B, Equitable Building 262 Juan Luna St. Binondo
                    Manila 1006
                  </p>
                </div>
                <div className="flex  flex-col lg:flex-row items-center gap-5  text-[#88888a] font-semibold text-lg">
                  <MdEmail
                    className="bg-[#BD3531] text-white rounded-full p-2"
                    size={50}
                  />
                  customercare.erthliner@gmail.com
                </div>
                <div className="flex items-center  flex-col lg:flex-row text-[#88888a] gap-5 font-semibold text-lg">
                  <MdLocalPhone
                    className="bg-[#BD3531] text-white rounded-full p-2"
                    size={50}
                  />
                  (+632) 8244-24-37; 8986-89-23
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 px-2">
            <ContactForm />
          </div>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d295.87821922900764!2d120.97477061091311!3d14.598430780148496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca108b0fffff%3A0x4d027509f9b1f3ba!2sERTH%20LINER%20CARGO%20EXPRESS%20CO!5e0!3m2!1sen!2sph!4v1707965105889!5m2!1sen!2sph"
        className="flex-1 w-full h-[500px] rounded-lg"
        style={{
          zIndex: "-1"
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </MainLayout>
  );
}

export default Contact;
