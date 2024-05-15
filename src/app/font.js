JavaScript;
import { google } from "@next/font/google";

const poppins = google({
  family: "Poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = google({
  family: "Roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const poppinsClass = poppins.className;
export const robotoClass = roboto.className;
