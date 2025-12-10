import { GripHorizontal, CircleAlert, Circle } from "lucide-react";
import { useState } from "react";

function Dashboard_warning({ onClick }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div
        className={`fixed justify-center w-full ${
          showInfo ? "h-[12.7rem]" : "h-[4.7rem]"
        } bottom-[54px] rounded-t-[20px] px-[1rem] bg-red-500 z-50`}
      >
        {/* Warning header */}
        <button
          type="button"
          onClick={() => {
            if (onClick) onClick();
            setShowInfo(!showInfo);
          }} //translates map to disaster location, sets show info true
          className={`flex flex-col bg-transparent w-full h-full p-0 focus:outline-0 hover:border-transparent transition-all duration-200 ${
            showInfo ? "mb-[8rem]" : "mb-0"
          }`}
        >
          <div className="flex justify-between items-center">
            <CircleAlert className="w-10 h-10 mt-[1rem]" />
            <div>
              <GripHorizontal className="text-white mx-auto" />
              <h3 className="font-bold text-white text-lg">
                Tornado warning issued
              </h3>
            </div>
            <div className="mt-[1rem] text-white font-medium">
              <p>100 km</p>
              <p>13:28</p>
            </div>
          </div>
        </button>
        {/* {showInfo && <div> X button when clicked setShowInfo(false)} */}
        <div
          className={`absolute bottom-0 left-0 w-full transition-all duration-200 bg-gray-500 overflow-hidden ${
            showInfo ? "h-[8rem]" : "h-0"
          }`}
        >
          <span>hello</span>
        </div>
      </div>
    </>
  );
}

export default Dashboard_warning;
