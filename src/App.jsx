import { useState, useEffect } from "react";

function App() {
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date(1991, 11, 21);
      const today = new Date();

      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setAge({ years, months, days });
    };

    calculateAge();
    const interval = setInterval(calculateAge, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-pic-container">
            <div className="profile-pic"></div>
          </div>

          <div className="profile-details">
            <div className="basic-info">
              <div className="flex-box">
                <i className="fa-solid fa-tag"></i>
                <span className="basic-info-head">Name:</span>
                <p>Abhishek Kabi</p>
              </div>

              <div className="flex-box">
                <i className="fa-solid fa-id-card"></i>
                <span className="basic-info-head">DOB:</span>
                <p>21/December/1991</p>
              </div>

              <div className="flex-box">
                <i className="fa-solid fa-cake-candles"></i>
                <span className="basic-info-head">Age:</span>
                <p>{age.years} years {age.months} months {age.days} days</p>
              </div>

              <div className="flex-box">
                <i className="fa-solid fa-house"></i>
                <span className="basic-info-head">Hometown:</span>
                <p>Coochbehar, West Bengal</p>
              </div>

              <div className="flex-box">
                <i className="fa-solid fa-location-arrow"></i>
                <span className="basic-info-head">Lives in:</span>
                <p>Bangalore, Karnataka</p>
              </div>

              <div className="divider-line"></div>

              <div className="flex-box">
                <i className="fa-solid fa-building-columns"></i>
                <span className="basic-info-head">Schools:</span>
                <p>SST, SGHS, MNHS.</p>
              </div>

              <div className="flex-box">
                <i className="fa-solid fa-graduation-cap"></i>
                <span className="basic-info-head">College:</span>
                <p>VIT Vellroe. 2010 - 2017.</p>
              </div>

              <div className="divider-line"></div>

              <div className="flex-box-for-work">
                <div className="icon-and-label">
                  <i className="fa-solid fa-briefcase"></i>
                  <p>Work (Domain IT):</p>
                </div>
                <div className="work-details">
                  <p>1. Aegis 2017 (Jio Customer Suppport).</p>
                  <p>2. DXC Technology 2018 (EON L1 Tech Support).</p>
                  <p>3. HP 2019 (Internal L1 Support).</p>
                  <p>4. Quinnox 2019 (Mainframe Developer).</p>
                  <p>5. Concentrix 2019 (OnePlus Support).</p>
                  <p>6. Teleperformance 2020 (Telecaller).</p>
                  <p>7. Amazon 2020 (Seller Support).</p>
                  <p>8. Cameo Global 2023 (Cisco L1 Support).</p>
                  <p>9. Alorica 2025 (Amazon Support).</p>
                  <p>10. Concentrix 2025 (VMWare L1 Support).</p>
                  <p>11. Startek (Aegis) 2026 (PhonePe Support).</p>
                  <p>12. Alorica 2026 (Amazon Support).</p>
                </div>

                <div className="divider-line"></div>

                <div className="flex-box" style={{ marginTop: "20px" }}>
                  <i className="fa-solid fa-diagram-project"></i>
                  <span className="basic-info-head">Project:</span>
                  <i className="fa-solid fa-flask" style={{ color: "white" }}></i>
                  <a href="https://abk2191.github.io/aphelion-labs/" target="_blank" rel="noopener noreferrer">
                    iINTUIT Labs
                  </a>
                  <p>2026.</p>
                </div>

                <div className="divider-line"></div>

                <div className="documents-section">
                  <div className="icon-and-label">
                    <i className="fa-solid fa-folder-open"></i>
                    <p>Documents:</p>
                  </div>
                  <div className="documents-list">
                    <a href="https://drive.google.com/file/d/10w7mt-qgZ1F4pffRr-s0zekltq-lkhUX/view" target="_blank" rel="noopener noreferrer" className="doc-link">
                      <i className="fa-solid fa-file-pdf"></i>
                      10th Board Exam
                    </a>
                    <a href="https://drive.google.com/file/d/1wtjnMuK77NJw2hBmbNe6rrRokn6pR2wi/view" target="_blank" rel="noopener noreferrer" className="doc-link">
                      <i className="fa-solid fa-file-pdf"></i>
                      12th Board Exam
                    </a>
                    <a href="https://drive.google.com/file/d/1c8JvPEWlSlz-jmFux01HppGJiAJAUB7S/view" target="_blank" rel="noopener noreferrer" className="doc-link">
                      <i className="fa-solid fa-graduation-cap"></i>
                      Degree
                    </a>
                    <a href="https://drive.google.com/file/d/1uBDS5E4NXo6XtKDWAE9f6jzIrCKEs9CZ/view" target="_blank" rel="noopener noreferrer" className="doc-link">
                      <i className="fa-solid fa-certificate"></i>
                      Provisional Degree
                    </a>
                    <a href="https://drive.google.com/file/d/1BGW8KW4VQYRG3aLfOXBPFJeCEtfyGhkt/view" target="_blank" rel="noopener noreferrer" className="doc-link">
                      <i className="fa-solid fa-id-card"></i>
                      Aadhar Front
                    </a>
                    <a href="https://drive.google.com/file/d/1j6hO8_BSdOdDQwaHTdDqc97FesO7YDo7/view" target="_blank" rel="noopener noreferrer" className="doc-link">
                      <i className="fa-solid fa-id-card"></i>
                      Aadhar Back
                    </a>
                    <a href="https://drive.google.com/file/d/1n2dtoCk30_PEHNYoa6pNXvMvjkJ7Mtn8/view" target="_blank" rel="noopener noreferrer" className="doc-link">
                      <i className="fa-solid fa-credit-card"></i>
                      UAN Card
                    </a>
                  </div>
                </div>

                <div className="margin"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
