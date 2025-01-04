export default function Entry(props) {
  return (
    <div className="main-div">
      <div className="img-div>">
        <img
          src={props.entry.img.src}
          className="place-img"
          alt={props.entry.img.alt}
        ></img>
      </div>

      <div className="info-div">
        <div className="info-div-top">
          <h4>{props.entry.country}</h4>
          <a href={props.entry.googleMapsLink}>View on Google Maps</a>
        </div>

        <div className="info-div-bottom">
          <h2>{props.entry.title}</h2>
          <br></br>
          <h4>{props.entry.dates}</h4>
          <p>{props.entry.text}</p>
        </div>

        <hr></hr>
      </div>
    </div>
  );
}
