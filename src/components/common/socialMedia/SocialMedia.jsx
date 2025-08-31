import {
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 🎯 REDES REALES DE SILVIA RIVERA
const socialIcons = [
  { 
    icon: faInstagram, 
    link: "https://www.instagram.com/silvia98_rivera?igsh=MTg0Y2R1dGRhcG84ag==",
    label: "Instagram personal de Silvia Rivera"
  }
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md transition-colors duration-200`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
