import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectPreview from './ProjectPreview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='header'>
      <img src={"/profilepicture.jpg"} className="logo" alt="Vite logo" />
      <h2>Hi, I'm Martin! <br></br> 
      I'm a Creative Technologist living in Berlin.</h2>
    </div>

      <p>Welcome to my portfolio website!
      Here are links to my CV.

      </p>
      <div>Links</div>
      <h2>Creative Tools</h2>
      <ProjectPreview 
        title="Liquid Lissajous"
        description="2D WebGL render framework"
        image="/liquidlissajous_thumb.jpg"
      />
      <ProjectPreview 
        title="2D WebGL Render Framework"
        description="2D WebGL render framework"
        image="/pinsandcurvesengine_thumb.jpg"
      />
      <ProjectPreview 
        title="Pins and Curves"
        description="2D WebGL render framework"
        image="/pinsandcurves_thumb.jpg"
      />
      <h2>Math</h2>
      <ProjectPreview 
        title="Rotation + Translation = Rotation"
        description="2D WebGL render framework"
        image="/rotationtranslation_thumb.jpg"
      />
      <ProjectPreview 
        title="Prelude to Galois Theory"
        description="2D WebGL render framework"
        image="/preludetogaloistheory_thumb.jpg"
      />
      <ProjectPreview 
        title="Solutions to Artin Algebra"
        description="2D WebGL render framework"
        image="/algebra_thumb.jpg"
      />
      <h2>Art & Design</h2>
      <ProjectPreview 
        title="Rebranding 'Coffee Break'"
        description="2D WebGL render framework"
        image="/coffeebreak_thumb.jpg"
      />
      <ProjectPreview 
        title="Martin Trifonov, the bear?"
        description="2D WebGL render framework"
        image="/martintrifonovthebear_thumb.jpg"
      />
      <ProjectPreview 
        title="Making Sense of Branding"
        description="2D WebGL render framework"
        image="/makingsenseofbranding_thumb.jpg"
      />
    </>
  )
}

export default App
