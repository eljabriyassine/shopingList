export default function Cart() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6   transform transition-transform ">
      {/* Close button */}
      <div className="flex justify-end">
        <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Fermer
        </button>
      </div>
      <div className="text-2xl font-semibold mb-4">Panier</div>
      <ul className="list-disc pl-6 mb-4">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
      <div className="text-2xl font-semibold mb-4">Totat : 350$</div>
      <div className="bg-blue-500 text-white inline-block px-4 py-2 rounded-lg hover:bg-blue-700">
        <button>Voir le Panier</button>
      </div>
    </div>
  );
}
