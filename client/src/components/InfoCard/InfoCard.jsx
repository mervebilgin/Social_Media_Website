import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";

const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen/>
        </div>
      </div>

      <div className="info">
        <span>
          <b>Studying at </b>
        </span>
        <span>Fırat University</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Bitlis</span>
      </div>

      <div className="info">
        <span>
          <b>Works in </b>
        </span>
        <span>Turkey</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
