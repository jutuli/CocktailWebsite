import axios from "axios";
import { createContext, useState, useEffect } from "react";

interface MainContextType {
  setLink: (name: string) => void;
  data: any[];
}

export const mainContext = createContext<MainContextType | undefined>(
  undefined,
);

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [link, setLink] = useState<string>("");
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      if (!link) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${link}`;
      try {
        const response = await axios.get(url);
        if (response.data.drinks) {
          setData(response.data.drinks);
        }
      } catch (error) {
        console.log("Fehler beim Fetchen: ", error);
      }
    };
    getData();
  }, [link]);

  return (
    <mainContext.Provider value={{ data, setLink }}>
      {children}
    </mainContext.Provider>
  );
};

export default MainProvider;
