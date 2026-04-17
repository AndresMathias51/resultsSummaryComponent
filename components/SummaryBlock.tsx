import '@/components/SummaryBlock.css'
import Image from 'next/image'

type SummaryBlockProps = {
  imagen: string;
  alt: string;
  categoria: string;
  nota: number;
  color: string;
  background: string;
};

const SummaryBlock = ({imagen, alt, categoria, nota, color, background}: SummaryBlockProps) => {
  return (
    <div 
      className='contenedorCategoria'
      style={{ background: background }}
    >
      <div className='categoria'>
        <Image src={imagen} alt={alt} height={20} width={20} />
        <span 
          className='textoCategoria'
          style={{ color: color }}
        >
          {categoria}
        </span>
      </div>
      <div className='nota'>
        <span className='textoNota'>{nota} </span>
        <span className='ponderacion'>/ 100</span>
      </div>
    </div>
  )
}

export default SummaryBlock