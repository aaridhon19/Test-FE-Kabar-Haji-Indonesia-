export default function AboutPage() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-black">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            Our travel app makes it easy to explore, plan, and save your favorite destinations. Whether you're looking for a weekend getaway or an exotic vacation, we've got you covered.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="shadow-lg rounded-lg p-6 bg-white">
              <h2 className="text-2xl font-bold mb-2 text-blue-500">Explore</h2>
              <p className="text-gray-600">
                Discover new destinations, hidden gems, and popular spots. Our extensive database of travel locations offers something for everyone.
              </p>
            </div>
            <div className="shadow-lg rounded-lg p-6 bg-white">
              <h2 className="text-2xl font-bold mb-2 text-green-500">Plan</h2>
              <p className="text-gray-600">
                Plan your trip with ease. Save your favorite spots, create itineraries, and share them with friends and family.
              </p>
            </div>
            <div className="shadow-lg rounded-lg p-6 bg-white">
              <h2 className="text-2xl font-bold mb-2 text-red-500">Save</h2>
              <p className="text-gray-600">
                Save your favorite destinations and revisit them anytime. Your personal travel wishlist is just a click away.
              </p>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
            Start Your Journey
          </button>
        </div>
      </section>
    );
  }
  