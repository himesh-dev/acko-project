import React from "react";
import "./card.css";
import image from "../../../assets/images/img7.jpeg";
import StarRatings from "react-star-ratings";
import Avatar from "../../header/user/avatar";
import img1 from "../../../assets/images/img1.jpeg";
import img2 from "../../../assets/images/img2.jpeg";
import img3 from "../../../assets/images/img3.jpeg";
import img4 from "../../../assets/images/img4.jpeg";

const images = [img1, img2, img3, img4, ""];

const Card = () => {
  return (
    <div className="card-container">
      <div className="img-description">
        <img className="card-img" src={image} alt="thumbnail" />
        <div className="description-container">
          <p className="card-title">Perfect Body System</p>
          <p className="card-tag">
            by <strong>Jasmine Taylor</strong>
          </p>
          <p className="description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
      </div>
      <div className="details-rating">
        <div className="details">
          <p>
            <strong>Club:</strong> Health Forge
          </p>
          <p>
            <strong>Partners:</strong> Multisport
          </p>
          <p>
            <strong>Members:</strong> 10/14
          </p>
        </div>
        <div className="rating">
          <StarRatings
            rating={4}
            starRatedColor="yellow"
            starDimension="20px"
            starSpacing="2px"
            //   changeRating={this.changeRating}
            numberOfStars={5}
            name="rating"
          />
          <p>(66 Reviews)</p>
        </div>
      </div>
      <div className="avatar-button">
        <div className="avatar-container">
          {images.map((img, i) => (
            <div key={i} className="avatar">
              <Avatar source={img} />
            </div>
          ))}
        </div>
        <button className="button">SCHEDULE</button>
      </div>
    </div>
  );
};

export default Card;
