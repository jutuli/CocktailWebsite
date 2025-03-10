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
      className={`flex h-60 w-full cursor-pointer items-center justify-between text-white ${bgColor} p-4`}
    >
      <Link to={`/cocktail/${id}`} className="block">
        <div className="flex gap-5 px-10 md:gap-20">
          <div className="flex flex-1/3 justify-center">
            <img
              src={imgUrl}
              alt={name}
              className="h-40 w-40 flex-shrink-0 object-cover"
            />
          </div>
          <h2 className="font-montserrat flex w-40 rotate-270 items-center justify-center text-center text-xl font-semibold">
            {name}
          </h2>
        </div>
      </Link>
    </li>
  );
};

export default CocktailCard;
