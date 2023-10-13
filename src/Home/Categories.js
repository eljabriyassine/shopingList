export default function Categories({setCategory}) {
  const CategoriesHandler = (e)=>{
    setCategory(e.target.value)
  }

  return (
    <div className="flex items-center mb-3">
      <select
        name="category"
        className="bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
        onChange={CategoriesHandler}
      >
        <option value="extérieur" selected> extérieur</option>
        <option value="plante grasse">plante grasse</option>
        <option value="classique">classique</option>
      </select>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
        Renisialer
      </button>
    </div>
  );
}
