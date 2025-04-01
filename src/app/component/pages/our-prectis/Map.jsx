import React from "react";

function Map() {
  return (
    <div className="w-full">
      <div class="embed-map-responsive">
        <div class="embed-map-container">
          <iframe
            class="embed-map-frame"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=782&height=570&hl=en&q=lazy%20binary%20sirsa&t=&z=20&ie=UTF8&iwloc=B&output=embed"
          ></iframe>
          <a
            href="https://sprunkiretake.net"
            style="font-size:2px!important;color:gray!important;position:absolute;bottom:0;left:0;z-index:1;max-height:1px;overflow:hidden"
          >
            sprunki retake
          </a>
        </div>
      </div>
    </div>
  );
}

export default Map;
