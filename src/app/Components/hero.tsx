

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white flex items-center justify-center text-center px-6">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-6xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">Welcome to My Portfolio</h1>
        <p className="text-2xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Explore my work, skills, and projects.
        </p>
        
        {/* Smooth scroll button */}
        <a
          href="#about"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transform transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
