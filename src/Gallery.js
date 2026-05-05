import Profile from "./Profile";
import interstellar from "./Image/Interstellar.jpg";
import idiots from "./Image/3idiots.jpg";
import inception from "./Image/Inception.jpg";

export function Gallery() {
  return (
    <div className="gallery">
      <Profile
        name="Interstellar"
        image={interstellar}
        review="A breathtaking voyage through space and time. Explores love, gravity, and survival beyond Earth."
        rating="⭐⭐⭐⭐⭐"
        genre="Sci-Fi"
        year="2014"
        director="Christopher Nolan"
      />

      <Profile
        name="3 Idiots"
        image={idiots}
        review="A timeless comedy that redefined Bollywood storytelling. Focuses on friendship and education."
        rating="⭐⭐⭐⭐⭐"
        genre="Comedy/Drama"
        year="2009"
        director="Rajkumar Hirani"
      />

      <Profile
        name="Inception"
        image={inception}
        review="A mind-bending journey into dreams within dreams."
        rating="⭐⭐⭐⭐⭐"
        genre="Sci-Fi/Thriller"
        year="2010"
        director="Christopher Nolan"
      />
    </div>
  );
}