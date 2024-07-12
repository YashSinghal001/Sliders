import React,{useState} from 'react'

export const Slide = () => {
    const Image=[ 
         "https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297194.jpg?t=st=1720341566~exp=1720345166~hmac=88fed55b830113df7b5e02899847085073265aa6870e568b1601a3df6649571a&w=996",

        "https://img.freepik.com/free-photo/view-world-monument-celebrate-world-heritage-day_23-2151297247.jpg?t=st=1720341578~exp=1720345178~hmac=a0e59d565649f1fa53ae4bf9d79525a9a2443036bcedf9cae9ed2e2bfbcf3c46&w=996",

        "https://img.freepik.com/free-photo/buddha-statue-with-natural-water-landscape_23-2150773967.jpg?t=st=1720341633~exp=1720345233~hmac=147b2ffa5a3adcb55216ae1662f203d7ff82e66dcebeee8e7b33d9057da3c46a&w=996",

        "https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297159.jpg?t=st=1720341758~exp=1720345358~hmac=5a704c5accb10ec783729724a17ceb2b6e356be9af3d983d4f4b9162cd985ddf&w=996",

        "https://img.freepik.com/free-photo/view-world-monument-celebrate-world-heritage-day_23-2151297215.jpg?t=st=1720341770~exp=1720345370~hmac=f46876539792bf5c227baf87e7a0136a8ed9daf99ec0fc1a9a8444f4b37158b7&w=996"
    ]

const [slide, setSlide] = useState(0)
const previous = () => {
    setSlide((x) => (x === 0 ? Image.length - 1 : x - 1))
  }
  const next = () => {
    setSlide((x) => (x === Image.length - 1 ? 0 : x + 1))
  }
  return (
    <div>
    <h1 style={{textAlign:"center"}}>Monuments</h1>
    <div className="slider-container">
      
      <button className="slider-button" onClick={previous}>◀</button>
      <img className="slider-image" src={Image[slide]} alt="" />
      <button className="slider-button" onClick={next}>▶</button>
    </div>
</div>
  );
};
