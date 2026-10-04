import "./App.css";

function ProfileCard({ name, imageUrl, description }) {
  return (
    <div className="profile-card">
      <div className="card-header">
        <span>PLAYER PROFILE</span>
        <span>● ONLINE</span>
      </div>

      <div className="profile-content">
        <div className="avatar-frame">
          <img src={imageUrl} alt={name} className="profile-image" />
        </div>

        <h2>{name}</h2>

        <div className="level-badge">
          ⭐ LEVEL 01
        </div>

        <p className="description">
          {description}
        </p>

        <div className="stats">
          <div>
            <span>HP</span>
            <div className="bar">
              <div className="bar-fill hp"></div>
            </div>
          </div>

          <div>
            <span>XP</span>
            <div className="bar">
              <div className="bar-fill xp"></div>
            </div>
          </div>
        </div>

        <button className="game-button">
          🎮 VIEW PROFILE
        </button>
      </div>

      <div className="card-footer">
        FSD PLAYER • 2026
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="game-screen">

      <div className="game-title">
        <span>◆</span>
        FSD ADVENTURE
        <span>◆</span>
      </div>

      <ProfileCard
        name="Abhijeet Khot"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmA39dyfEGfVWFf_WeaUziqnfxAc2PbbT6aOmQ27AyTw&s=10"
        description="A passionate Full Stack Development student on a mission to build amazing web applications."
      />

      <p className="instruction">
        PRESS START TO CONTINUE
      </p>

    </div>
  );
}

export default App;