import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import styled from "styled-components"

const Content = styled("section")`
  
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
const Container = styled("div")`
background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
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
const Navbar = styled("div")`
  position: fixed;
  height: 100px;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  text-decoration: none;
`
const NavItemsWrapper = styled("div")`
  padding: 0 144px;
  height: 100%;
  color: black;
  padding-right: 0;
  margin: 0 auto;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 6vw;
`

const NavItem = styled("p")`
  font-family: "Baloo Bhai", cursive;
  text-decoration: none;
  font-size: 3em;
  :hover {
    color: red;
  }
`
const Instrument = props => {
  return (
    <>
    <Container>
      <Navbar>
        <NavItemsWrapper>
          <Link to="/">
            <NavItem>Home</NavItem>
          </Link>
        </NavItemsWrapper>
      </Navbar>
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

          {props.songs.map(({ songTitle, link }) => (
            <a href={link}>
              <h1
                stlye={{
                  fontStyle: "bold",
                  textDecoration: "none",
                  color: "black"
                }}
              >
                {songTitle}
              </h1>
            </a>
          ))}
        </DescSection>
      </Content>
</Container>
    </>
  )
}

export default Instrument
