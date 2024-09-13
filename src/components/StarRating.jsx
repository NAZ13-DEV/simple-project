import { useState } from "react";
import Star from "./Star";

const StarRating = ({ maxRating = 5, color="#ffd700" ,size= 48, className="", messages=[], defaultRating=0 , onSetRating }) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
  const stylingContainer={
    display:"flex",
    gap:"16px",
    alignItems: "center",
  }
  const smallerDiv={
    display:"flex",
    gap:"4px",
  }
  const textStyle ={
    margin: "0",
    lineHeight: "1",
    color,
    fontSize: `${size / 1.5}px`
  }
  function handleRating(rating){
    setRating(rating);
    onSetRating(rating);
  }
  return (
    <div style={stylingContainer} className={className}>
      <div style={smallerDiv}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i +1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{messages.length === maxRating ? messages[tempRating ? tempRating - 1 : rating - 1] : tempRating || rating || ""}</p>
    </div>
  );
};

export default StarRating;
