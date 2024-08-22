import React from "react";
import { useNavigate } from 'react-router-dom';

function Navigate ({goto, className, isi}) {
    const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(goto);
  };
    return (
        <button 
        onClick={handleButtonClick}
        className={className}
        >
            {isi}
        </button>
    )
}

export default Navigate;