import React from "react";
import {
  FaTooth,
  FaSmile,
  FaTeethOpen,
  FaTeeth,
  FaRegGrinStars,
  FaHeart,
} from "react-icons/fa";
import "../index.css";

const servicesData = [
  {
    icon: <FaTooth />,
    title: "تنظيف الأسنان",
    description: "إزالة الجير والبلاك لتحسين صحة الفم.",
  },
  {
    icon: <FaTeeth />,
    title: "حشوات الأسنان",
    description: "علاج التسوس باستخدام أحدث الحشوات التجميلية.",
  },
  {
    icon: <FaRegGrinStars />,
    title: "تبييض الأسنان",
    description: "ابتسامة ناصعة باستخدام تقنيات آمنة وفعالة.",
  },
  {
    icon: <FaHeart />,
    title: "علاج الجذور",
    description: "علاج العصب بمهارة للحفاظ على الأسنان الطبيعية.",
  },
  {
    icon: <FaSmile />,
    title: "تركيبات الأسنان",
    description: "استعادة جمال ووظيفة الأسنان المفقودة.",
  },
  {
    icon: <FaTeethOpen />,
    title: "زراعة الأسنان",
    description: "زراعة الأسنان لتعويض الأسنان المفقودة بشكل دائم.",
  },
];

const Services = () => {
  return (
    <section
      className="services-section py-5"
      id="services"
      style={{ background: "linear-gradient(135deg, #e0f7fa, #f0f0f0)" }}
    >
      <div className="container">
        <h2 className="text-center mb-5 fw-bold display-4 text-primary">
          خدماتنا
        </h2>

        <div className="row g-5 justify-content-center">
          {servicesData.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="service-card p-5 text-center w-100">
                <div className="service-icon mb-4">{service.icon}</div>
                <h5 className="fw-bold mb-3">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internal CSS */}
      <style jsx>{`
        .services-section {
          direction: rtl;
        }

        .service-card {
          background: white;
          border-radius: 1.5rem;
          padding: 3rem 2rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-8px) scale(1.03);
          background: linear-gradient(135deg, #d0ebff, #e7f5ff);
          box-shadow: 0 12px 32px rgba(0, 123, 255, 0.3);
        }

        .service-icon {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, #0d6efd, #66b2ff);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: white;
          margin: 0 auto 1rem;
          box-shadow: 0 4px 15px rgba(13, 110, 253, 0.6);
          transition: transform 0.4s ease;
        }

        .service-card:hover .service-icon {
          transform: rotate(10deg) scale(1.1);
        }

        .service-card h5 {
          font-size: 1.8rem;
          color: #0d6efd;
        }

        .service-card p {
          font-size: 1.3rem;
          line-height: 2.2rem;
        }
      `}</style>
    </section>
  );
};

export default Services;
