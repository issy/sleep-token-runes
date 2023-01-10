const CentreDot = () => <circle cx={55} cy={55} r={7}/>
const ElongatedEllipse = () => <ellipse cx={55} cy={55} rx={45} ry={50} strokeWidth={4} stroke="black" fill="none"/>
const Tent = ({ y, lineLength = 10 }: {y: number, lineLength?: number}) => (<>
  <line x1={55 - lineLength} y1={55 + y + lineLength} x2={55} y2={55 + y} strokeWidth={4} stroke="black"/>
  <line x1={55 + lineLength} y1={55 + y + lineLength} x2={55} y2={55 + y} strokeWidth={4} stroke="black"/>
</>)
const Diamond = ({ transform = "" }) => <path transform={transform} d="M 5 55 l 50 -50 l 50 50 l -50 50 Z l 100 0" stroke="black" strokeWidth={4} fill="none"/>
const FilledPyramid = ({ transform = "", rotate = false }) => <path transform={(rotate ? "rotate(180 55 55)" : "") + transform} d="M 5 55 l 50 -50 l 50 50 Z" fill="black"/>

const A = ({ rx = 45, ry = 50, lineLength = 10 }) => (
  <svg height={125} width={125}>
    <Tent y={ry}/>
    <ElongatedEllipse/>
    <CentreDot/>
  </svg>
)

const B = () => (
  <svg height={125} width={125}>
    <Diamond/>
  </svg>
)

const C = () => (
  <svg height={125} width={125}>
    <Diamond/>
    <FilledPyramid rotate/>
  </svg>
)

const D = () => (
  <svg height={125} width={125}>
    <Diamond/>
    <FilledPyramid/>
  </svg>
)

const E = () => (
  <svg height={75} width={125}>
    <path d="M 5 25 l 100 0" strokeWidth={4} stroke="black" fill="none"/>
    <path d="M 55 25 q 0 15 -15 30" strokeWidth={4} stroke="black" fill="none"/>
    <path d="M 55 25 q 0 15 15 30" strokeWidth={4} stroke="black" fill="none"/>
  </svg>
)

const G = () => (
  <svg height={125} width={125}>
    <path d="M 5 55 l 50 -50 l 50 50 l -50 50 Z" strokeWidth={4} stroke="black" fill="none"/>
    <CentreDot/>
  </svg>
)

const O = () => (
  <svg height={100} width={125}>
    <path transform="translate(5 5)" d="M 35 0 v 80 h 30 v -80" fill="none" strokeWidth={4} stroke="black"/>
  </svg>
)

const S = () => (
  <svg height={125} width={125}>
    <path d="M 45 5 l 10 10" strokeWidth={4} stroke="black"/>
    <path d="M 65 5 l -10 10" strokeWidth={4} stroke="black"/>
    <Diamond transform="translate(0 10)"/>
    <FilledPyramid transform="translate(0 -10)" rotate/>
  </svg>
)

export const Alphabet = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    {/*<A/><B/><C/><D/><E/><G/><O/><S/>*/}
    <B/><O/><O/><B/><S/>
  </div>
)

// abcdegos
// hiklmntu
