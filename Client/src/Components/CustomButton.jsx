function CustomButton({ type, title, onClick, style }) {
  return (
    <button
      type={type}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${style}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
