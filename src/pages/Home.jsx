import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Metodologia from "../components/metodologia/Metodologia";
import Beneficios from "../components/beneficios/Beneficios";    // ← CAMBIO: Portfolio → Beneficios
import Planes from "../components/planes/Planes";               // ← CAMBIO: Profession → Planes  
import Testimonios from "../components/testimonios/Testimonios";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-soft-white pt-30">
        <Metodologia />
      </div>
      <Beneficios />         {/* ← CAMBIO: Portfolio → Beneficios */}
      <Testimonios />        {/* ← MOVIDO: Ahora va antes de Planes */}
      <div className="bg-soft-white">
        <Planes />           {/* ← CAMBIO: Profession → Planes */}
      </div>
      <Contact />
    </div>
  );
};

export default Home;
