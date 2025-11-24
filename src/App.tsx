import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectPreview from './ProjectPreview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <h1>Hi, I'm Martin.</h1>
      <p>Welcome to my portfolio website!
      Here are links to my CV.

      </p>
      <div>Links</div>
      <h2>Creative Tools</h2>
      <ProjectPreview 
        title="Liquid Lissajous"
        description="2D WebGL render framework"
        image="/lissajousextract.png"
      />
      <ProjectPreview 
        title="2D WebGL Render Framework"
        description="2D WebGL render framework"
        image="/lissajousextract.png"
      />
      <ProjectPreview 
        title="Pins and Curves"
        description="2D WebGL render framework"
        image="/lissajousextract.png"
      />
      <h2>Math</h2>
      <ProjectPreview 
        title="Rotation + Translation = Rotation"
        description="2D WebGL render framework"
        image="/lissajousextract.png"
      />
      <ProjectPreview 
        title="Prelude to Galois Theory"
        description="2D WebGL render framework"
        image="/lissajousextract.png"
      />
      <ProjectPreview 
        title="Solutions to Artin Algebra"
        description="2D WebGL render framework"
        image="/lissajousextract.png"
      />
      <h2>Art & Design</h2>
      <ProjectPreview 
        title="Rebranding 'Coffee Break'"
        description="2D WebGL render framework"
        image="/lissajousextract.png"
      />
      <ProjectPreview 
        title="Martin Trifonov, the bear?"
        description="2D WebGL render framework"
        image="/lissajousextract.png"
      />
      <ProjectPreview 
        title="Making Sense of Branding"
        description="2D WebGL render framework"
        image="/lissajousextract.png"
      />
    </>
  )
}

export default App
