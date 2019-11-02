import React from "react"
import styled from "styled-components"
import Instrument from "./Instrument"
import { BrowserRouter, Route, Link } from "react-router-dom"
import "./App.css"

const InstrumentContainer = styled("section")`
  display: flex;
  font-family: "Baloo Bhai", cursive;
  justify-content: center;
  align-items: center;
  height: 50vh;
  flex-wrap: wrap;
  width: 100%;
`

const Logo = styled("h1")`
  text-align: center;
  font-size: 5em;
  font-family: "Baloo Bhai", cursive;
`

const Desc = styled("h3")`
  font-style: italic;
  font-size: 3em;
  text-align: center;
  font-family: "Baloo Bhai", cursive;
`

const Img = styled("img")`
  max-width: 20vw;
  max-height: 20vh;
  margin-right: 30px;
  transition: transform 0.3s ease-in-out;
  :hover {
    transform: rotate(-20deg);
  }
`
const App = () => {
  const instruments = [
    {
      id: 1,
      src: "/images/instruments/violin.jpg",
      artists: "/images/artists/raychen.jpg",
      artistdesc: "Violinist Ray Chen, Concert Soloist",
      type: "String",
      title: "Violin",
      desc:
        "The violin is a string instrument which has four strings and is played with a bow. The violin is held between the left collar bone and the chin. Pressing down on the string at different positions with the left and bowing with right will create different pitches. ",
      uses:
        "Nearly every composer wrote for the violin, whether as a solo instrument, in chamber music, in orchestral music, folk music, and even in jazz. As you can tell, violin is capable of playing many different stlyes."
    },
    {
      id: 2,
      src: "/images/instruments/viola.png",
      artists: "/images/artists/davidaaroncarpenter.jpg",
      artistdesc: "Violist David Aaron Carpenter, Concert Soloist",
      type: "String",
      title: "Viola",
      desc:
        "Just like the violin, the viola is also a string instrument that has four strings and is played with a bow. The viola is also held between the left collar bone and the chin and is played the same way as the violin. Unlike the violin, the viola is capable of playing lower pitches than the violin.",
      uses:
        "Because of the viola's lower range, they are more known for playing the harmony in ensemble groups. But just like the violin, it is also capable of playing many styles of music such as solo instrument, chamber, orchestral, folk and jazz."
    },
    {
      id: 3,
      src: "/images/instruments/cello.jpg",
      artists: "/images/artists/yoyoma.jpg",
      artistdesc: "Cellist Yo-Yo Ma, Concert Soloist",
      type: "String",
      title: "Cello",
      desc: ""
    },
    {
      id: 4,
      src: "/images/instruments/bass.jpg",
      artists: "/images/artists/alexanderhanna.jpg",
      artistdesc:
        "Bassist Alexander Hanna, Chicago Symphony Orchestra Principal Bass",
      type: "String",
      title: "Bass",
      desc: " lr"
    },
    {
      id: 5,
      src: "/images/instruments/flute.jpg",
      artists: "/images/artists/jasminechoi.jpg",
      artistdesc: "Flutist Jasmine Choi, Concert Soloist",
      title: "Flute",
      desc: " lr"
    },
    {
      id: 6,
      src: "/images/instruments/oboe.jpg",
      artists: "/images/artists/eugeneizotov.jpg",
      artistdesc:
        "Oboist Eugene Izotov, Chicago Symphony Orchestra Principal Oboe",
      title: "Oboe",
      desc: " lr"
    },
    {
      id: 7,
      src: "/images/instruments/clarinet.jpg",
      artists: "/images/artists/sangyoonkim.jpg",
      artistdesc:
        "Clarinetist Sang Yoon Kim, Sain Paul Chamber Orchestra Principal Clarinet",
      type: "Woodwind",
      title: "Clarinet",
      desc: " lr"
    },
    {
      id: 8,
      src: "/images/instruments/bassoon.jpg",
      artists: "/images/artists/keithbuncke.jpg",
      artistdesc:
        "Bassoonist Kieth Buncke, Chicago Symphony Orchestra Principal Bassoon",
      type: "Woodwind",
      title: "Bassoon",
      desc: " lr"
    },
    {
      id: 9,
      src: "/images/instruments/trumpet.jpg",
      artists: "/images/artists/EstebanBatallán.jpg",
      artistdesc:
        "Esteban Batallán, Chicago Symphony Orchestra Principal Trumpet",
      type: "Brass",
      title: "Trumpet",
      desc: " lr"
    },
    {
      id: 10,
      src: "/images/instruments/frenchhorn.jpg",
      artists: "/images/artists/sarahwillis.jpg",
      artistdesc:
        "Hornist Sarah Willis, Berlin Philharmonic Prinicpal French Horn",
      type: "Brass",
      title: "French horn",
      desc: " lr"
    },
    {
      id: 11,
      src: "/images/instruments/tuba.jpg",
      artists: "/images/artists/yadili.jpg",
      artistdesc:
        "Tubist Yadi Li, China National Symphony Orchestra Principal Tuba",
      type: "Brass",
      title: "Tuba",
      desc: " lr"
    },
    {
      id: 12,
      src: "/images/instruments/trombone.jpg",
      artists: "/images/artists/davidrejanocantero.jpg",
      artistdesc:
        "Trombonist David Rejano Cantero, Los Angeles Philharmonic Principal Trombone",
      type: "Brass",
      title: "Trombone",
      desc: " lr"
    },
    {
      id: 13,
      src: "/images/instruments/percussion.jpg",
      artists: "/images/artists/cynthia_yeh.jpg",
      artistdesc:
        "Percussionist Cynthia Yeh, New York Philhmarnoic Principal Percussion",
      type: "Percussion",
      title: "Percussion",
      desc: " lr"
    },
    {
      id: 14,
      src: "/images/instruments/harp.jpg",
      artists: "/images/artists/AnnekeHodnett.jpg",
      artistdesc: "Harpist Anneke Hodnett ,Concert Soloist",
      type: "Percussion",
      title: "Harp",
      desc: " lr"
    }
  ]

  const routes = instruments.map(
    ({ title, id, desc, artists, artistdesc, type, uses }) => (
      <Route
        exact
        path={"/" + title.toLowerCase()}
        render={() => (
          <Instrument
            title={title}
            desc={desc}
            artists={artists}
            artistdesc={artistdesc}
            type={type}
            uses={uses}
          />
        )}
        key={id}
      />
    )
  )

  return (
    <>
      <BrowserRouter>
        {routes}
        <Route
          exact
          path={"/"}
          render={() => (
            <>
              <Logo>MusicZoo</Logo>
              <Desc> a first look into the world of instrumental music</Desc>
              <InstrumentContainer>
                {instruments.map(({ id, src, title }) => (
                  <Link to={"/" + title}>
                    <Img key={id} src={src} title={title} alt={title} />
                  </Link>
                ))}
              </InstrumentContainer>
            </>
          )}
        ></Route>
      </BrowserRouter>
    </>
  )
}

export default App
