import map from "../assets/images/GTAV-HD-MAP-roadmap.jpg";

function Map() {
  return (
    <>
      <div className="w-full h-full">
        <img src={map} alt="map" className="object-contain" />
      </div>
    </>
  );
}

export default Map;
