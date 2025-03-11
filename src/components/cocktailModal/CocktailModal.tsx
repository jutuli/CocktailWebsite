import { ICocktail } from "../../pages/category/Category";

interface CocktailModalProps {
  selectedDrink: ICocktail;
  drinkDetails: ICocktail | null;
  onClose: () => void;
}

const CocktailModal = ({
  selectedDrink,
  drinkDetails,
  onClose,
}: CocktailModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-primary border-secondary border p-5 text-white drop-shadow-lg md:p-10">
        <div className="flex w-full items-center justify-between pb-4">
          <h3 className="font-playfair text-2xl font-bold md:text-3xl">
            {selectedDrink.strDrink}
          </h3>
          <button className="cursor-pointer text-3xl" onClick={onClose}>
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
              <h4 className="font-montserrat text-lg font-bold">Ingredients</h4>
              <ul>
                {drinkDetails && (
                  <>
                    {(() => {
                      let ingredients = [];
                      for (let i = 1; i <= 15; i++) {
                        const ingredient =
                          drinkDetails[`strIngredient${i}` as keyof ICocktail];
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
  );
};

export default CocktailModal;
