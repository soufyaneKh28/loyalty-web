import Menubar from "@/components/Menubar";

import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
export default function arLayout({ children }) {
  return (
    <html lang="en" className={` ${poppins.className} `}>
      <body dir="ltr">
        <Menubar />
        {children}
      </body>
    </html>
  );
}
