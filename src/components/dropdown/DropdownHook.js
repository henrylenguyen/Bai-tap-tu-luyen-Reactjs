import React from 'react';
import useClickOutSide from '../../hooks/useClickOutSide';

const DropdownHook = ({control}) => {
  const {show,setShow,nodeRef} = useClickOutSide();
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  return (
    <div className="relative" ref={nodeRef}>
      <div className="p-5 rounded-xl border border-gray-200 bg-white flex items-center justify-between cursor-pointer text-black" onClick={()=>{
        setShow(!show)
      }}>
        <span>Select your job</span>
        <i className="fas fa-angle-down"></i>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-xl bg-white text-black ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        <div className="p-5">Teacher</div>
        <div className="p-5">Developer</div>
        <div className="p-5">Doctor</div>
      </div>
    </div>
  );
};

export default DropdownHook;
// border border-t border-t-transparent bg-black right-5 top-[50%] -translate-y-[50%]