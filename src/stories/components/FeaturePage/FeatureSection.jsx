import { dummyData } from "./index";
import FeatureCard from "./FeatureCard";
import './feature.css';

const FeatureSection = (props) => {

    const { variant, children, ...rest } = props;
    
  return (
    <div className="feat_sect">
      <h2>Featured Products</h2>
      <div className="cards_ctn">
        {dummyData.map((product, id) => (
          <FeatureCard key={id + product.name} {...product} />
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
