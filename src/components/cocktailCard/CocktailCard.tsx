interface ICocktailCardProps {
  name: string;
  imgUrl: string;
  index: number;
  onCardClick: () => void;
}

const cardColors = [
  "bg-secondary",
  "bg-violet",
  "bg-lightorange",
  "bg-beige",
  "bg-lightblue",
  "bg-lightgreen",
];

const CocktailCard = ({
  name,
  imgUrl,
  index,
  onCardClick,
}: ICocktailCardProps) => {
  const bgColor = cardColors[index % cardColors.length];

  return (
    <li
      className={`flex h-60 w-full cursor-pointer items-center justify-between text-white ${bgColor} px-10`}
      onClick={onCardClick}
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
