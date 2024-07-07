import { useTranslation } from "react-i18next";

export const LinksData = () => {
  const { t } = useTranslation();

  return [
     {
      title: t("links.home"),
      link: "/#upcomingmatches",
    },
    {
      title: t("links.design"),
      link: "/#upcomingmatches",
    },
    {
      title: t("links.price"),
      link: "/#upcomingmatches",
    },
    // {
    //   title: t("links.login"),
    //   link: "/#upcomingmatches",
    // },
    // {
    //   title: t("links.ffwc2024"),
    //   link: "/#ffwc2024",
    // },
    
  ];
};
