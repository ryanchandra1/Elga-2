import React from "react";
import Header from "../header";
import Footer from "../footer";
import Img from "../../elements/img";
import Maps from "../googleMaps";

function Page5() {
  return (
    <main className="w-full h-full relative">
      <section className="flex flex-col px-[50px]">
        <div className="relative">
          <Header />
          <div className="absolute right-0 top-0 z-[-1] h-full">
            <Img src="assets/img/img-1.svg" alt="img main" className="" />
          </div>
        </div>

        <section className="MAIN flex flex-col px-[50px]">
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

          <section className="flex justify-end items-end ">
            <section className="flex flex-col justify-end items-end font-rubik mt-[100px] space-y-14 w-1/2">
              <div className="flex justify-end items-end">
                <text className="font-medium text-[90px] text-right leading-[100px]">
                  Frequently Asked{" "}
                  <span className="text-[#F7941D]">Question</span>
                </text>
              </div>

              <div className="flex flex-col font-rubik text-[40px] text-[#252525] w-full max-w-[800px]">
                <button className="flex flex-row justify-between items-center border border-l-0 border-r-0 border-t-0  border-b-black">
                  <text>Lorem ipsum</text>
                  <span className="hover:transition-all hover:rotate-90 duration-300 active:rotate-45">
                    +
                  </span>
                </button>
                <button className="flex flex-row justify-between items-center border border-l-0 border-r-0 border-t-0  border-b-black">
                  <text>Lorem ipsum</text>
                  <span className="hover:transition-all hover:rotate-90 duration-300 active:rotate-45">
                    +
                  </span>
                </button>
                <button className="flex flex-row justify-between items-center border border-l-0 border-r-0 border-t-0  border-b-black">
                  <text>Lorem ipsum</text>
                  <span className="hover:transition-all hover:rotate-90 duration-300 active:rotate-45">
                    +
                  </span>
                </button>
              </div>
            </section>
          </section>

          <section className="flex justify-start items-start mt-[100px] w-1/2">
            <div className="font-rubik font-medium flex flex-col">
              <text className="text-[40px] text-[#252525]">
                Don’t hesitate to reach us trough our Contacts and Customer
                Services
              </text>
              <button className="flex flex-row space-x-2 items-center w-[60%] hover:drop-shadow-xl">
                <text className="text-[50px] text-[#000000] font-semibold">
                  CONTACT US
                </text>
                <Img
                  src="assets/img/vector-arrow-atas.svg"
                  alt="arrow kanan"
                  className="text-[#F7941D] w-[30px] h-[30px]"
                />
              </button>
            </div>
          </section>

          <section className="mt-[100px] flex flex-row justify-between">
           
              <div className="flex justify-start items-center w-[40%]">
                <text className="font-rubik font-medium text-[37px]">
                  <span className="text-[#F7941D]"> Medco Building</span>
                  <br />
                  Medco Building III, 3rd Floor Jl. Ampera Raya No. 18-20 12560,
                  Jakarta, Indonesia
                  <br />
                  <span className="text-[#F7941D]"> info[at]elga.net.id</span>
                </text>
              </div>
           
            <div className="flex flex-col ">
              <div className="flex flex-row space-x-4 items-center justify-center">
                <Img src="assets/img/icon-page5-pin.svg  " />
                <text className="font-rubik font-medium text-[75px] text-[#252525] items-center justify-center">
                  Our <span className="text-[#F7941D]">Office</span>
                </text>
              </div>

              <div className="border-dashed border-4 border-black border-spacing-16 w-[600px] h-[600px] rounded-xl p-5">
                <Maps />
              </div>
            </div>
          </section>
        </section>

        <Footer />
      </section>
    </main>
  );
}

export default Page5;
