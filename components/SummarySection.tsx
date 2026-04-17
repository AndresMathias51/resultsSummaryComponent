import SummaryBlock from "@/components/SummaryBlock"
import '@/components/SummarySection.css'

const SummarySection = () => {
  return (
    <div className="contenedorSummary">
      <h3 className="textoSummary">Summary</h3>
      <SummaryBlock
        imagen="/icon-reaction.svg"
        alt="reaction"
        categoria="Reaction"
        nota={80}
        color="var(--Light_red)"
        background="var(--Light_red_fondo)"
        />
        <SummaryBlock
        imagen="/icon-memory.svg"
        alt="memory"
        categoria="Memory"
        nota={92}
        color="var(--Orangey_yellow)"
        background="var(--Orangey_yellow_fondo)"
        />
        <SummaryBlock
        imagen="/icon-verbal.svg"
        alt="verbal"
        categoria="Verbal"
        nota={61}
        color="var(--Green_teal)"
        background="var(--Green_teal_fondo)"
        />
        <SummaryBlock
        imagen="/icon-visual.svg"
        alt="visual"
        categoria="Visual"
        nota={73}
        color="var(--Cobalt_blue)"
        background="var(--Cobalt_blue_fondo)"
        />
        <button className="boton">
          Continue
        </button>
    </div>
  )
}

export default SummarySection