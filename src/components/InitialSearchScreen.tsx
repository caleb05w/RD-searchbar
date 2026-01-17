import svgPaths from "../imports/svg-z4fqpabjrv";
import { 
  VideosIllustration,
  QuestionBankIllustration,
  CheatsheetsIllustration,
  FlashcardsIllustration,
  DatabookIllustration,
  BootcampIllustration,
  GlossaryIllustration,
  VocabIllustration,
  LessonsIllustration,
  TextbookIllustration,
  ExamIllustration,
  PredictedPaperIllustration
} from "./FeatureIllustrations";

const recentSearches = [
  "Force",
  "Physics",
  "Aerodynamics",
  "Force Applications",
  "Client Side Rendering"
];

const features = [
  { name: "Videos", component: VideosIllustration, description: "Short Description" },
  { name: "QuestionBank", component: QuestionBankIllustration, description: "Short Description" },
  { name: "Cheatsheets", component: CheatsheetsIllustration, description: "Short Description" },
  { name: "Flashcards", component: FlashcardsIllustration, description: "Short Description" },
  { name: "Databook", component: DatabookIllustration, description: "Short Description" },
  { name: "Bootcamp", component: BootcampIllustration, description: "Short Description" },
  { name: "Glossary", component: GlossaryIllustration, description: "Short Description" },
  { name: "Vocab", component: VocabIllustration, description: "Short Description" },
  { name: "Lessons", component: LessonsIllustration, description: "Short Description" },
  { name: "Textbook", component: TextbookIllustration, description: "Short Description" },
  { name: "Exam", component: ExamIllustration, description: "Short Description" },
  { name: "Predicted Paper", component: PredictedPaperIllustration, description: "Short Description" },
];

interface InitialSearchScreenProps {
  showAllFeatures: boolean;
  setShowAllFeatures: (show: boolean) => void;
  onSearchHistoryClick: (searchTerm: string) => void;
}

export default function InitialSearchScreen({ showAllFeatures, setShowAllFeatures, onSearchHistoryClick }: InitialSearchScreenProps) {
  const displayedFeatures = showAllFeatures ? features : features.slice(0, 4);

  return (
    <div className="content-stretch flex flex-col items-start relative flex-1 w-full overflow-hidden">
      <style>{`
        @keyframes featureCardSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .content-stretch::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {/* Recent Searches - Animated collapse/expand */}
      <div 
        className="w-full transition-all overflow-hidden"
        style={{
          maxHeight: showAllFeatures ? '0px' : '150px',
          opacity: showAllFeatures ? 0 : 1,
          transitionDuration: '450ms',
          transitionTimingFunction: 'cubic-bezier(0.62, 0.61, 0.02, 1)',
          pointerEvents: showAllFeatures ? 'none' : 'auto',
        }}
      >
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[32px] py-[24px] relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 overflow-x-auto overflow-y-hidden w-full"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {recentSearches.map((search, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#D7D6E6] border-solid content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0 cursor-pointer hover:bg-[#f7f7f9] transition-colors whitespace-nowrap"
                onClick={() => onSearchHistoryClick(search)}
              >
                <p className="css-ew64yg font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.2] opacity-60 relative shrink-0 text-[#171c1d] text-[14px] tracking-[-0.49px]">
                  {search}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Features */}
      <div className="content-stretch flex flex-col items-start relative flex-1 w-full">
        {/* Header */}
        <div className="content-stretch flex items-center justify-between px-[32px] py-[24px] relative shrink-0 w-full">
          <p className="css-ew64yg font-['Manrope:Bold',sans-serif] font-bold leading-[1.2] opacity-60 relative shrink-0 text-[20px] text-black tracking-[-0.7px]">
            Popular Features
          </p>
          <button
            onClick={() => setShowAllFeatures(!showAllFeatures)}
            className="cursor-pointer"
          >
            <p className="css-ew64yg decoration-solid font-['Manrope:Bold',sans-serif] font-bold leading-[1.2] opacity-60 relative shrink-0 text-[#171c1d] text-[16px] tracking-[-0.56px] underline hover:opacity-80 transition-opacity">
              {showAllFeatures ? "Show Less" : "View All"}
            </p>
          </button>
        </div>

        {/* Features Grid */}
        <div 
          className="content-stretch flex flex-col gap-[24px] items-start px-[32px] pb-[24px] relative shrink-0 w-full overflow-hidden"
          style={{ 
            maxHeight: showAllFeatures ? "650px" : "300px",
            transitionDuration: '450ms',
            transitionTimingFunction: "cubic-bezier(0.62, 0.61, 0.02, 1)",
            transitionProperty: 'max-height',
          }}
        >
          <div className="grid grid-cols-4 gap-[16px] w-full">
            {displayedFeatures.map((feature, index) => {
              // Calculate delay for staggered animation
              const isNewCard = showAllFeatures && index >= 4;
              const animationDelay = isNewCard ? `${(index - 4) * 50}ms` : '0ms';
              
              return (
                <div
                  key={feature.name}
                  className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                  style={{
                    animation: isNewCard ? 'featureCardSlideIn 450ms cubic-bezier(0.62, 0.61, 0.02, 1) both' : 'none',
                    animationDelay: animationDelay,
                    width: '100%',
                  }}
                >
                  {/* Feature Card */}
                  <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#d7d6e6] border-b-[4px] border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-0 pointer-events-none rounded-[10px]" />
                    <div className="flex flex-col items-center size-full overflow-hidden">
                      <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[16px] relative size-full">
                        <feature.component />
                      </div>
                    </div>
                  </div>

                  {/* Feature Name */}
                  <div className="content-stretch flex flex-col items-center relative shrink-0 text-black">
                    <p className="css-ew64yg font-['Manrope:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[11px] tracking-[-0.385px] text-center">
                      {feature.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}