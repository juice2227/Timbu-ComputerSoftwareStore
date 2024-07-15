import { useState } from 'react';

export default function Price() {
    const [minPrice, setMinPrice] = useState(0); 
    const [maxPrice, setMaxPrice] = useState(1000); 
    const [progressMin, setProgressMin] = useState(0); 
    const [progressMax, setProgressMax] = useState(100); 
  
    
    const handleMinDrag = (e) => {
      const rect = e.target.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const progressBarWidth = rect.width;
      let newPosition = (offsetX / progressBarWidth) * 100; 
  
      
      if (newPosition < 0) {
        newPosition = 0;
      } else if (newPosition > progressMax) {
        newPosition = progressMax;
      }
  
      setProgressMin(newPosition);
      const newMinPrice = Math.round((newPosition / 100) * maxPrice); 
      setMinPrice(newMinPrice);
    };
  
    const handleMaxDrag = (e) => {
      const rect = e.target.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const progressBarWidth = rect.width;
      let newPosition = (offsetX / progressBarWidth) * 100; 
  
      
      if (newPosition > 100) {
        newPosition = 100;
      } else if (newPosition < progressMin) {
        newPosition = progressMin;
      }
  
      setProgressMax(newPosition);
      const newMaxPrice = Math.round((newPosition / 100) * 1000); 
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
