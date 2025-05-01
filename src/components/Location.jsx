import React from "react";

const Location = () => {
  return (
    <section className="location-section py-5" id="location">
      <div className="container">
        <h2 className="fw-bold text-primary text-center mb-5">موقعنا</h2>

        <div className="row align-items-center justify-content-center">
          {/* Left side - Google Maps */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="map-container shadow-lg rounded-3">
              <iframe
                width="100%"
                height="400"
                frameBorder="0"
                style={{ borderRadius: "1rem" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112349.97191457658!2d-74.00601549042314!3d40.71277527533545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17c459349f%3A0x4260ab1c2f6b9d42!2sNew%20York%20City%2C%20NY!5e0!3m2!1sen!2sus!4v1634028352654!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right side - Contact & Address Info */}
          <div className="col-12 col-md-6">
            <div className="contact-info">
              <div className="info-card card shadow-lg mb-4">
                <div className="card-body">
                  <h5 className="fw-bold text-primary">العنوان</h5>
                  <p className="fs-5 text-muted">
                    123 شارع الطبيب، مدينة الطب، الدار البيضاء
                  </p>
                </div>
              </div>

              <div className="info-card card shadow-lg">
                <div className="card-body">
                  <h5 className="fw-bold text-primary">ساعات العمل</h5>
                  <p className="fs-5 text-muted">
                    من الإثنين إلى الجمعة: 9:00 صباحاً - 6:00 مساءً
                  </p>
                  <p className="fs-5 text-muted">
                    السبت: 10:00 صباحاً - 2:00 مساءً
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .location-section {
          background: #f4f7fb;
        }

        .map-container {
          background: #ffffff;
          border-radius: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
        }

        .info-card {
          border-radius: 1rem;
          background-color: #fff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
        }

        h2 {
          font-size: 3rem;
          font-weight: 700;
        }

        h5 {
          font-size: 1.4rem;
          font-weight: 600;
        }

        p {
          font-size: 1.2rem;
        }

        .fs-5 {
          font-size: 1.2rem;
        }

        .text-muted {
          font-size: 1.1rem;
        }

        .card-body {
          padding: 2rem;
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2.2rem;
          }

          .info-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Location;
