const Header = () => {
  return (
    <header className="bg-primary flex flex-col text-white">
      <nav className="flex justify-between px-5 py-3 text-sm uppercase">
        <h3 className="font-playfair font-bold tracking-widest">
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
      <form className="text-primary flex justify-start gap-2 px-10 text-sm">
        <input
          type="text"
          placeholder="Search for a drink..."
          className="font-montserrat w-1/2 rounded-md bg-white p-2"
        />
        <button
          className="font-montserrat bg-secondary rounded-md px-5 py-2"
          type="submit"
        >
          Search
        </button>
      </form>
      <button className="rotate-90 py-15 text-4xl font-extralight">
        {">>>"}
      </button>
    </header>
  );
};

export default Header;
