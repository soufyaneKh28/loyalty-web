// "use client";
import data from "@/app/content-en";
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export default function ContactMap() {
  return (
    // <MapContainer
    //   className="map"
    //   center={[51.505, -0.09]}
    //   zoom={13}
    //   style={{ width: "100%", zIndex: 1 }}
    // >
    //   <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //   />
    //   <Marker position={[51.505, -0.09]}>
    //     <Popup>
    //       A pretty CSS3 popup. <br /> Easily customizable.
    //     </Popup>
    //   </Marker>
    // </MapContainer>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.62825408391!2d2.32422850387462!3d48.87118233653419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e335d15dec9%3A0xabf0e9b63d5fe930!2sParantaga!5e0!3m2!1sen!2str!4v1721551968545!5m2!1sen!2str"
      width="100%"
      height="600"
      style={{ border: 0 }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
