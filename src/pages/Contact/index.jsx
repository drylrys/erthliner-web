import React from "react";

import MainLayout from "../../components/layout/MainLayout";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactForm from "../../components/ContactForm";
function Contact() {
  return (
    <MainLayout>
      {/* <section className="relative py-20">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
          <div className=" flex-1 w-full">
            <div className="lg:w-11/12  px-5 md:px-20 lg:px-20">
              <div className="text-center">
                <h1 className="pb-10 text-[80px] font-bold text-center">
                  Contact Us
                </h1>
              </div>
              <h1 className="text-[20px] font-semibold">
                Contact Erth Liner Cargo Express today and experience reliable,
                efficient, and personalized cargo services. Your logistics
                journey starts with a simple conversation!
              </h1>

              <div className="pt-20 flex flex-col gap-10">
                <div className="flex items-center gap-5 ">
                  <MdEmail
                    className="bg-[#BD3531] text-white rounded-full p-2"
                    size={50}
                  />
                  earthliner@gmail.com
                </div>
                <div className="flex items-center  gap-5">
                  <MdLocalPhone
                    className="bg-[#BD3531] text-white rounded-full p-2"
                    size={50}
                  />
                  +63 9876543210
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
      ></iframe> */}
    </MainLayout>
  );
}

export default Contact;
