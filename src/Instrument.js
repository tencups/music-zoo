import React from "react"
import styled from "styled-components"

const Content = styled("section")`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
const ImageSection = styled("section")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
const DescSection = styled("section")`
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30%;
`
const Img = styled("img")`
  width: 60%;
  height: auto;
`

const Instrument = props => {
  return (
    <>
      <Content>
        <ImageSection>
          <Img src={props.artists} />
          <p>{props.artistdesc}</p>
        </ImageSection>
        <DescSection>
          <h1 style={{ fontSize: "3em" }}>{props.title}</h1>
          <h3 style={{ marginTop: "-10px" }}>{"Type: " + props.type}</h3>
          <h1 style={{ fontWeight: "500" }}>{props.desc}</h1>
          <h1 style={{ fontWeight: "500" }}>{props.uses}</h1>
        </DescSection>
      </Content>
    </>
  )
}

export default Instrument
