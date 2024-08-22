import React from "react";

function InteractiveMap() {
  return (
    <div className="w-full h-full rounded-xl">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8233420348283!2d106.81539967622986!3d-6.286937561539439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f21d7da59341%3A0x69963cdeeb043fec!2sPT.%20Elga%20Yasa%20Media!5e0!3m2!1sid!2sid!4v1723619241583!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

     
    </div>
  );
}

export default InteractiveMap;
