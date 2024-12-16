import Footer from "./Components/footer";
import Header from "./Components/header";
import Hero from "./Components/hero";
const Home = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-purple-600">Welcome to My Page!</h1>
      <p className="text-gray-700 mt-4">This is the main content area.</p>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;

