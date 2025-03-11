import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const searchInput = useRef<HTMLInputElement>(null);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchRequest = searchInput.current?.value.trim();
    if (searchRequest) {
      navigate(`/${searchRequest}`);
    }
  };

  return (
    <header className="bg-primary flex flex-col text-white">
      <nav className="flex justify-between px-5 py-3 text-sm uppercase">
        <h3
          className="font-playfair cursor-pointer font-bold tracking-widest"
          onClick={() => navigate("/")}
        >
          Drinks & Chill
        </h3>
        <div>
          <h3 className="font-montserrat">Menu</h3>
        </div>
      </nav>
      <div className="flex flex-col gap-5 px-10 pt-20 pb-10">
        <h1 className="font-playfair text-5xl leading-15 md:text-6xl">
          Cocktails & Getränke!
        </h1>
        <h2 className="font-montserrat text-sm leading-6 font-extralight uppercase">
          Herzlich Willkommen in der Welt der Cocktails und Getränke!
        </h2>
      </div>
      <form
        className="text-primary flex justify-start gap-2 px-10 text-sm"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="text"
          placeholder="Search for ingredient..."
          className="font-montserrat w-1/2 rounded-md bg-white p-2"
          ref={searchInput}
        />
        <button
          className="font-montserrat bg-secondary cursor-pointer rounded-md px-5 py-2"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="m-auto my-10 text-4xl font-extralight">&#8595;</div>
    </header>
  );
};

export default Header;
