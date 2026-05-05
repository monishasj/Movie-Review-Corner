function Profile(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />

      <p className="review">{props.review}</p>

      <p><b>⭐ Rating:</b> {props.rating}</p>
      <p><b>🎭 Genre:</b> {props.genre}</p>
      <p><b>📅 Year:</b> {props.year}</p>
      <p><b>🎬 Director:</b> {props.director}</p>
    </div>
  );
}

export default Profile;