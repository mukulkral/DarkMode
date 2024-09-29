import React, { useRef, useState } from "react";

function App() {
  const [on, setOn] = useState(false);

  const handleON = () => {
    setOn(!on);
    console.log(on);
  };

  return (
    <>
      <div
        className={`h-screen flex flex-col gap-10  justify-center items-center duration-500 ${
          on ? "bg-black text-white" : "bg-white"
        }`}
      >
        <p className="text-[100px]">{on ? "Dark Mode" : "Light Mode"}</p>
        <div
          onClick={() => handleON()}
          className={`cursor-pointer bg-white w-[300px] rounded-tr-[150px] rounded-br-[150px] rounded-tl-[150px] rounded-bl-[150px] p-2 shadow-inner shadow-gray-700 border-4 duration-500`}
        >
          <div
            className={`flex justify-center items-center text-[50px] text-white h-[100px] w-[100px] rounded-full shadow-inner cursor-pointer duration-200  ${
              on ? "bg-black translate-x-[175px] " : "text-orange-400 bg-black"
            }`}
            onClick={() => handleON()}
          >
            {on ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
