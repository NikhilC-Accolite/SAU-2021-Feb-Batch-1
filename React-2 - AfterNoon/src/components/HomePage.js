import "./componentStyles.css";
import image1 from "./images/d.jpg";

export const HomePage = () => {
  return (
    <div>
      <div>
        <img class="bg-image" src={image1}></img>
      </div>

      <div class="bg-text">Nikhil's Book Store</div>
      <div class="bg-quote">
        -- A room without books is like a body without a soul
      </div>
    </div>
  );
};
