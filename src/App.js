import React from "react"
import styled from "styled-components"
import "./App.css"

const Container = styled("section")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-wrap: wrap;
  width: 50vw;
`

const Img = styled("img")`
  max-width: 200px;
  max-height: 200px;
`
const App = () => {
  const instruments = [
    { id: 1, src: "/images/instruments/violin.jpg", title: "violin" },
    { id: 2, src: "/images/instruments/viola.png", title: "viola" },
    { id: 3, src: "/images/instruments/cello.jpg", title: "cello" },
    { id: 4, src: "/images/instruments/bass.jpg", title: "bass" },
    { id: 5, src: "/images/instruments/flute.jpg", title: "flute" },
    { id: 6, src: "/images/instruments/oboe.jpg", title: "oboe" },
    { id: 7, src: "/images/instruments/clarinet.jpg", title: "clarinet" },
    { id: 8, src: "/images/instruments/bassoon.jpg", title: "bassoon" },
    { id: 9, src: "/images/instruments/trumpet.jpg", title: "trumpet" },
    {
      id: 10,
      src: "/images/instruments/frenchhorn.jpg",
      title: "french horn"
    },
    { id: 11, src: "/images/instruments/tuba.jpg", title: "tuba" },
    { id: 12, src: "/images/instruments/trombone.jpg", title: "trombone" },
    { id: 13, src: "/images/instruments/percussion.jpg", title: "percussion" },
    { id: 14, src: "/images/instruments/harp.jpg", title: "harp" }
  ]
  return (
    <>
      <Container>
        {instruments.map(({ id, src, title }) => (
          <Img key={id} src={src} title={title} alt={title} />
        ))}
      </Container>
    </>
  )
}

export default App
