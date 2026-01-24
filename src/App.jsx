import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

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
                <i class="fa-solid fa-tag"></i>{" "}
                <span className="basic-info-head">Name:</span>{" "}
                <p>Abhishek Kabi</p>
              </div>

              <div className="flex-box">
                <i class="fa-solid fa-id-card"></i>{" "}
                <span className="basic-info-head">DOB:</span>{" "}
                <p>21/December/1991</p>
              </div>

              <div className="flex-box">
                <i class="fa-solid fa-house"></i>{" "}
                <span className="basic-info-head">Hometown:</span>{" "}
                <p>Coochbehar, West Bengal</p>
              </div>

              <div className="flex-box">
                <i class="fa-solid fa-location-arrow"></i>
                <span className="basic-info-head">Lives in:</span>{" "}
                <p>Bangalore, Karnataka</p>
              </div>

              <div className="divider-line"></div>

              <div className="flex-box">
                <i class="fa-solid fa-building-columns"></i>
                <span className="basic-info-head">Education:</span>{" "}
                <p>SST, SGHS, MNHS.</p>
              </div>

              <div className="flex-box">
                <i class="fa-solid fa-graduation-cap"></i>
                <span className="basic-info-head">College:</span>{" "}
                <p>VIT Vellroe. 2010 - 2017.</p>
              </div>

              <div className="divider-line"></div>

              <div className="flex-box-for-work">
                <div className="icon-and-label">
                  <i class="fa-solid fa-briefcase"></i>
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
                </div>

                <div className="divider-line"></div>

                <div className="flex-box" style={{ marginTop: "20px" }}>
                  <i class="fa-solid fa-diagram-project"></i>
                  <span className="basic-info-head">Project:</span>{" "}
                  <i class="fa-solid fa-flask" style={{ color: "white" }}></i>
                  <a href="https://abk2191.github.io/aphelion-labs/">
                    iINTUIT Labs.
                  </a>
                  <p>2026.</p>
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
