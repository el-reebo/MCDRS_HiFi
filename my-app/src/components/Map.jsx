import map from "../assets/images/GTAV-HD-MAP-roadmap-croppedv2.webp";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Dashboard_warning from "./Dashboard_warning";
import { Send } from "lucide-react";

function Map() {
  return (
    <>
      <div className="w-full h-full">
        <TransformWrapper
          defaultScale={1}
          className="w-full h-full bottom-[10px]"
        >
          {/* extracting the setTransform method from transform wrapper */}
          {({ setTransform, ...rest }) => (
            <>
              <div className="fixed left-[37.5%] top-[5rem] flex z-50">
                <button className="flex mx-auto bg-yellow-400 max-w-xs rounded-full font-bold text-xl drop-shadow-lg">
                  {" "}
                  <Send className="h-6 w-6 text-black mr-[10px]" />
                  SEND ALERT
                </button>
              </div>
              <Dashboard_warning
                onClick={() => setTransform(-373, -756, 1.89)}
                // 1.89, -403, -766
              />
              {/*scale, X(px), Y(px)*/}
              <TransformComponent className="w-full h-full z-0">
                <div className="w-full h-full">
                  <img
                    src={map}
                    alt="map"
                    className="w-full h-[86.5vh] object-cover"
                  />
                </div>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
    </>
  );
}

export default Map;
