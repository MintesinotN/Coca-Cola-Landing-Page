import { useState } from 'react'

function PurposeDrivenHistory() {
  const content = {
    title: "A Purpose-Driven History",
    description: "The Coca‑Cola Company’s purpose is to refresh the world and make a difference and we have remained true to that purpose for 138 years. Our strategy is centered around people—our consumers and employees—and driving sustainable solutions that build resilience into our business to respond to current and future challenges, while creating positive change for the planet.",
    buttonText: "Learn more about us",
    imageUrl: "/assets/second3.png",
}

  return (
    <section className="max-lg:hidden bg-gray-100 my-20 py-12 px-4">
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="top-20 w-160rounded-lg overflow-hidden shadow-md">
          <img
            src={content.imageUrl}
            alt="Coca-Cola Employees"
            className="w-full object-cover rounded-2xl"
          />
        </div>
        <div className="absolute left-130 z-10 bg-white rounded-lg p-20 shadow-md">
          <h3 className="text-4xl font-bold mb-4">{content.title}</h3>
          <p className="text-xl mb-32">{content.description}</p>
          <a href="#" className="inline-block text-black border border-black px-6 py-2 rounded-full hover:bg-gray-200">
            {content.buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default PurposeDrivenHistory