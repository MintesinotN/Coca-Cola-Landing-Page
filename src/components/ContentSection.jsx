function ContentSection() {
    return (
      <section className="py-16 bg-coke-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-coke-black text-center mb-12">Explore Our World</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg text-center">
              <img
                src="https://www.coca-cola.com/content/dam/onexp/us/en/brands/coca-cola/coca-cola-zero-sugar.png"
                alt="Coca-Cola Zero Sugar"
                className="h-32 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-coke-black mb-2">Coca-Cola Zero Sugar</h3>
              <p className="text-coke-black">Enjoy the bold taste with zero sugar.</p>
              <a href="#" className="text-coke-red hover:underline mt-4 inline-block">Learn More</a>
            </div>
            <div className="p-6 rounded-lg text-center">
              <img
                src="https://www.coca-cola.com/content/dam/onexp/us/en/brands/sprite/sprite.png"
                alt="Sprite"
                className="h-32 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-coke-black mb-2">Sprite</h3>
              <p className="text-coke-black">Crisp, refreshing lemon-lime flavor.</p>
              <a href="#" className="text-coke-red hover:underline mt-4 inline-block">Learn More</a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <img
                src="https://www.coca-cola.com/content/dam/onexp/us/en/brands/fanta/fanta-orange.png"
                alt="Fanta Orange"
                className="h-32 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-coke-black mb-2">Fanta Orange</h3>
              <p className="text-coke-black">Bright, bubbly orange taste.</p>
              <a href="#" className="text-coke-red hover:underline mt-4 inline-block">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default ContentSection