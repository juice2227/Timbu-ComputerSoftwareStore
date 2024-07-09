import { useState } from 'react';

export default function Price() {
    const [minPrice, setMinPrice] = useState(0); // Initial minimum price
    const [maxPrice, setMaxPrice] = useState(1000); // Initial maximum price
    const [progressMin, setProgressMin] = useState(0); // Initial progress for min price (percentage)
    const [progressMax, setProgressMax] = useState(100); // Initial progress for max price (percentage)
  
    // Function to handle dragging of the progress bar handles
    const handleMinDrag = (e) => {
      const rect = e.target.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const progressBarWidth = rect.width;
      let newPosition = (offsetX / progressBarWidth) * 100; // Calculate position in percentage
  
      // Ensure newPosition is within valid range
      if (newPosition < 0) {
        newPosition = 0;
      } else if (newPosition > progressMax) {
        newPosition = progressMax;
      }
  
      setProgressMin(newPosition);
      const newMinPrice = Math.round((newPosition / 100) * maxPrice); // Calculate corresponding price
      setMinPrice(newMinPrice);
    };
  
    const handleMaxDrag = (e) => {
      const rect = e.target.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const progressBarWidth = rect.width;
      let newPosition = (offsetX / progressBarWidth) * 100; // Calculate position in percentage
  
      // Ensure newPosition is within valid range
      if (newPosition > 100) {
        newPosition = 100;
      } else if (newPosition < progressMin) {
        newPosition = progressMin;
      }
  
      setProgressMax(newPosition);
      const newMaxPrice = Math.round((newPosition / 100) * 1000); // Calculate corresponding price
      setMaxPrice(newMaxPrice);
    };
  return (
    <div>
          <div>
          <h3 className="font-semibold mb-2">Price</h3>
          <div className="relative h-4 bg-gray-200 rounded-full" style={{ maxWidth: '100%' }}>
            <div
              className="absolute top-0 left-0 bg-yellow-400 h-full rounded-full"
              style={{ width: `${progressMin}%`, pointerEvents: 'none' }}
            ></div>
            <div
              className="absolute top-0 left-0 bg-yellow-400 h-full rounded-full"
              style={{ width: `${progressMax - progressMin}%`, left: `${progressMin}%`, pointerEvents: 'none' }}
            ></div>
            <div
              className="absolute top-0 -ml-1 mt-1 w-4 h-4 bg-yellow-400 rounded-full cursor-pointer"
              style={{ left: `${progressMin}%`, transform: 'translate(-50%, -50%)' }}
              draggable="true"
              onDrag={handleMinDrag}
            ></div>
            <div
              className="absolute top-0 -ml-1 mt-1 w-4 h-4 bg-yellow-400 rounded-full cursor-pointer"
              style={{ left: `${progressMax}%`, transform: 'translate(-50%, -50%)' }}
              draggable="true"
              onDrag={handleMaxDrag}
            ></div>
          </div>
          <div className="flex justify-between mt-2">
            <span>Min price: {minPrice}</span>
            <span>Max price: {maxPrice}</span>
          </div>
        </div>
    </div>
  )
}
