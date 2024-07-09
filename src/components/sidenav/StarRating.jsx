
import star1 from '../../assets/images/1.png';
import star2 from '../../assets/images/2.png';
import star3 from '../../assets/images/3.png';
import star4 from '../../assets/images/4.png';
import star5 from '../../assets/images/5.png';

export default function StarRating() {
  return (
    <div className="max-w-xs mx-auto">
      <div className="absolute left-0">
        <h3 className="text-xl font-semibold mb-4">Rating</h3>
        <label className="flex items-left mb-2">
          <input type="checkbox" name="star5" id="star5" className="" disabled/>
          <img src={star5} alt="star5" className="w-20 h-10 cursor-pointer" />
        </label>
        <label className="flex items-center mb-2">
          <input type="checkbox" name="star4" id="star4" className="" checked readOnly />
          <img src={star4} alt="star4" className="w-20 h-10 cursor-pointer" />
        </label>
        <label className="flex items-center ">
          <input type="checkbox" name="star3" id="star3" className="" disabled />
          <img src={star3} alt="star3" className="w-20 h-10 cursor-pointer" />
        </label>
        <label className="flex items-center left-0">
          <input type="checkbox" name="star2" id="star2" className="" disabled/>
          <img src={star2} alt="star2" className="w-20 h-10 cursor-pointer" />
        </label>
        <label className="flex items-center left-0">
          <input type="checkbox" name="star1" id="star1" className="" disabled/>
          <img src={star1} alt="star1" className="w-20 h-10 cursor-pointer" />
        </label>
      </div>
    </div>
  );
}
