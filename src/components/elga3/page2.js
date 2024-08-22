import React from "react";
import Header from "../header";
import Footer from "../footer";
import Img from "../../elements/img";
import Card from "./card";

function Page2() {
  return (
    <main className="w-full h-full relative">
      <section className="flex flex-col relative px-[50px]">
        <div className="relative">
          <Header />
          <div className="absolute right-0 top-0 z-[-1] h-full">
            <Img src="assets/img/img-1.svg" alt="img main" className="" />
          </div>
        </div>
        <section className="MAIN flex flex-col relative">
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

          <section className="flex flex-col justify-center items-center font-rubik mt-[200px] space-y-14">
            <div className="flex flex-row justify-center items-center">
              <text className="font-medium text-[90px]">
                Our Corporate Value
              </text>

              <Img
                src="assets/img/vector-bintang.svg"
                alt="icon bintang kanan"
                className="fill-[#F2C694]"
              />
            </div>

            <div className="flex flex-col font-rubik text-[40px] text-[#252525] w-full max-w-[800px]">
              <button className="flex flex-row justify-between items-center border border-l-0 border-r-0 border-t-0  border-b-black">
                <text>Vision</text>
                <span className="hover:transition-all hover:rotate-90 duration-300 active:rotate-45">
                  +
                </span>
              </button>
              <button className="flex flex-row justify-between items-center border border-l-0 border-r-0 border-t-0  border-b-black">
                <text>Mission</text>
                <span className="hover:transition-all hover:rotate-90 duration-300 active:rotate-45">
                  +
                </span>
              </button>
              <button className="flex flex-row justify-between items-center border border-l-0 border-r-0 border-t-0  border-b-black">
                <text>Values</text>
                <span className="hover:transition-all hover:rotate-90 duration-300 active:rotate-45">
                  +
                </span>
              </button>
            </div>
          </section>

          <section className="px-[90px] flex flex-col relative mt-[185px] w-full space-y-5">
            <div className="flex flex-row items-center">
              <Img
                src="assets/img/vector-bintang2.svg"
                alt="bintang "
                className=""
              />
              <text className="font-rubik font-medium text-[90px]">
                Foster a Culture of Innovation
              </text>
            </div>

            <div className="flex flex-col font-rubik font-medium text-[45px] space-y-5">
              <div className="flex justify-start items-start">
                <text className="text-left w-1/2">
                  Lorem ipsum dolor sit amet consectetur. Nunc neque ac at eget
                  commodo augue convallis tempus tincidunt. Justo iaculis in
                  aliquam magna.
                </text>
              </div>
              <div className="flex justify-end items-end">
                <text className="text-right w-1/2">
                  Lorem ipsum dolor sit amet consectetur. Nunc neque ac at eget
                  commodo augue convallis tempus tincidunt. Justo iaculis in
                  aliquam magna.
                </text>
              </div>
            </div>
          </section>

            <div className="flex justify-end items-end my-14">
                <Img 
                src="assets/img/vector-bintang2.svg"
                alt="bintang 2"
                className=""
                />
            </div>

            <section className="px-10">
                <Card/>
            </section>
        </section>
        <Footer />
      </section>
    </main>
  );
}

export default Page2;
