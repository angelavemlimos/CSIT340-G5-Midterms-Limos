import Intro from "./Intro";
import Stats from "./Stats";
import Contribute from "./Contribute";
 
function Hero({
  stars,
  downloads,
  issues,
  onStar,
  onDownload,
  onReport,
onReset,}) {
  return (
    <>
      <Intro
        author="Angela Vem D. Limos"
      />
      <div className="flex justify-center gap-4 py-6">
        <button
          className="cursor-pointer rounded-lg bg-[#800020] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={onStar}
        >
          Star
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#D45060] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={onDownload}
        >
          Download
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#000000] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={onReport}
        >
          Report issue
        </button>
        <button
          className="cursor-pointer rounded-lg border border-[#800020] px-8 py-3 text-xl font-bold"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
      <Stats stars={stars} downloads={downloads} issues={issues} />
      <Contribute issues={issues} />
    </>
  );
}
 
export default Hero;