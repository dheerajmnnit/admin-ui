import "./style.css";

const Card = (props) => {
  return <div className="card-div">{props.children}</div>;
};

export default Card;