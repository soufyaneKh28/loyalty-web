import MenubarAr from "@/components/MenubarAr";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],

  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function arLayout({ children }) {
  return (
    <html lang="ar">
      <body dir="rtl" className={` rtl ${cairo.className} `}>
        <MenubarAr />
        {children}
      </body>
    </html>
  );
}
