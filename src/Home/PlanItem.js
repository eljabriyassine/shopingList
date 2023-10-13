import Stars from "./Stars";
export default function PlanItem({ Plant}) {
  console.log(Plant.link);
  return (
    <>
      <div className="relative m-3">
        <img
          src={Plant.link}
          alt={`this is the ${Plant.name}`}
          className="rounded-lg h-60	w-full"
        />
        <div className="absolute top-0 right-0 bg-emerald-300	 p-2 rounded text-lg">
          {Plant.price}$
        </div>
        <Stars numberSun={Plant.numberSun} numberWater={Plant.numberWater} />
        <div className=" px-1 text-lg">{Plant.name}</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ajouter
        </button>
      </div>
    </>
  );
}
