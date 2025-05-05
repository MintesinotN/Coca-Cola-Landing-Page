import { useState } from 'react'

function Hero() {
  const slides = [
    {
      title: "ALWAYS INNOVATING",
      description: "From marketing to product development, we're relentlessly pursuing innovation that fuels growth and boldly explores the possibilities of tomorrow's great brands.",
      buttonText: "Explore Innovations",
      imageUrl: "assets/first.png",
    },
    {
      title: "CRAFTING BRANDS AND CHOICES PEOPLE LOVE",
      description: "We are committed to offering people more of the drinks they want across a range of categories and in a variety of sizes.",
      buttonText: "Explore our Brands",
      imageUrl: "assets/second.png",
    },
    {
      title: "REFRESHINGLY LOCAL",
      description: "The Coca-Cola system contributes to the local economy supporting value through our network of suppliers, distributors, wholesalers and retailers.",
      buttonText: "Explore Economic Impact",
      imageUrl: "assets/third.png",
    },
    {
      title: "Iconic ‘Share a Coke’ is Back for a New Generation",
      description: "",
      buttonText: "Explore",
      imageUrl: "assets/forth.png",
    },
    {
      title: "WATER LEADERSHIP",
      description: "We have replenished more than 100% of the water used in our beverages every year since 2015.",
      buttonText: "Explore Water Leadership",
      imageUrl: "assets/fivth.png",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="bg-gray-100 relative h-[70vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mt-8 mb-16 sm:mx-4 lg:mx-32 sm:rounded-3xl absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-center px-4">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg mb-6 max-w-xl mx-auto">{slide.description}</p>
              <button className="bg-white text-coke-red px-6 py-2 rounded-full hover:bg-gray-200">
                {slide.buttonText}
              </button>
            </div>
          </div> */}
        </div>
      ))}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-black' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default Hero