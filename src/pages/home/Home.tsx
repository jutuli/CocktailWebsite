import CategoryCard from "../../components/categoryCard/CategoryCard";

const categoryList = [
  { id: 1, name: "Gin", color: "bg-secondary" },
  { id: 2, name: "Vodka", color: "bg-violet" },
  { id: 3, name: "Rum", color: "bg-lightorange" },
  { id: 4, name: "Scotch", color: "bg-beige" },
  { id: 5, name: "Alkoholfrei", color: "bg-lightblue" },
  { id: 6, name: "Zufall", color: "bg-lightgreen" },
];

const Home = () => {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categoryList.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            color={category.color}
          />
        ))}
      </ul>
    </>
  );
};

export default Home;
