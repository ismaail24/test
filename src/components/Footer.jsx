import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-light py-4" dir="rtl">
      <div className="container text-center">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} عيادتنا. جميع الحقوق محفوظة.
        </p>
        <p className="text-white mb-0">
          123 شارع الطبيب، مدينة الطب، الدار البيضاء
        </p>
        <p className="text-white mb-0">
          هاتف: +212 123 456 789 | البريد الإلكتروني: info@dentalclinic.com
        </p>
      </div>

      <style jsx>{`
        .footer-section {
          background-color: #222;
          color: #fff;
          direction: rtl; /* Important : RTL */
          text-align: right; /* Alignement à droite */
        }
        .footer-section p {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }
        .footer-section a {
          color: #fff;
          text-decoration: none;
        }
        .footer-section a:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
