import React from "react";
import Header from "../header";
import Footer from "../footer";
import Img from "../../elements/img";
import Card from "./card";

function Page3() {
  return (
    <main className="w-full h-full relative">
      <section className="flex flex-col px-[50px]">
        <div className="relative">
          <Header />
          <div className="absolute right-0 top-0 z-[-1] h-full">
            <Img src="assets/img/img-1.svg" alt="img main" className="" />
          </div>
        </div>
        <section className="MAIN flex flex-col relative">
          <section className="flex flex-row w-1/2 -mt-5">
            <div className="flex  pt-10">
              <text className="font-rubik font-medium text-[20px] text-[#252525] text-left">
                To enhance the company's competitiveness in the modern era and
                the current competition, an organization/company needs to
                understand how IT can be strategically developed.
              </text>
            </div>

            <div className="flex flex-col">
              <text className="font-rubik font-semibold text-[200px] leading-[200px] w-1/3">
                Our Servi ces<span className="text-[#F7941D]">.</span>
              </text>
              <Img
                src="assets/img/vector-arrow-kananbawah.svg"
                alt="vector kanan bawah"
                className="w-[100px] h-[100px] translate-x-[350px] -translate-y-[120px]"
              />
            </div>
          </section>

          <section className="flex flex-col mt-16">
            <div className="flex flex-row justify-between">
              <button className="flex flex-row border border-black rounded-sm items-center justify-center space-x-5 py-2 px-3 w-[237px]">
                <Img
                  src="assets/img/icon-1-zimbra.svg"
                  alt="zimbra icon"
                  className="w-[31px] h-[31px] "
                />
                <text className="font-rubik font-medium text-[30px] text-[#252525] line-clamp-1">
                  Zimbra
                </text>
              </button>
              <button className="flex flex-row border border-black rounded-sm items-center justify-center space-x-5 py-2 px-3 w-[237px]">
                <Img
                  src="assets/img/icon-2-zap.svg"
                  alt="zap icon"
                  className="w-[31px] h-[31px] "
                />
                <text className="font-rubik font-medium text-[30px] text-[#252525] line-clamp-1">
                  Data Center
                </text>
              </button>
              <button className="flex flex-row border border-black rounded-sm items-center justify-center py-2 px-3 w-[237px]">
                <Img
                  src="assets/img/icon-3-barchart.svg"
                  alt="barchart icon"
                  className="w-[31px] h-[31px] "
                />
                <text className="font-rubik font-medium text-[30px] text-[#252525] line-clamp-1">
                  Internet of Building
                </text>
              </button>
              <button className="flex flex-row border border-black rounded-sm items-center justify-center py-2 px-3 w-[237px]">
                <Img
                  src="assets/img/icon-4-success.svg"
                  alt="success icon"
                  className="w-[31px] h-[31px] "
                />
                <text className="font-rubik font-medium text-[30px] text-[#252525] line-clamp-1">
                  Dedicated Internet
                </text>
              </button>
            </div>
          </section>

          <section className="flex flex-col border border-black rounded-sm mt-10">
            <div className="bg-cover bg-center">
              <Img
                src="assets/img/pic.svg"
                alt="pic"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col px-5">
              <text className="font-rubik font-medium text-[#252525] text-[35px]">
                Zimbra Full Administrative Management
              </text>
              <text className="font-rubik font-medium text-[#252525] text-[20px]">
                Lorem ipsum dolor sit amet consectetur. Odio neque tellus massa
                faucibus. Convallis risus etiam habitant a fermentum at. In
                scelerisque sit commodo pulvinar ultrices ultricies scelerisque
                magna. Praesent nisl arcu elit vulputate quis at.
              </text>
              <div className="flex justify-end items-end px-5 pb-2">
                <button className="border border-[#0E467B] rounded-xl text-[#0E467B] text-[20px] font-roboto font-medium justify-end max-w-[160px] items-end p-2">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          <section className="flex flex-row justify-between items-center mt-[100px]">
            <div className="items-center ">
              <text className="font-rubik font-medium text-[100px] text-[#252525] leading-[100px]">
                One Stop
                <br />
                <span className="text-[#F7941D]">IT Solution</span>
              </text>
            </div>

            <div className="w-1/2 items-center">
                <text className="font-rubik font-medium text-[#252525] text-[25px]">
                To enhance the company's competitiveness in the modern era and the current competition, an organization/company needs to understand how IT can be strategically developed.
                </text>
            </div>
          </section>
          
        <section className="mt-24">
            <Card />
        </section>

        </section>
        <Footer />
      </section>
    </main>
  );
}

export default Page3;
