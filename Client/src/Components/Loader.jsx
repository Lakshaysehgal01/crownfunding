import { loader } from "../assets";
function Loader() {
  return (
    <div className="z-10 fixed inset-0 h-screen bg-black opacity-70 flex items-center justify-center flex-col">
      <img
        src={loader}
        alt="loader"
        className="w-[100px] h-[100px] object-contain"
      />
      <p className="mt-[20px] font-epilogue font-bold text=[20px] text-center text-white">
        Transaction in progress
        <br />
        Please Wait ...
      </p>
    </div>
  );
}

export default Loader;
