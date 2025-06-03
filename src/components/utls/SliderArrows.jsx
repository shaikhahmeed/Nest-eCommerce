import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function NextArrow(props) {
    const {customStyle,onClick} = props;
    return (
      <div className={`h-10 w-10 ${customStyle} rounded-full bg-[#F2F3F4] text-[#7E7E7E] flex justify-center items-center cursor-pointer`} onClick={onClick}>
         <FaArrowRightLong/>
      </div>
    );
  }
  
  function PrevArrow(props) {
    const {customStyle,onClick } = props;
    return (
        <div className={`h-10 w-10 ${customStyle} rounded-full bg-[#F2F3F4] text-[#7E7E7E] flex justify-center items-center cursor-pointer`} onClick={onClick}>
            <FaArrowLeftLong/>
        </div>
    );
  }

  export  {NextArrow,PrevArrow}