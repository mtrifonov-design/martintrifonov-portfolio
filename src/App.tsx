import { useState } from 'react'
import './App.css'
import ProjectPreview from './ProjectPreview'
import { GitHub, Linkedin, Youtube } from 'react-feather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <img src={"/profilepicture.jpg"} className="logo" alt="Profile picture of Martin" />
        <div style={{
          fontSize: '1.5rem',
        }}>
          <div style={{
            fontWeight: '600',
          }}>
            Martin Trifonov
          </div>
          <a href="mailto:mtrifonov.design@gmail.com">mtrifonov.design@gmail.com</a>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0.5rem',
                  marginTop: '0.2rem',
                  alignItems: 'center',
                }}>
                  <a href="https://www.youtube.com/@martintrifonov" target='_blank'><Youtube /></a>
                  <a href="https://www.linkedin.com/in/martin-trifonov-945581196/" target='_blank'><Linkedin /></a>
                  <a href="https://github.com/mtrifonov-design" target='_blank'><GitHub /></a>
                  <a href="https://mtrifonov.notion.site/mtrifonov/Martin-Trifonov-910d65b2c7054243a136ce461635c6d9" target='_blank'>CV</a>
                </div>
        </div>
      </div>
      <div style={{
        height: '2rem',
      }}></div>
      {/* <h2>Creative Tools</h2> */}
      <ProjectPreview
        title="Liquid Lissajous"
        description="Web app for creating looping gradient animations."
        impact="500+ exported animations"
        href="https://liquidlissajous.pinsandcurves.app"
        image="/liquidlissajous_thumb.jpg"
      />
      <ProjectPreview
        title="2D WebGL Graphics Engine"
        description="Graphics library inspired by render-graph architectures."
        image="/pinsandcurvesengine_thumb.jpg"
        href="https://github.com/mtrifonov-design/pinsandcurves-engine"
      />
      <ProjectPreview
        title="Pins and Curves"
        description="A platform offering small generative web tools for designers."
        image="/pinsandcurves_thumb.jpg"
        href="https://pinsandcurves.app"
      />
      <ProjectPreview
        title="Rotation + Translation = Rotation"
        description="Visual proof of a linear algebra theorem, animated with a custom engine."
        impact="70k+ views; honorable mention in 3Blue1Brown's SoME3 contest"
        image="/rotationtranslation_thumb.jpg"
        href="https://youtu.be/1EpQtVJb0OU"
      />
      <ProjectPreview
        title="Prelude to Galois Theory"
        description="An introduction to symmetric polynomials and their role in Galois theory."
        impact="50k+ views"
        image="/preludetogaloistheory_thumb.jpg"
        href="https://youtu.be/3imeTgGBaLc"
      />
      {/* <ProjectPreview
        title="Solutions to Artin Algebra"
        description="2D WebGL render framework"
        image="/algebra_thumb.jpg"
      />
      <h2>Art & Design</h2> */}
      {/* <ProjectPreview
        title="Rebranding 'Coffee Break'"
        description="2D WebGL render framework"
        image="/coffeebreak_thumb.jpg"
      /> */}
      {/* <ProjectPreview
        title="Martin Trifonov, the bear?"
        description="2D WebGL render framework"
        image="/martintrifonovthebear_thumb.jpg"
      />
      <ProjectPreview
        title="Making Sense of Branding"
        description="2D WebGL render framework"
        image="/makingsenseofbranding_thumb.jpg"
      /> */}
    </>
  )
}

export default App
