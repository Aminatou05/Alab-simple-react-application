export default function Content(props) {
    return <p className={`content ${props.color}`}>{props.text}</p>;
  }