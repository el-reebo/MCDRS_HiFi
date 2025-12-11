import map from "../assets/images/GTAV-HD-MAP-roadmap-admin.webp";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Dashboard_warning from "./Dashboard_warning";
import { Send, AlertCircle } from "lucide-react";
import warningicon from "../assets/images/warning_icon.webp";

function AdminMap() {
  return (
    <>
      <div className="w-full ">
        <TransformWrapper defaultScale={1} className="w-full">
          {/* extracting the setTransform method from transform wrapper */}
          {({ setTransform, ...rest }) => (
            <>
              <TransformComponent className="w-full z-0">
                <div className="relative w-full">
                  <img src={map} alt="map" className="w-full object-cover" />
                </div>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
    </>
  );
}

export default AdminMap;
