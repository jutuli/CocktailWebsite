const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col text-white">
      <div className="flex flex-col gap-5 px-10 pt-15 pb-10">
        <h2 className="font-playfair text-xl leading-12 md:text-2xl">
          Genuss hat viele Facetten...
        </h2>
        <p className="font-montserrat text-sm leading-6 font-extralight">
          ...aber ohne das richtige Maß geht es nicht! Cocktails kann man mit
          allen Sinnen genießen. Zum Cocktail-Genuss gehören neben dem Geschmack
          natürlich auch die Optik, die Farbe und die verschiedenen Aromen, die
          im Zusammenspiel ganz neue Assoziationen wecken und unterbewusst auch
          den Geschmack beeinflussen.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
