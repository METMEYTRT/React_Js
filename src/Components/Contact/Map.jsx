import React from "react";

const Map = () => {
  return (
    <div>
      {/* Map */}
      <div className="map">
        <div
          className="size-303"
          id="google_map"
          data-map-x="40.691446"
          data-map-y="-73.886787"
          data-pin="images/icons/pin.png"
          data-scrollwhell={0}
          data-draggable={1}
          data-zoom={11}
        />
      </div>
    </div>
  );
};

export default Map;
