import { useContext, useEffect, useState } from "react";
import { mainContext } from "../../context/MainProvider";
import { useParams } from "react-router-dom";
import CocktailCard from "../../components/cocktailCard/CocktailCard";
import axios from "axios";

interface ICocktail {
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
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-primary p-5 text-white md:p-10">
            <div className="flex w-full items-center justify-between pb-4">
              <h3 className="font-playfair text-2xl font-bold md:text-3xl">
                {selectedDrink.strDrink}
              </h3>
              <button
                className="cursor-pointer text-3xl"
                onClick={() => handleCloseModal()}
              >
                x
              </button>
            </div>
            <article className="flex flex-col items-center gap-4 p-5 md:flex-row md:items-start">
              <div>
                <img
                  className="h-60 w-60 object-cover md:h-80 md:w-80 lg:h-100 lg:w-100"
                  src={selectedDrink.strDrinkThumb}
                  alt={selectedDrink.strDrinkThumb}
                />
              </div>
              <div className="flex flex-col gap-4 py-3">
                <div className="ingredients">
                  <h4 className="font-montserrat text-lg font-bold">
                    Ingredients
                  </h4>
                  <ul>
                    {drinkDetails && (
                      <>
                        {(() => {
                          let ingredients = [];
                          for (let i = 1; i <= 15; i++) {
                            const ingredient =
                              drinkDetails[
                                `strIngredient${i}` as keyof ICocktail
                              ];
                            const measure =
                              drinkDetails[`strMeasure${i}` as keyof ICocktail];
                            if (ingredient) {
                              ingredients.push(
                                <li key={i}>
                                  {measure ? `${measure} ` : ""}
                                  {ingredient}
                                </li>,
                              );
                            }
                          }
                          return ingredients;
                        })()}
                      </>
                    )}
                  </ul>
                </div>
                <div className="instructions">
                  <h4 className="font-montserrat text-lg font-bold">
                    Instructions
                  </h4>
                  <p>{drinkDetails?.strInstructions}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
