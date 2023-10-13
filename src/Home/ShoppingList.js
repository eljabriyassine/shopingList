import Plants from "../assets/Data/Plants";
import PlanItem from "./PlanItem";

export default function ShoppingList({ category }) {
  const filerdPlans = Plants.filter((plant) => plant.category === category);

  return (
    <div className="flex flex-wrap ">
      {filerdPlans.map((Plant) => (
        <div key={Plant.id} className="w-full sm:w-1/2 md:w-1/3  px-3">
          <PlanItem key={Plant.id} Plant={Plant} />
        </div>
      ))}
    </div>
  );
}
