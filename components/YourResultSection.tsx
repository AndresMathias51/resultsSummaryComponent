import '@/components/YourResultSection.css';

const YourResultSection = () => {
  return (
    <div className='resultSection'>
      <h2 className='titulo'>Your Result</h2>
      <div className="circuloPuntaje">
        <span className="puntaje">76</span>
        <span className="total">of 100</span>
      </div>
      <h3 className="grado">Great</h3>
      <p className='descripcion'>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  )
}

export default YourResultSection