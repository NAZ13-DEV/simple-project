import { useState } from "react";
import Star from "./Star";

const StarRating = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(1);
  const [tempRating, setTempRating] = useState(0);
  return (
    <div className="flex items-center gap-[16px]">
      <div className="flex gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => setRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i +1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p className="m-0 text-2xl">{tempRating || rating || ""}</p>
    </div>
  );
};

export default StarRating;
