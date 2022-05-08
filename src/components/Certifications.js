import React, { useState, useEffect } from "react";
import "./../styles/Certifications.css";
import { certificationsDetails } from "./../fake-apis/certificationsApi";

function Certifications(props) {
  const { componentStartRef } = props;
  const [certificationsData, setCertificationsData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    certificationsDetails().then((certificationsData) => {
      setCertificationsData(certificationsData);
    });
  }, []);

  const onClickViewCertificate = (e, certificateUrl) => {
    console.log("sdfghjhgfd");
    setShowPopup(true);
  };

  return (
    <div className="certifications" ref={componentStartRef}>
      <div className="certifications-heading">{certificationsData?.title}</div>
      <div className="certifications-body">
        {certificationsData?.certifications?.map((certificate, index) => {
          return (
            <div className="certification-card" key={index}>
              <div className="certification-card-content">
                <div className="certification-card-title">
                  {certificate?.certificateName}
                </div>
                <div> {certificate?.issuedBy}</div>
              </div>
              <div className="certification-card-icon">
                <a
                  href={process.env.PUBLIC_URL + certificate?.certificateUrl}
                  download
                >
                  <img
                    src={process.env.PUBLIC_URL + "download.png"}
                    alt=""
                    title="Download"
                  />
                </a>
                <img
                  src={process.env.PUBLIC_URL + "eye.png"}
                  alt=""
                  title="View"
                  onClick={(e) => {
                    onClickViewCertificate(e, certificate?.certificateUrl);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={
          showPopup ? "popup-container-visible" : "popup-container-hidden"
        }
      >
        <div className="certifications-popup">
          <img
            className="popup-cross"
            src={process.env.PUBLIC_URL + "cross.png"}
            alt=""
            onClick={(e) => {
              setShowPopup(false);
            }}
          />
          <img
            className="popup-certificate"
            src={process.env.PUBLIC_URL + "Certificate1.png"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Certifications;
