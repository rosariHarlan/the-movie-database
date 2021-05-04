import "./NewFilms.scss";
import NewFilmsCard from "./NewFilmsCard";

const NewFilms = (props) => {
  return (
    <section className="parentContainer newFilms">
      {props.data &&
        props.data.map((item, i) => {
          return (
            <NewFilmsCard
              key={i}
              id={i}
              img={item.link}
              name={item.name}
              date={item.date}
              vote={item.voting}
              genre={item.genre}
              descr={item.description}
              trailer={item.trailer}
            />
  
          );
        })}
    </section>
  );
};

export default NewFilms;
