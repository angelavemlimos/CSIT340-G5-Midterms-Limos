import { useState } from "react";
 
function Contribute({ issues }) {
  const [contributors, setContributors] = useState(0);
  const openIssues = Math.max(issues - contributors, 0);
 
  return (
    <section className="mx-auto mb-8 flex w-fit flex-col items-center gap-4 rounded-xl bg-[#F3E6D5] px-10 py-4 text-center">
      <p className="text-xl font-bold">Contributors: {contributors}</p>
      <p className="text-xl font-bold">Open issues: {openIssues}</p>
      <div className="flex gap-4">
        <a
          className="rounded-lg bg-[#000000] px-6 py-3 font-bold text-[#FFF9F2]"
          href="https://github.com/angelavemlimos/CSIT340-G5-Midterms-Limos"
          target="_blank"
          rel="noreferrer"
          onClick={() => setContributors((count) => count + 1)}
        >
          GitHub
        </a>
        <button
          className="rounded-lg border border-[#000000] px-6 py-3 font-bold"
          onClick={() => setContributors(0)}
        >
          Clear
        </button>
      </div>
    </section>
  );
}
 
export default Contribute;