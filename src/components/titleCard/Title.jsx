import React from "react";
import cl from "classnames";
import { useTheme } from "../../services/providers/ThemeProvider";
const Title = ({ name }) => {
  const { theme } = useTheme();
  return (
    <h3 className={cl("py-3 px-2", theme ? "text-dark" : "text-light")}>
      {name}
    </h3>
  );
};

export default Title;
