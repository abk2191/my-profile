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
                  <p>1. Aegis 2017</p>
                  <p>2. DXC Technology 2018</p>
                  <p>3. HP 2019</p>
                  <p>4. Quinnox 2019</p>
                  <p>5. Concentrix 2019</p>
                  <p>6. Teleperformance 2020</p>
                  <p>7. Amazon 2020</p>
                  <p>8. Cameo Global 2023</p>
                  <p>9. Alorica 2025</p>
                  <p>10. Concentrix 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
