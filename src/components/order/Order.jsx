import cong from '../../assets/images/cong.png';

export default function Order() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <nav className="flex items-center justify-between bg-gray-100 w-full p-4"> 
        <div className="space-y-1">
          <span className="block h-0.5 w-5 bg-black"></span>
          <span className="block h-0.5 w-5 bg-black"></span>
          <span className="block h-0.5 w-5 bg-black"></span>
        </div>
        <h3>Timbu</h3>
        <p>Order Received</p>
      </nav>

      <h3 className="text-center text-gray mt-12">Thank You for Your Purchase!! 🌟</h3>
      <h2 className="text-center text-2xl font-bold mb-2">Order Successfully Placed!!</h2>
      <img src={cong} alt="" className="h-12 w-12 mb-4" />
      <hr className="w-28 border-t-1 border-gray-500 mb-6" />
      <h3 className="mb-2">Order History</h3>

      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <label htmlFor="" className="mr-2">Order number:</label>
          <span>#001</span>
        </div>
        <div className="flex items-center">
          <label htmlFor="" className="mr-2">Date:</label>
          <span>July, 7th 2024</span>
        </div>
      </div>

      <button className="bg-yellow-500 text-black px-4 py-2 rounded mt-4">Continue Shopping</button>
    </div>
  );
}
