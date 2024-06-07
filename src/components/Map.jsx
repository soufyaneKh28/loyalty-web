import dynamic from "next/dynamic";

const Map = dynamic(() => import("./ContactMap"), {
  ssr: false,
  loading: () => <p>Loading...</p>, // Optional: display a loading message
});

export default Map;
