import { useState } from 'react'

function Sustainability() {
  const sections = [
    {
      title: "Our Sustainability Progress",
      description: "We build loved brands that bring joy to our consumers' lives with beverage choices for all occasions, tastes and lifestyles. Our growth strategy is grounded in our core values and commitment to social and environmental responsibility.",
      buttonText: "See our Progress",
      imageUrl: "/assets/first1.png",
    },
    {
      title: "Sustainability Resource Center",
      description: "At The Coca-Cola Company, our sustainability goals and initiatives are anchored by our purpose — to refresh the world and make a difference — and are core to our growth strategy. Get an overview of our efforts to help create a more sustainable business and better shared future.",
      buttonText: "Explore the Resource Center",
      imageUrl: "/assets/second1.png",
    },
  ]

  return (
    <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-4xl font-bold text-coke-black mb-12 text-center">Our Sustainability Goals and Progress </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={section.imageUrl}
              alt={section.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <p className="text-gray-600 mb-6">{section.description}</p>
              <a href="#" className="text-coke-red font-medium hover:underline">
                {section.buttonText} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sustainability