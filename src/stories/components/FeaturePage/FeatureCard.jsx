import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineSavedSearch } from "react-icons/md";
import './feature.css';

function FeatureCard({ images, title, code, price }) {
  return (
    <div className="card">
      <div className="card-top">
        <div className="top-icons">
          <span className="icon">
            <IoCartOutline />
          </span>
          <span className="icon">
            <FaRegHeart />
          </span>
          <span className="icon">
            <MdOutlineSavedSearch />
          </span>
        </div>
        <div>
          <img src={images} alt={title} />
        </div>
        <div>
          <input type="button" value="View Details" />
        </div>
      </div>

      <div className="card-btm">
        <h3>{title}</h3>
        <div className="tags">
            <div className="tag1" />
            <div className="tag2" />
            <div className="tag3" />
        </div>
        <p>{code}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default FeatureCard;