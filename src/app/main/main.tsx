import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

export default function Sd90Main(){
  const [t] = useTranslation();

  return (
    <main>
      <Typography variant="body2">{t("refactoring")}</Typography>
    </main>
  );
}

