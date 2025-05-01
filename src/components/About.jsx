import "../index.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content" data-aos="fade-left">
          <h1>من نحن</h1>
          <p>
            نحن عيادة أسنان متخصصة في تقديم أفضل خدمات الرعاية الصحية للفم
            والأسنان، حيث نعمل على توفير تجربة علاجية مريحة وآمنة لجميع المرضى.
            نحرص دائماً على استخدام أحدث التقنيات الطبية لضمان جودة العلاج وسرعة
            النتائج. نهدف إلى خلق بيئة هادئة وودية تجعل زيارتكم لنا تجربة
            إيجابية ومميزة. نهتم بكل تفاصيل العناية بصحة الفم والأسنان، ونسعى
            لتقديم استشارات مخصصة وخدمات علاجية تناسب احتياجات كل فرد، لنرسم لكم
            ابتسامة صحية وجميلة تدوم طويلاً.
          </p>
        </div>

        <div className="about-image" data-aos="fade-right">
          <img src="/about.png" alt="about" />
        </div>
      </div>

      {/* Internal CSS for About Section */}
      <style jsx>{`
        .about-section {
          min-height: 95vh;
          padding: 80px 30px;
          display: flex;
          align-items: center;
          background-color: #f9f9f9;
          direction: rtl;
        }

        .about-container {
          display: flex;
          flex-direction: row-reverse;
          justify-content: center;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
          gap: 80px;
          flex-wrap: wrap;
        }

        .about-content {
          flex: 1;
          min-width: 350px;
        }

        .about-content h1 {
          font-size: 4rem;
          color: #0d6efd;
          margin-bottom: 30px;
        }

        .about-content p {
          font-size: 1.8rem;
          color: #333;
          line-height: 2.8rem;
          text-align: justify;
        }

        .about-image {
          flex: 1;
          min-width: 350px;
          min-height: 400px;
          display: flex;
          justify-content: center;
        }

        .about-image img {
          width: 100%;
          max-width: 550px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .about-container {
            flex-direction: column;
            text-align: center;
          }

          .about-content h1 {
            font-size: 3rem;
          }

          .about-content p {
            font-size: 1.5rem;
            line-height: 2.4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
