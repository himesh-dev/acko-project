import React from "react";
import "./footer.css";
import ackoLogo from "../../assets/images/ackoWhiteLogo.png";
import Option from "./option";
const options = [
  {
    title: "COMPANY",
    items: [
      "About Us",
      "Board Of Directors",
      "Careers",
      "Articles",
      "Parterships",
      "Sitemap"
    ]
  },
  {
    title: "SUPPORT",
    items: [
      "Consumer Buying Process",
      "Cancellations & Refunds",
      "Customer Service",
      "Downloads",
      "Contact Us"
    ]
  },
  {
    title: "LEGAL",
    items: [
      "Whistleblower Policy",
      "Public Disclosure",
      "Financials & Disclosures",
      "Privacy Policy",
      "Terms & Conditions",
      "Stewardship Code"
    ]
  }
];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="details-container">
        <img className="acko-logo" alt="ACKO White LOGO" src={ackoLogo} />
        <span className="acko-title">Acko General Insurance Ltd.</span>
        <span className="acko-contact address">
          Unit No. 301 & 302, 3rd Floor, F wing, Lotus Corporate Park, Off
          Western Express Highway, Jay Coach, Goregaon East, Mumbai 400063.
        </span>
        <span className="acko-contact email">Email: hello@acko.com</span>
        <span className="acko-contact phone">Phone: 1860 266 2256</span>
      </div>
      {options.map((option, i) => {
        return (
          <div key={i} className="option-container">
            <Option option={option} />
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
