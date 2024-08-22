import React from "react";
import Header from "../header";
import Footer from "../footer";
import Img from "../../elements/img";
import Card from "./card";

function Page1() {
  return (
    <main className="w-full h-full relative">
      <section className="justify-center items-center mx-[50px] ">
        <section className="flex flex-col relative">
          <div className="relative">
            <Header />
            <div className="absolute right-0 top-0 z-[-1] h-full">
              <Img src="assets/img/img-1.svg" alt="img main" className="" />
            </div>
          </div>

          <section className="flex flex-row w-1/2 -mt-5">
            <div className="flex flex-col justify-between py-5">
              <text className="font-rubik font-medium text-[20px] text-[#252525] text-left">
                Lorem ipsum dolor sit amet consectetur.
              </text>
              <Img
                src="assets/img/vector-arrow-kananbawah.svg"
                alt="vector kanan bawah"
                className="w-[100px] h-[100px]"
              />
            </div>

            <div className="flex">
              <text className="font-rubik font-semibold text-[200px] leading-[200px]">
                Elga<span className="text-[#F69221]">.</span> Net- works
              </text>
            </div>
          </section>
        </section>

        <div className="translate-y-[50px] flex justify-end items-end -mx-[50px]">
          <Img
            src="assets/img/vector-bintang2.svg"
            alt="icon bintang kanan"
            className="fill-[#F2C694] w-[210px] h-[206px] opacity-50"
          />
        </div>
        <section className="flex flex-col mt-[300px] space-y-[50px]">
          <section className="flex flex-col justify-center items-center  space-y-[50px]">
            <div className="flex flex-row items-center justify-center">
              <text className="font-rubik font-medium text-[90px]">
                Our Services
              </text>
              <Img
                src="assets/img/vector-bintang.svg"
                alt="icon bintang"
                className="flex justify-center items-center"
              />
            </div>
            <div className="flex flex-col font-rubik text-[40px] text-[#252525] w-full max-w-[800px]">
              <button className="flex flex-row justify-between items-center border border-l-0 border-r-0 border-t-0  border-b-black">
                <text>Dedicated Internet</text>
                <span>+</span>
              </button>
              <button className="flex flex-row justify-between items-center border border-l-0 border-r-0 border-t-0  border-b-black">
                <text>Data Center</text>
                <span>+</span>
              </button>
              <button className="flex flex-row justify-between items-center border border-l-0 border-r-0 border-t-0  border-b-black">
                <text>Internet of building</text>
                <span>+</span>
              </button>
              <button className="flex flex-row justify-between items-center border border-l-0 border-r-0 border-t-0  border-b-black">
                <text>Dedicated Internet</text>
                <span>+</span>
              </button>
            </div>
          </section>

          <div className="mt-[30px] -mx-[50px]">
            <Img
              src="assets/img/vector-bintang2.svg"
              alt="icon bintang"
              className="w-[100px] h-[100px]"
            />
          </div>

          <div className="flex flex-col space-y-[30px] font-rubik">
            <text className="text-[90px]">Our Works</text>
            <Card />
          </div>

          <div className="mt-[250px] flex flex-col justify-center items-center font-rubik ">
            <text className="text-[90px] mb-[100px]">
              <Img
                src="assets/img/vector-bintang.svg"
                alt=""
                className="absolute translate-y-[30px] w-[35px] h-[35px]"
              />
              Get in Touch
            </text>

            <input
              type="text"
              placeholder="Your Email"
              className="border border-l-0 border-r-0 border-t-0 border-b-black w-[800px] text-[40px]"
            />

            <button className="text-[50px] font-medium flex flex-row justify-center items-center pt-[50px]">
              Send
              <Img
                src="assets/img/vector-arrow-kanan.svg"
                alt="icon panah kanan"
                className="ml-[20px]"
              />
            </button>
          </div>

          <div className="mt-[30px] mb-[100px] flex justify-end items-end">
            <Img
              src="assets/img/vector-bintang2.svg"
              alt="icon bintang"
              className="w-[100px] h-[100px]"
            />
          </div>
        </section>
        <Footer />
      </section>
    </main>
  );
}

export default Page1;
