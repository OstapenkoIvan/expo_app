import { useState } from "react";

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [toggleText, setToggleText] = useState("Показать");

  const handlePasswordVisibility = () => {
    if (toggleText === "Показать") {
      setToggleText("Скрыть");
      setPasswordVisibility(!passwordVisibility);
    } else if (toggleText === "Скрыть") {
      setToggleText("Показать");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    toggleText,
    handlePasswordVisibility,
  };
};
