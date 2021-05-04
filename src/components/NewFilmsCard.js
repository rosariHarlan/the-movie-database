import "./NewFilmsCard.scss";

const NewFilmsCard = (props) => {
  const { name, date, id, vote, genre, img, descr, trailer } = props;
  console.log(id);
  return (
    <article key={id} className="newItem">
      <p className="vote">{vote}</p>
      <div className="imgCont">
        <img src={img} alt={name} />
      </div>
      <h2 className="upperContent">{name}</h2>
      <p className="upperContent">{date}</p>
      <p className="upperContent">{genre}</p>
      <div className="accordion">
        <div className="description">
          <input type="checkbox" id={id}></input>
          <label className="description-label" for={id}>
            Description
          </label>
          <div className="description-content">
            <p>{descr}</p>
            <a
              className="descrLink"
              href={trailer}
              rel="noreferrer"
              target="_blank"
            >
              Watch trailer
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewFilmsCard;
