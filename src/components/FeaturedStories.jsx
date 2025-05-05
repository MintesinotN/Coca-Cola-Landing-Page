function FeaturedStories() {
    return (
      <section className="py-16 bg-coke-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-coke-black mb-12">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://www.coca-colacompany.com/content/dam/company/us/en/stories/story1.jpg"
                alt="Story 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-coke-black mb-2">Advancing Sustainability Goals</h3>
                <p className="text-coke-black mb-4">Learn how we’re reducing our environmental footprint.</p>
                <a href="#" className="text-coke-red hover:underline">Read More</a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://www.coca-colacompany.com/content/dam/company/us/en/stories/story2.jpg"
                alt="Story 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-coke-black mb-2">New Brand Innovations</h3>
                <p className="text-coke-black mb-4">Discover the latest additions to our portfolio.</p>
                <a href="#" className="text-coke-red hover:underline">Read More</a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://www.coca-colacompany.com/content/dam/company/us/en/stories/story3.jpg"
                alt="Story 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-coke-black mb-2">Community Impact</h3>
                <p className="text-coke-black mb-4">See how we’re supporting communities worldwide.</p>
                <a href="#" className="text-coke-red hover:underline">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default FeaturedStories