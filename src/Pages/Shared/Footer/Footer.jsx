import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" bg-neutral text-neutral-content">
      <div className="cs-container">
        <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
          <div className="cs-footer space-y-2">
            <h3 className="cs-footer-title">Contact us</h3>
            <address>
              <p className="cs-footer-subtitle">
                88,Bankra,Assasuni,satkhira,Bangladesh
              </p>
            </address>
            <a className="cs-footer-subtitle" href="tel:+8801789-699367">
              +8801789-699367
            </a>
            <div>
              <p className="cs-footer-subtitle">Mon - Fri: 08:00 - 22:00</p>
              <p className="cs-footer-subtitle">Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
          <div className="cs-footer space-y-2">
            <span className="cs-footer-title">Follow US</span>
            <span className="cs-footer-subtitle">Join us on social media</span>
            <div className="grid grid-flow-col gap-4">
              <a>
                <FaFacebookF />
              </a>
              <a>
                <FaInstagram />
              </a>
              <a>
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-center p-4 bg-slate-900 text-white">
        <p className="text-sm md:text-base">
          Copyright © {new Date().getFullYear()} - All right reserved by Md.
          Abir mahmud
        </p>
      </div>
    </footer>
  );
};

export default Footer;
