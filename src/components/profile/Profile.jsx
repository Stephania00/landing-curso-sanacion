import person from "../../assets/images/person2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// Eliminado: faDownload y SocialMedia

const Profile = () => {
  return (
    <div
      className="relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4"
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt="Retrato de Silvia Rivera"
            />
          </div>

          {/* Social media section: solo Instagram + 'S' (Sureña Editorial) */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] shadow-2xl drop-shadow-2xl shadow-white">
                <div className="flex items-center justify-center gap-3">
                  {/* Instagram */}
                  <a
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-[#E1306C] hover:bg-[#E1306C]/10 transition-colors"
                    href="https://www.instagram.com/silvia98_rivera?igsh=MTg0Y2R1dGRhcG84ag=="
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram de Silvia Rivera"
                    title="Instagram de Silvia Rivera"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                  </a>

                  {/* Sureña Editorial (S) */}
                  <a
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-[#003f59] font-semibold hover:bg-[#003f59]/5 transition-colors"
                    href="https://xn--sureaeditorial-tnb.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Sitio web de Sureña Editorial"
                    title="Sureña Editorial"
                  >
                    S
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="max-sm:w-full w-[33rem]">
          <h2 className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8">
            Tu facilitadora: Silvia Rivera
          </h2>

          <div className="text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600">
            <p>
              Filósofa, escritora y poeta; artista escénica que integra literatura,
              filosofía y performance para crear mundos poéticos y reflexivos desde
              una mirada latinoamericana.
            </p>
            <p className="mt-3">
              A los 27 años dirige la editorial independiente Sureña y facilita
              talleres de escritura creativa; explora la palabra como cuerpo y
              experiencia con sensibilidad crítica e interdisciplinaria.
            </p>
          </div>

          <div className="mt-8 flex max-md:justify-center">
            {/* Botón Proyectos -> Sureña Editorial */}
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="https://www.instagram.com/surenaeditorial?igsh=MXByOG4wcGVkMzZ2ag=="
              target="_blank"
              rel="noreferrer noopener"
            >
              Conoce mi trabajo
            </a>
            {/* Eliminado: botón Download CV */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
