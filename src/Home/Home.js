import { useState } from "react";
import Cart from "./Cart";
import Categories from "./Categories";
import ShoppingList from "./ShoppingList";

export default function Home() {
  const [category,setCategory] = useState('classique')
  return (
    <div className="flex flex-row max-w-6xl mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
      <div className="w-1/3 mt-10">
        <Cart />
      </div>
      <div className="flex w-full justify-center flex-col items-center mx-10">
        <Categories setCategory={setCategory}/>
        <ShoppingList category ={category} />
      </div>
    </div>
  );
}
