import { useContext, useEffect, useState } from "react";
import { mainContext } from "../../context/MainProvider";
import { useParams } from "react-router-dom";
import CocktailCard from "../../components/cocktailCard/CocktailCard";
import axios from "axios";
import CocktailModal from "../../components/cocktailModal/CocktailModal";

export interface ICocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
}

const Category = () => {
  const { category } = useParams();
  const context = useContext(mainContext);
  const [selectedDrink, setSelectedDrink] = useState<ICocktail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [drinkDetails, setDrinkDetails] = useState<ICocktail | null>(null);

  if (!context) {
    throw new Error("Category must be used within a MainProvider");
  }

  const { data, setLink } = context;

  useEffect(() => {
    if (category) {
      setLink(category);
    }
  }, [category, setLink]);

  const handleOpenModal = (drink: ICocktail) => {
    setSelectedDrink(drink);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedDrink(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (selectedDrink) {
      const getDrinkDetails = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${selectedDrink.idDrink}`;
        try {
          const response = await axios.get(url);
          const fetchedDrink = response.data.drinks?.[0];
          if (fetchedDrink) {
            setDrinkDetails(fetchedDrink);
          }
        } catch (error) {
          console.error("Error while fetching drink details:", error);
        }
      };
      getDrinkDetails();
    }
  }, [selectedDrink]);

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((drink, index) => (
          <CocktailCard
            index={index}
            key={drink.idDrink}
            name={drink.strDrink}
            imgUrl={drink.strDrinkThumb}
            onCardClick={() => handleOpenModal(drink)}
          />
        ))}
      </ul>
      {isModalOpen && selectedDrink && (
        <CocktailModal
          selectedDrink={selectedDrink}
          onClose={handleCloseModal}
          drinkDetails={drinkDetails}
        />
      )}
    </>
  );
};

export default Category;
