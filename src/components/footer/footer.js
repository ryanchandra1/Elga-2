import React from "react";
import Img from "../../elements/img";

function Footer() {
  return (
    <footer className="h-full w-full relative my-[100px]">
      <div className="flex flex-col justify-center items-center">
        <div>
          <ul className="flex flex-row space-x-[51px] font-rubik font-medium text-black text-[25px]">
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Services</button>
            </li>
            <li>
              <button>Solutions</button>
            </li>
            <li>
              <button>Careers</button>
            </li>
            <li>
              <button>Support</button>
            </li>
            <li>
              <button>Privacy Policy</button>
            </li>
            <li>
              <button>Terms of Use</button>
            </li>
          </ul>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Img
                src="assets/img/icon-facebook.svg"
                alt="icon facebook"
                className=""
              />
              <Img
                src="assets/img/icon-instagram.svg"
                alt="icon instagram"
                className=""
              />
              <Img
                src="assets/img/icon-linkedin.svg"
                alt="icon linkedin"
                className=""
              />
            </div>
            <text className="font-rubik text-[18px]">
              &copy; 2024 Elga Networks. All Rights Reserved
            </text>
          </div>
          <div className="text-right font-rubik">
            <text className="font-semibold">Medco Building</text>
            <br />
            <text>
              Medco Building III 3rd Floor <br />
              Jl. Ampera Raya No. 18-20 12560 Jakarta - Indonesia
              <br />
              +62 21 782 1962 | info[at]elga.net.id
            </text>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
