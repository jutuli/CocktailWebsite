import { useContext, useEffect } from "react";
import { mainContext } from "../../context/MainProvider";
import { useParams } from "react-router-dom";
import CocktailCard from "../../components/cocktailCard/CocktailCard";

const Category = () => {
  const { category } = useParams();
  const context = useContext(mainContext);

  if (!context) {
    throw new Error("Category must be used within a MainProvider");
  }

  const { data, setLink } = context;

  useEffect(() => {
    if (category) {
      setLink(category);
    }
  }, [category, setLink]);

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((drink, index) => (
          <CocktailCard
            index={index}
            key={drink.idDrink}
            id={drink.idDrink}
            name={drink.strDrink}
            imgUrl={drink.strDrinkThumb}
          />
        ))}
      </ul>
    </>
  );
};

export default Category;
