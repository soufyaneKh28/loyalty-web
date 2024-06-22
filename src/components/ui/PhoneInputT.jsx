"use client";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneInputT = () => {
  const [phone, setPhone] = useState("");

  return (
    <div>
      <PhoneInput
        defaultCountry="tr"
        value={phone}
        onChange={(phone) => setPhone(phone)}
        className=""
      />
    </div>
  );
};

export { PhoneInputT };