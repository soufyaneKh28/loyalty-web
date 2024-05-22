"use client";
import es from "react-phone-input-2/lang/es.json";
import { Target } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const PhoneInputT = () => {
  const [value, setValue] = useState("tr");
  return (
    <PhoneInput
      country={ar}
      localization={es}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default PhoneInput;
