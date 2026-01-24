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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
