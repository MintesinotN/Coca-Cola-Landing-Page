import { useState } from "react";

function Carousel() {
  const initialArticles = [
    {
      title: "Jack Daniel's and Coca‑Cola RTD Launches in US",
      description:
        "Jack Daniel’s & Coca‑Cola RTD – a pre-mixed, canned cocktail that first launched last fall in Mexico – is set to hit stores in the United States. ",
      buttonText: "Explore",
      imageUrl: "/assets/first2.png",
    },
    {
      title:
        "Coca‑Cola and the OREO® Brand Team Up for Limited-Edition Drink and Cookie",
      description:
        "The two “bestie” brands have collaborated to offer fans unique flavor experiences that celebrate the “Real Magic” of friendship.",
      buttonText: "Explore the collab",
      imageUrl: "/assets/second2.png",
    },
    {
      title: "How The Coca‑Cola System Refreshes Local Economies and Communities in Markets Around the World",
      description:
        "The Coca‑Cola system creates local jobs to make, distribute and sell our drinks that refresh local communities. ",
      buttonText: "Explore",
      imageUrl: "/assets/third2.png",
    },
  ];

  const [articles, setArticles] = useState([...initialArticles]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotateArticles = () => {
    setArticles((prev) => {
      const newOrder = [...prev];
      newOrder.unshift(newOrder.pop());
      return newOrder;
    });
    setCurrentIndex((prev) => (prev + 1) % 3);
  };

  return (
    <section className="relative bg-gray-100 py-12 px-4">
      <h2 className="text-4xl font-bold text-coke-black mb-12 text-center">
        Featured News
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">{article.title}</h3>
                <p className="text-gray-600 mb-6">{article.description}</p>
              </div>
              <a href="#" className="text-coke-red font-medium hover:underline">
                {article.buttonText} →
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={rotateArticles}
          className={`w-3 h-3 rounded-full ${
            currentIndex === 0 ? "bg-black" : "bg-gray-400"
          } mx-1`}
        ></button>
        <button
          onClick={rotateArticles}
          className={`w-3 h-3 rounded-full ${
            currentIndex === 1 ? "bg-black" : "bg-gray-400"
          } mx-1`}
        ></button>
        <button
          onClick={rotateArticles}
          className={`w-3 h-3 rounded-full ${
            currentIndex === 2 ? "bg-black" : "bg-gray-400"
          } mx-1`}
        ></button>
      </div>
    </section>
  );
}

export default Carousel