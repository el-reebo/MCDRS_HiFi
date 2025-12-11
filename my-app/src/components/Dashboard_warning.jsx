import { GripHorizontal, CircleAlert, Circle, Info, X } from "lucide-react";
import { useState, useEffect } from "react";
import tornadoSign from "../assets/images/tornadoSign.png";

function Dashboard_warning({ onClick, triggerTab }) {
  const [showInfo, setShowInfo] = useState(false);
  const [tabTriggered, setTabTriggered] = useState(triggerTab);
  const tabH = 17;

  useEffect(() => {
    if (tabTriggered) {
      onClick();
      setShowInfo(true);
      setTabTriggered(false);
    }
  }, [triggerTab]);

  return (
    <>
      <div
        className={`fixed justify-center w-full transition-all duration-200 ${
          showInfo ? `h-[${4.7 + tabH}rem]` : "h-[4.7rem]"
        } bottom-[56px] rounded-t-[20px] px-[1rem] bg-red-500 z-50`}
      >
        {/* Warning header */}
        <button
          type="button"
          onClick={() => {
            if (onClick) !showInfo && onClick(); //translate map to disaster location (onClick) only if show info NOT toggled
            setShowInfo(!showInfo); //set showInfo true
          }}
          className={`flex flex-col bg-transparent w-full h-full p-0 focus:outline-0 hover:border-transparent transition-all duration-200 ${
            showInfo ? `mb-[${tabH}rem]` : "mb-0"
          }`}
        >
          <div className="flex justify-between items-center">
            {/* <CircleAlert className="w-10 h-10 mt-[1rem]" /> */}
            <img src={tornadoSign} alt="Tornado" className="w-10 h-10" />
            <div>
              <GripHorizontal className="text-white mx-auto" />
              <h3 className="font-bold text-white text-lg">
                Tornado warning issued
              </h3>
            </div>
            <div className="mt-[1rem] text-white font-medium">
              <p>10 km</p>
              <p>13:28</p>
            </div>
          </div>
        </button>
        {/* {showInfo && <div> X button when clicked setShowInfo(false)} */}
        <div
          className={`absolute bottom-0 left-0 w-full px-10 bg-white overflow-hidden transition-all duration-200 ${
            showInfo ? `h-[17rem] py-3` : "h-0 py-0"
          }`}
        >
          <>
            <button
              type="button"
              className="absolute top-2 right-2 p-0 bg-transparent focus:outline-0 hover:border-transparent"
              onClick={() => {
                setShowInfo(false);
              }}
            >
              <X className="" />
            </button>
            <h2 className="font-bold text-2xl">EF2 Tornado - ACT NOW</h2>
            <span>You are 10km away from affected areas</span>
            <div className="mt-3 p-3 bg-gray-200 rounded-lg border-2 border-blue-400">
              <h2 className="flex justify-center pb-2 font-semibold text-blue-600 text-lg">
                <Info className="h-4 w-4 my-auto mr-[2px]" />
                Safety Information
              </h2>
              <p>
                Take cover underneath any secure bunkers or basements in your
                area
              </p>
              <p className="font-bold">Nearest Shelters:</p>
              <p>Leicester Metro Station (0.1km)</p>
            </div>
          </>
        </div>
      </div>
    </>
  );
}

export default Dashboard_warning;
