import "./FormError.css";
export default function FormError(props) {
  return (
    <div className="error-wrap">
      <p>{ props.errorMessage }</p>
    </div>
  );
}
