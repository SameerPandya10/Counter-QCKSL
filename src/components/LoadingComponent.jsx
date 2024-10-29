/* eslint-disable react/prop-types */
import Loader from "../assets/loader.svg";
import "./LoadingComponent.css";

export default function LoadingComponent({ loading }) {
  if (loading)
    return (
      <div className="loader">
        <img src={Loader} alt="load-icon" className="load-icon" />
        <h2>Saving Counter Value</h2>
      </div>
    );
  return <h2>Counter</h2>;
}
