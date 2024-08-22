import React from "react";
import Img from "../../elements/img";
import Navigate from "../../elements/buttonNavigate";

function Header() {
  return (
    <header className="w-full h-full">
      <section className="bg-[#EBEBEC] my-[50px] px-[20px] py-[10px] rounded-full">
        <section className="flex flex-row justify-between items-center ">
          <div className="LOGO items-center">
            <Img src="assets/img/logo-elga.svg" alt="logo elga" className="" />
          </div>
          <div className="">
            <ul className="flex flex-row space-x-[50px] font-rubik font-medium text-black text-[20px]">
              <li>
                <Navigate
                  goto="/"
                  isi="Home"
                  className="hover:-translate-y-2 transition-all duration-300"
                />
              </li>
              <li>
                <Navigate
                  goto="/About"
                  isi="About"
                  className="hover:-translate-y-2 transition-all duration-300"
                />
              </li>
              <li>
                <Navigate
                  goto="/Services"
                  isi="Services"
                  className="hover:-translate-y-2 transition-all duration-300"
                />
              </li>
              <li>
                <button>Solutions</button>
              </li>
              <li>
                <Navigate
                  goto="/Careers"
                  isi="Careers"
                  className="hover:-translate-y-2 transition-all duration-300"
                />
              </li>
              <li>
                <Navigate
                  goto="/Support"
                  isi="Support"
                  className="hover:-translate-y-2 transition-all duration-300"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-row justify-center items-center space-x-[10px]">
            <Navigate
              isi="contact us"
              goto="/Additional1"
              className="font-rubik text-[17px] text-white uppercase bg-[#F7941D] rounded-full w-[157px] h-[45px] hover:bg-[#d88e33]"
            />
          </div>
        </section>
      </section>
    </header>
  );
}

export default Header;
