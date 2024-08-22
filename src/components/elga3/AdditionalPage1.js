import React from "react";
import Header from "../header";
import Footer from "../footer";
import Img from "../../elements/img";

function Additional1() {
  return (
    <main className="w-full h-full relative">
      <section className="flex flex-col">
        <div className="relative">
          <Header />
          <div className="absolute right-0 top-0 z-[-1] h-full">
            <Img src="assets/img/img-1.svg" alt="img main" className="" />
          </div>
        </div>
        <section className=" MAIN flex flex-col relative px-[50px]">
          <section className="flex w-1/5 -mt-5 pl-[50px]">
            <div className="flex flex-col">
              <text className="font-rubik font-semibold text-[200px] leading-[200px] w-1/4">
                Have Quest ion<span className="text-[#F7941D]">?</span>
              </text>
              <Img
                src="assets/img/vector-arrow-kananbawah.svg"
                alt="vector kanan bawah"
                className="w-[100px] h-[100px] translate-x-[350px] -translate-y-[120px]"
              />
            </div>
          </section>

          <section className="flex flex-col mt-[50px] px-[50px]">
            <text className="font-rubik font-medium text-[33px] text-[#252525] text-justify">
            Lorem ipsum dolor sit amet consectetur. Dolor quam amet scelerisque semper. Accumsan amet massa diam aliquet senectus aliquet ullamcorper ut id. Eleifend pellentesque ultricies et amet mauris non ut eros vitae. In dolor pulvinar leo interdum. Eu amet euismod purus bibendum tempus adipiscing lacus sit. Vitae duis maecenas pretium integer lacus porttitor pellentesque. Senectus magna donec ridiculus accumsan aliquam nisl scelerisque tempus. Penatibus arcu donec tristique interdum. Adipiscing eu morbi urna euismod.
            </text>
          </section>
        </section>
        <Footer />
      </section>
    </main>
  );
}

export default Additional1;
