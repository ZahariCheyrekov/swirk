import "./Spinner.scss";

const Spinner = ({ spinnerSize }: { spinnerSize: string }) => {
  return (
    <div className={`spinner ${spinnerSize ? spinnerSize : "full"}`}></div>
  );
};

export default Spinner;
