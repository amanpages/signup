import SignUp from "../components/SignUp";
import"../App.css"
import polygon3 from "../Assets/polygon-3.png";
import polygon4 from "../Assets/polygon-6.png";
import polygon5 from "../Assets/polygon-7.png";
import polygon6 from "../Assets/polygon-11.png";
import polygon7 from "../Assets/polygon-10.png";


const Desktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start pt-0 pb-[124px] pr-0 pl-[354px] box-border gap-[11px] leading-[normal] tracking-[normal] mq1050:flex-wrap mq1050:pl-5 mq1050:pt-5 mq1050:pr-5 mq1050:box-border">
      <SignUp />
      <img
        className="h-[552.5px] w-[550.7px] absolute !m-[0] bottom-[-228.5px] left-[-190px] object-contain"
        loading="lazy"
        alt=""
        src={polygon3}
      />
      <img
        className="h-[264.7px] w-[283.7px] absolute !m-[0] right-[-102.7px] bottom-[225.3px] object-contain"
        loading="lazy"
        alt=""
        src={polygon4}
      />
      <img
        className="h-[552.5px] w-[550.7px] absolute !m-[0] right-[146.3px] bottom-[-327.5px] object-contain"
        loading="lazy"
        alt=""
        src={polygon5}
      />
      <img
        className="h-[141px] w-[139.5px] absolute !m-[0] top-[423px] right-[198.5px] object-contain"
        loading="lazy"
        alt=""
        src={polygon6}
      />
      <div className="h-[324.5px] w-[358px] relative min-w-[358px] max-w-full mq750:min-w-full mq1125:flex-1">
        <img
          className="absolute top-[-210px] left-[90px] h-[400px] object-contain rotate-12"
          alt=""
          src={polygon7}
        />
      </div>
    </div>
  );
};

export default Desktop;
