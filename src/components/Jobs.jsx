import { useState } from 'react'

function Jobs() {
  const content = {
    title: "Coca-Cola Company Jobs",
    description: "We seek employees that embrace change, champion diversity and push for progress. Your skills and experience will help us navigate the ever-changing global landscape and guide us into the next chapter and beyond.",
    buttonText: "Explore Jobs",
    imageUrl: "/assets/first3.png",
}

  return (
    <section className="max-lg:hidden bg-gray-100 py-12 px-4">
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="z-10 bg-white rounded-lg p-20 shadow-md">
          <h3 className="text-4xl font-bold mb-4">{content.title}</h3>
          <p className="text-xl mb-32">{content.description}</p>
          <a href="#" className="inline-block text-black border border-black px-6 py-2 rounded-full hover:bg-gray-200">
            {content.buttonText}
          </a>
        </div>
        <div className="absolute top-20 left-130 w-160rounded-lg overflow-hidden shadow-md">
          <img
            src={content.imageUrl}
            alt="Coca-Cola Employees"
            className="w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Jobs