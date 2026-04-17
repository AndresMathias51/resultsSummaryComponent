import SummarySection from "@/components/SummarySection";
import YourResultSection from "@/components/YourResultSection";
import '@/components/ResultsCard.css';

const ResultsCard = () => {
  return (
    <div className="resultsCard">
      <div className="yourResultSection">
        <YourResultSection/>
      </div>
      <div className="summarySection">
        <SummarySection/>
      </div>
    </div>
  )
}

export default ResultsCard