import { Link } from "react-router-dom";
import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";

interface iCategoryCard {
  name: string;
  color: string;
}

const CategoryCard = ({ name, color }: iCategoryCard) => {
  const context = useContext(mainContext);
  if (!context) {
    throw new Error("CategoryCard must be used within a MainProvider");
  }
  const { setLink } = context;

  return (
    <li>
      <Link
        onClick={() => setLink(name)}
        to={`/${name}`}
        className={`h-60 text-white ${color} flex cursor-pointer flex-col items-start justify-center px-10`}
      >
        <h2 className="font-playfair text-4xl font-semibold">{name}</h2>
        <p>Ipsum dolor sit amet</p>
      </Link>
    </li>
  );
};

export default CategoryCard;
