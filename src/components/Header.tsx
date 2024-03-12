import { FC } from "react";
import { Typography } from "../shared/ui/Typography";
import { COLORS_TEXT } from "../shared/ui/colors (1)";

export const Header: FC = function Header() {
  return (
    <header className="bg-blue-400 py-3">
      <Typography
        color={COLORS_TEXT.alternative}
        size={20}
        align="center"
        weight={700}
      >
        {"Список товаров в корзине"}
      </Typography>
    </header>
  );
};
