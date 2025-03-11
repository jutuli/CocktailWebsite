import { Link } from "react-router-dom";

interface iCocktailCard {
  name: string;
  imgUrl: string;
  id: string;
  index: number;
}

const cardColors = [
  "bg-secondary",
  "bg-violet",
  "bg-lightorange",
  "bg-beige",
  "bg-lightblue",
  "bg-lightgreen",
];

const CocktailCard = ({ name, imgUrl, id, index }: iCocktailCard) => {
  const bgColor = cardColors[index % cardColors.length];

  return (
    <li
      className={`flex h-60 w-full cursor-pointer items-center justify-between text-white ${bgColor} px-10`}
    >
      <div
        className={`flex w-full justify-between ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      >
        <div className="flex shrink-0 justify-center">
          <img src={imgUrl} alt={name} className="h-40 w-40 object-cover" />
        </div>
        <div
          className={`flex flex-1 items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
        >
          <h2 className="font-montserrat -rotate-90 transform px-10 text-center text-xl font-semibold md:rotate-0">
            {name}
          </h2>
        </div>
      </div>
    </li>
  );
};

export default CocktailCard;
