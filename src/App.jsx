import HeroImage from "./assets/heroImg.png";
import Divider from "./assets/divider.png";

function App() {
  return (
    <div className="min-h-screen px-8 py-2 space-y-20 overflow-x-hidden">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div className="flex justify-center">
          <img src={HeroImage} alt="Hero" />
        </div>
        <div>
          <p className="text-3xl text-shadow-white mb-6 leading-tight">
            Hello, my name is..
          </p>
          <h1 className="text-5xl font-bold text-shadow-white mb-6 leading-tight">
            Jeany Florencia
          </h1>
          <p className="text-lg text-shadow-white mb-4">
            With deep love towards design and creating innovation, I began to
            develop a love towards web design and UI/UX design. Tapi boong :p
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <img src={Divider} alt="Divider" className="w-screen object-cover" />
      </div>

      {/* Project Section */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Projects I’ve Done Before...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img src={HeroImage} alt="Project 1" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">COMICOS 2026 X APPREN</h3>
              <p className="text-gray-600 text-sm">
                A full-stack digital comic marketplace featuring intuitive design and secure transactions.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img src={HeroImage} alt="Project 2" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">PORTOFOLIO V2</h3>
              <p className="text-gray-600 text-sm">
                Personal portfolio redesign with modern layout, scroll effects, and interactive sections.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img src={HeroImage} alt="Project 3" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">UI/UX Case Study</h3>
              <p className="text-gray-600 text-sm">
                UX improvements and mobile-friendly revamp for a fashion ecommerce app.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="py-4 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <img src={Divider} alt="Divider" className="w-screen object-cover" />
        </div>

      </div>
    </div>
  );
}

export default App;
