import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="contact-fullscreen d-flex align-items-center justify-content-center"
      id="contact"
    >
      <div className="container text-center">
        <h2 className="fw-bold text-primary mb-4">تواصل معنا</h2>
        <p className="text-muted mb-5 fs-5">
          إختر الطريقة الأنسب للتواصل معنا، نحن هنا للمساعدة.
        </p>

        <div className="row g-4 justify-content-center">
          {/* WhatsApp Card */}
          <div className="col-12 col-md-4">
            <div className="contact-card card border-0 shadow-lg p-4">
              <div className="icon-wrapper bg-gradient-whatsapp mb-3 mx-auto">
                <FaWhatsapp size={36} color="#ffffff" />
              </div>
              <h5 className="fw-bold mb-3 fs-4">واتساب</h5>
              <p className="text-muted mb-4 fs-6">
                تواصل معنا بسرعة عبر WhatsApp.
              </p>
              <a
                href="https://wa.me/212600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success rounded-pill w-100 fs-5"
              >
                ابدأ المحادثة
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="col-12 col-md-4">
            <div className="contact-card card border-0 shadow-lg p-4">
              <div className="icon-wrapper bg-gradient-phone mb-3 mx-auto">
                <FaPhoneAlt size={36} color="#ffffff" />
              </div>
              <h5 className="fw-bold mb-3 fs-4">اتصال هاتفي</h5>
              <p className="text-muted mb-4 fs-6">
                اتصل بنا للحصول على دعم فوري.
              </p>
              <a
                href="tel:+212600000000"
                className="btn btn-primary rounded-pill w-100 fs-5"
              >
                اتصل بنا
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="col-12 col-md-4">
            <div className="contact-card card border-0 shadow-lg p-4">
              <div className="icon-wrapper bg-gradient-email mb-3 mx-auto">
                <FaEnvelope size={36} color="#ffffff" />
              </div>
              <h5 className="fw-bold mb-3 fs-4">إرسال بريد إلكتروني</h5>
              <p className="text-muted mb-4 fs-6">
                أرسل لنا استفسارك عبر البريد الإلكتروني.
              </p>
              <a
                href="mailto:contact@example.com"
                className="btn btn-danger rounded-pill w-100 fs-5"
              >
                إرسال رسالة
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-fullscreen {
          min-height: 90vh;
          background: linear-gradient(135deg, #f3f9fc, #ffffff);
          padding: 40px 20px;
        }
        .icon-wrapper {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .bg-gradient-whatsapp {
          background: linear-gradient(135deg, #25d366, #128c7e);
        }
        .bg-gradient-phone {
          background: linear-gradient(135deg, #0d6efd, #0b5ed7);
        }
        .bg-gradient-email {
          background: linear-gradient(135deg, #dc3545, #bd2130);
        }
        .contact-card {
          border-radius: 1.5rem;
          background: #ffffff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        .btn {
          font-size: 1.1rem;
          transition: background-color 0.3s ease;
        }
        .btn:hover {
          background-color: #333;
        }
        h2 {
          font-size: 2.5rem;
        }
        h5 {
          font-size: 1.4rem;
        }
        p {
          font-size: 1.2rem;
        }
      `}</style>
    </section>
  );
};

export default Contact;
