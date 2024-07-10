"use client";
import GlobaleWebConfig, { languages, WEBCONFIG } from "@/config";
import React from "react";

interface ContentType {
  websiteContent: WEBCONFIG;
  setWebsiteContent:
    | React.Dispatch<React.SetStateAction<WEBCONFIG>>
    | undefined;
  currentLanguage: languages;
}

const defaultLanguage: languages = "en";

export const Content = React.createContext<ContentType>({
  websiteContent: GlobaleWebConfig.translations[defaultLanguage],
  setWebsiteContent: undefined,
  currentLanguage: defaultLanguage,
});

const ContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [websiteContent, setWebsiteContent] = React.useState<WEBCONFIG>(
    GlobaleWebConfig.translations[defaultLanguage]
  );

  return (
    <Content.Provider
      value={{
        websiteContent,
        setWebsiteContent,
        currentLanguage: defaultLanguage,
      }}
    >
      {children}
    </Content.Provider>
  );
};

export default ContentProvider;
