import sun from "../assets/Photos/sun.svg";
import water from "../assets/Photos/water.svg";

export default function Stars({ numberSun, numberWater }) {
  const sunStarsArray = [];
  const waterStarsArray = [];

  // Add the sun icons to the sunStarsArray
  for (let i = 0; i < numberSun; i++) {
    sunStarsArray.push(
      <img
        key={`sun-${i}`}
        src={sun}
        alt="this is sunStart"
        className="w-4 h-4 my-1"
      />
    );
  }

  // Add the water icons to the waterStarsArray
  for (let i = 0; i < numberWater; i++) {
    waterStarsArray.push(
      <img
        key={`water-${i}`}
        src={water}
        alt="this is water"
        className="w-4 h-4 my-1"
      />
    );
  }

  return (
    <>
      <div className="flex space-between">
        {sunStarsArray.map((star) => (
          <span key={star.key}>{star}</span>
        ))}
      </div>
      <div className="flex">
        {waterStarsArray.map((star) => (
          <span key={star.key}>{star}</span>
        ))}
      </div>
    </>
  );
}
