import svgPaths from "./svg-ri36sjzztc";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8.121px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <div className="aspect-[18/18] h-full relative shrink-0" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path clipRule="evenodd" d={svgPaths.p2a7ab180} fill="var(--fill-0, #A684FF)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="css-ew64yg font-['Manrope:Bold',sans-serif] font-bold leading-[1.2] opacity-90 relative shrink-0 text-[#171c1d] text-[8.121px] tracking-[-0.2842px]">Videos</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[16.242px] py-[8.121px] relative size-full">
      <Frame1 />
      <p className="css-ew64yg font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.2] opacity-60 relative shrink-0 text-[#171c1d] text-[8.121px] tracking-[-0.2842px]">6</p>
    </div>
  );
}