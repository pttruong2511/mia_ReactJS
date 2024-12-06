"use client";

import { useState, createContext } from "react";

const SearchContext = createContext({
  keyword: "",
  setKeyword: (keyword: string) => {},
});

const SearchProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [keyword, setKeyword] = useState("");
  return (
    <SearchContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
