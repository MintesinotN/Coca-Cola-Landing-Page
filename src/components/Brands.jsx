import { useState } from "react";

function Brands() {
  const brands = [
    {
      name: "Coca-Cola",
      imageUrl:
        "./assets/1.png"
    },
    {
      name: "Sprite",
      imageUrl:
        "./assets/2.png"
    },
    {
      name: "Fanta",
      imageUrl:
        "./assets/3.png"
    },
    {
      name: "Diet Coke",
      imageUrl:
        "./assets/4.png"
    },
    {
      name: "Coca-Cola Zero Sugar",
      imageUrl:
        "./assets/5.png"
    },
    {
      name: "Dasani",
      imageUrl:
        "./assets/6.png"
    },
    {
      name: "Minute Maid",
      imageUrl:
        "./assets/7.png"
    },
    {
      name: "Powerade",
      imageUrl:
        "./assets/8.png"
    },
    {
      name: "Smartwater",
      imageUrl:
        "./assets/9.png"
    },
    {
      name: "Dasani",
      imageUrl:
        "./assets/10.png"
    },
    {
      name: "Valle",
      imageUrl:
        "./assets/11.png"
    },
    {
      name: "Fanta",
      imageUrl:
        "./assets/12.png"
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className="bg-gray-100 py-12 px-2 sm:px-4">
      <h2 className="text-3xl font-semibold mb-12 text-center">
        Explore Our Brands
      </h2>
      <div className="max-w-sm sm:max-md:max-w-md md:max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        {(showAll ? brands : brands.slice(0, 9)).map((brand, index) => (
          <div
            key={index}
            className="sm:h-48 sm:w-48 h-40 w-40 bg-white rounded-lg overflow-hidden shadow-md flex items-center justify-center p-4"
          >
            <img
              src={brand.imageUrl}
              alt={brand.name}
              className="rounded-md object-contain"
            />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={toggleShowAll}
          className="bg-white text-coke-black border border-black px-6 py-2 rounded-full hover:bg-gray-200"
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>
    </section>
  );
}

export default Brands;
