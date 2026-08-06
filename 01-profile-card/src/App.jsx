import ProfileCard from "./components/ProfileCard";
import profile from "./assets/profile.jpg";
import profile2 from "./assets/profile1.jpg";
import profile3 from "./assets/profile2.jpg";

function App() {
  return (
    <div className="container">
      <ProfileCard
        name="Zeeshan Ahmad"
        role="Full Stack Web Developer"
        image={profile}
      />

      <ProfileCard
        name="Ali Khan"
        role="React Developer"
        image={profile2}
      />

      <ProfileCard
        name="Ahmed Raza"
        role="UI/UX Designer"
        image={profile3}
      />
    </div>
  );
}

export default App;