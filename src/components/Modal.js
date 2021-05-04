import "./Modal.scss";
import { Link } from "react-router-dom";

const Modal = (props) => {
    if(!props.show){
        return null
    }
  return (
    <div className="modalBg">
        <div className="modalBox">

        
      <div className="modalContent">
        <h1 className="modalHeader">Thank you</h1>
        <p className="modalBody">
        What do you want to do now?</p>
        <div className="modalButtons">
            <Link className="submit" to="/new">Show<br/>new movies</Link>
            <Link className="submit" to="/add" onClick={() => window.location.reload()}>Add<br/>another one</Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Modal;
