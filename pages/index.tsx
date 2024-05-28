import Link from "next/link";
import PorqueNosotros from "../components/PorqueNosotros";
import MasVendidos from "../components/MasVendidos";
import Nuevo from "../components/Nuevo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";


const Home = () => {
  return (
    <div className="flex bg-white w-full flex-col justify-center font-heading-5 gap-20">

      <Header />

      <Hero />

      <PorqueNosotros />

      <MasVendidos />

      <Nuevo />

      <Footer />
    </div>
  );
};

export default Home;
