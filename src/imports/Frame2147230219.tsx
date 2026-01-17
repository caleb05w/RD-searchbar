function Frame2() {
  return (
    <div className="content-stretch flex items-center px-0 py-[2.03px] relative self-stretch shrink-0">
      <div className="bg-[#747778] h-full shrink-0 w-[0.761px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4.568px] items-start relative shrink-0">
      <p className="css-ew64yg font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.2] opacity-60 relative shrink-0 text-[#171c1d] text-[8.121px] tracking-[-0.2842px]">Lesson</p>
      <Frame2 />
      <p className="css-ew64yg font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.2] opacity-60 relative shrink-0 text-[#171c1d] text-[8.121px] tracking-[-0.2842px]">5 Min</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[6.091px] items-start relative shrink-0">
      <p className="css-ew64yg font-['Manrope:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[8.121px] text-black tracking-[-0.2842px]">{`6.2.2 Principles of Form and function `}</p>
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#00a63e] content-stretch flex items-center justify-center px-[3.045px] py-[2.03px] relative rounded-[2.03px] shrink-0">
      <p className="css-ew64yg font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[8.121px] text-white tracking-[-0.1624px]">NEW</p>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[16.242px] py-[12.182px] relative size-full">
      <Frame />
      <div className="absolute bg-[#f0b100] h-[9.644px] left-[116.99px] opacity-42 top-[12.18px] w-[34.261px]" />
      <Frame4 />
    </div>
  );
}