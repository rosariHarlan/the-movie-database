import { useHistory } from "react-router";
import "./../App.scss";

const Back = () => {
  const history = useHistory();
  return (
    <div className="btn" onClick={history.goBack}>
      &#60; back
    </div>
  );
};

export default Back;
