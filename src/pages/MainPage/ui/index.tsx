import React from "react";
import { useTranslation } from "react-i18next";
import { BugButton } from "../../../app/providers/Error-boundary";

const MainPage = () => {
    const { t } = useTranslation();
    return <div>{t("Main Page")}<BugButton /></div>;
};
export default MainPage;
