// const items = [{ id: 1 }, { id: 2 }, { id: 3 }]
export default function HairTreatmentFeature() {
  return (
   <div className="overflow-hidden rounded-lg bg-gray-800/50">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-bold text-white">Hair Styling</h3>
        <p className="mt-2 text-gray-300">
          Professional hair styling for any occasion. Includes wash, cut, and finish styling.
        </p>
        <button className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500">
          Book Now
        </button>
      </div>
    </div>
  );
}
