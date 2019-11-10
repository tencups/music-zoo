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
color: #000000;
background: #FFFFFF;
text-shadow: 2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c;
`

const Desc = styled("h3")`
  font-style: italic;
  font-size: 3em;
  text-align: center;
  font-family: "Baloo Bhai", cursive;
color: #000000;
background: #FFFFFF;
text-shadow: 2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c;
margin-top: -70px;
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
        "Nearly every composer wrote for the violin, whether as a solo instrument, in chamber music, in orchestral music, folk music, and even in jazz. As you can tell, violin is capable of playing many different stlyes.",
      songs: [
        {
          songTitle: "Sibelius's Violin Concerto",
          link: "https://www.youtube.com/watch?v=J0w0t4Qn6LY"
        },
        {
          songTitle: "Tchaikovsky's Violin Concerto",
          link: "https://www.youtube.com/watch?v=CTE08SS8fNk"
        }
      ]
    },
    {
      id: 2,
      src: "/images/instruments/viola.png",
      artists: "/images/artists/davidaaroncarpenter.jpg",
      artistdesc: "Violist David Aaron Carpenter, Concert Soloist",
      type: "String",
      title: "Viola",
      desc:
        "Just like the violin, the viola is also a string instrument that has four strings and is played with a bow. The viola is also held between the left collar bone and the chin and is played the same way as the violin. Unlike the violin, the viola is capable of playing lower pitches than the violin because of its slightly bigger size.",
      uses:
        "Because of the viola's lower range, they are more known for playing the harmony in ensemble groups. But just like the violin, it is also capable of playing many styles of music such as solo instrument, chamber, orchestral, folk and jazz.",
      songs: [
        {
          songTitle: "Brahms's Viola Sonata No. 1",
          link: "https://www.youtube.com/watch?v=zDRpehUEeas"
        },
        {
          songTitle: "Hindeminth's Viola Sonata No. 4",
          link: "https://www.youtube.com/watch?v=HWMWFWNWeKc"
        }
      ]
    },
    {
      id: 3,
      src: "/images/instruments/cello.jpg",
      artists: "/images/artists/yoyoma.jpg",
      artistdesc: "Cellist Yo-Yo Ma, Concert Soloist",
      type: "String",
      title: "Cello",
      desc:
        "The cello has four strings and is played with a bow. But unlike the viola, which often plays the harmony and the violin, which often plays the melody, the cello is most known to play the bass part. It is also played sitting down opposed to played standing up.  ",
      uses:
        "The cello enjoys a large of solo repertoire with and without accompanient, as well as numerous concertos(solo with orchestra). Just like the violin and viola, the cello can play a wide range of styles such as solo, chamber, orchestral and folk. ",

      songs: [
        {
          songTitle: "Shostakovish Cello Concerto",
          link: "https://www.youtube.com/watch?v=tG0laIxC0Lo"
        },
        {
          songTitle: "Dvorak Cello Concerto",
          link: "https://www.youtube.com/watch?v=llB7NaWLUc4"
        }
      ]
    },
    {
      id: 4,
      src: "/images/instruments/bass.jpg",
      artists: "/images/artists/alexanderhanna.jpg",
      artistdesc:
        "Bassist Alexander Hanna, Chicago Symphony Orchestra Principal Bass",
      type: "String",
      title: "Bass",
      desc:
        "The double bass is the largest and lowest-pitched bowed string instrument in the modern symphony orchestra. Unlike most of the string instruments, it can be played in both in a string orchestra and band. Just like the cello, it is also used to playing the bass part. The bass can be played by bowing, by plucking the strings and by a variety of other extended techniques. ",
      uses:
        "Just like the other string instruments, the bass can play a wide variety of styles including jazz, blue, tango, orchestral and modern. In jazz, blues, and rock, playing by pucking is the norm.",
      songs: [
        {
          songTitle: "Vanhal's Double Bass Concerto",
          link: "https://www.youtube.com/watch?v=Dt-bNf6h0tI"
        },
        {
          songTitle: "Sarasate - Zigeunerweisen for Double Bass",
          link: "https://www.youtube.com/watch?v=bhh_vfHz2Lk"
        }
      ]
    },
    {
      id: 5,
      src: "/images/instruments/flute.jpg",
      artists: "/images/artists/jasminechoi.jpg",
      artistdesc: "Flutist Jasmine Choi, Concert Soloist",
      type: "Woodwind",
      title: "Flute",
      desc:
        "The flute is played by blowing air into the mouthpiece, also known as the hole where the mouth goes. Unlike all the other woodwinds, the flute is not played with a reed. ",
      uses:
        "Beacuse of the flexibility and range of the instrument, the flute can be played in many different styles including orchestral, chamber, modern, solo, jazz, folk and tango. The flute is played in a band and orchestra, but not in a string orchestra.",
      songs: [
        {
          songTitle: "Ibert Flute Concerto Third Movement",
          link: "https://www.youtube.com/watch?v=wsicE5jZ4gM"
        },
        {
          songTitle: "Jules Mouquet - La flute de Pan Op.15",
          link: "https://www.youtube.com/watch?v=Xx6uKe_aEtQ"
        }
      ]
    },
    {
      id: 6,
      src: "/images/instruments/oboe.jpg",
      artists: "/images/artists/eugeneizotov.jpg",
      artistdesc:
        "Oboist Eugene Izotov, Chicago Symphony Orchestra Principal Oboe",
      type: "Woodwind",
      title: "Oboe",
      desc:
        "The oboe is a double reed(two pieces of wood stuck together that vibrates to create sound when blown against) woodwind instrument. Because of the nature of the reed, playing the oboe can be very high maintenance. But with this comes many great qualities such as its distinctive tone and bright sound. ",
      uses:
        "Today, the oboe is commonly used as orchestral or solo instrument in concert bands, orchestras, chamber music, film music, some genres of folk music, and is occasionally heard in jazz, rock, pop, and popular music.",
      songs: [
        {
          songTitle: "Mozart's Oboe Concerto",
          link: "https://www.youtube.com/watch?v=eDrVtXPpuRI"
        },
        {
          songTitle: "Emile Paladilhe: Solo pour hautbois",
          link: "https://www.youtube.com/watch?v=_KXb3-QXjlM"
        }
      ]
    },
    {
      id: 7,
      src: "/images/instruments/clarinet.jpg",
      artists: "/images/artists/sangyoonkim.jpg",
      artistdesc:
        "Clarinetist Sang Yoon Kim, Sain Paul Chamber Orchestra Principal Clarinet",
      type: "Woodwind",
      title: "Clarinet",
      desc:
        "The clarinet is a single reed woodwind instrument, which means that there is only one reed vibrating instead of two, like the bassoon and oboe. But instead of the reed being completely exposed, the clarinet is played through a piece of the clarinet called the mouth piece.",
      uses:
        "The clarinet can come in many different sizes. For example, the piccolo clarinet is the highest range clarinet while the bass clarinet is one of the lowest range. There is also the Ab clarinet which is in the middle of the two. Because of its versatility, the clarinet can play orchestral, modern, solo, baroque, popular, jazz, chamber and tango music.",
      songs: [
        {
          songTitle: "Debussy Premiere Rhapsodie",
          link: "https://www.youtube.com/watch?v=Ic_MLf2ioDE"
        },
        {
          songTitle: "Time Pieces for Clarinet and Piano Op. 43: IV. ",
          link: "https://www.youtube.com/watch?v=7aBRffHhhIs"
        }
      ]
    },
    {
      id: 8,
      src: "/images/instruments/bassoon.jpg",
      artists: "/images/artists/keithbuncke.jpg",
      artistdesc:
        "Bassoonist Kieth Buncke, Chicago Symphony Orchestra Principal Bassoon",
      type: "Woodwind",
      title: "Bassoon",
      desc:
        "The bassoon is a double reed woodwind instrument. The bassoon is known for its tone colour, wide range, variety of character, and agility. Just like most instruments, the bassoon can also be played standing up and sitting down. ",
      uses:
        "The bassoon can play orchestral, concert band, chamber and modern music. As a bassoonist in an orchestra, you will be expected to play many beautiful solos.",
      songs: [
        {
          songTitle: "Weber Bassoon Concerto",
          link: "https://www.youtube.com/watch?v=TQny4biWHgE"
        },
        {
          songTitle: "Vivaldi Bassoon Concerto ",
          link: "https://www.youtube.com/watch?v=eHdu7meKk00"
        }
      ]
    },
    {
      id: 9,
      src: "/images/instruments/trumpet.jpg",
      artists: "/images/artists/EstebanBatallán.jpg",
      artistdesc:
        "Esteban Batallán, Chicago Symphony Orchestra Principal Trumpet",
      type: "Brass",
      title: "Trumpet",
      desc:
        "The trumpet is played by blowing air through the mouthpiece with nearly-closed lips (called the player's embouchure), producing a buzzing sound that starts a standing wave vibration in the air column inside the instrument. The trumpet can also be played muted using a mute which is placed in the opening of the trumpet.",
      uses:
        "Because of the trumpets wide range, the trumpet can play orchestral, concert band, chamber and modern music. As a trumpet player in an orchestra, you will be expected to play many beautiful solos.",
      songs: [
        {
          songTitle: "Haydn Trumpet Concerto",
          link: "https://www.youtube.com/watch?v=ZUZYoVw7moc"
        },
        {
          songTitle: "Hummel Trumpet Concerto",
          link: "https://www.youtube.com/watch?v=Jhz3Mo1kA4M"
        }
      ]
    },
    {
      id: 10,
      src: "/images/instruments/frenchhorn.jpg",
      artists: "/images/artists/sarahwillis.jpg",
      artistdesc:
        "Hornist Sarah Willis, Berlin Philharmonic Prinicpal French Horn",
      type: "Brass",
      title: "French horn",
      desc:
        "Although the french horn is a incredibly beautiful sounding instrument, it is known as one of the most difficult instruments, because of how much air support it requires. Just like all the other brass instruments, it is also played through a buzzing noise in the mouth piece.",
      uses:
        "Because of how distinct and beautiful the french horn is, it is commonly the solo in an orchestra. But just like all the other instruments, it can also be played solo, in a chamber group, band and orchestra.",
      songs: [
        {
          songTitle: "Mozart French Horn Concerto",
          link: "https://www.youtube.com/watch?v=lNuJVfe-t3o"
        },
        {
          songTitle: "Strauss French Horn Concerto",
          link: "https://www.youtube.com/watch?v=s68W8KDp5eM"
        }
      ]
    },
    {
      id: 11,
      src: "/images/instruments/tuba.jpg",
      artists: "/images/artists/yadili.jpg",
      artistdesc:
        "Tubist Yadi Li, China National Symphony Orchestra Principal Tuba",
      type: "Brass",
      title: "Tuba",
      desc:
        "The tuba is the lowest-pitches musical instrument in the brass family.  As with all brass instruments, the sound is produced by lip vibration into a large mouthpiece. Beacuse of its large size, it requires lots of air support to create a sound.",
      uses:
        "Because it is a low range instrument, it is commonly used as the bass part. Tubas are used in marching bands, drum and bugle corps and in many jazz bands. ",
      songs: [
        {
          songTitle: "Vaughan Williams Tuba Concerto",
          link: "https://www.youtube.com/watch?v=vK5KaYXJsrg"
        },
        {
          songTitle: "Gregson Tuba Concerto",
          link: "https://www.youtube.com/watch?v=oTrZb9aIOf8"
        }
      ]
    },
    {
      id: 12,
      src: "/images/instruments/trombone.jpg",
      artists: "/images/artists/davidrejanocantero.jpg",
      artistdesc:
        "Trombonist David Rejano Cantero, Los Angeles Philharmonic Principal Trombone",
      type: "Brass",
      title: "Trombone",
      desc:
        " As on all brass instruments, sound is produced when the player's vibrating lips (embouchure) cause the air column inside the instrument to vibrate. Nearly all trombones have a sliding mechanism that varies the length of the instrument to change the pitch or note. ",
      uses:
        "Because of its unique slidely function, it can produce many unique sounds other instruments can produce, such as its wailing effect, which is commonly used in jazz and blues. The trombone can also play band, orchestral, chamber, solo and concerto music.",
      songs: [
        {
          songTitle: "Rimskij-Korsakov Trombone Concerto",
          link: "https://www.youtube.com/watch?v=SBVU_ejKHfI"
        },
        {
          songTitle: "The Carnival of Venice for Trombone",
          link: "https://www.youtube.com/watch?v=nV_uKxGPF_I"
        }
      ]
    },
    {
      id: 13,
      src: "/images/instruments/percussion.jpg",
      artists: "/images/artists/cynthia_yeh.jpg",
      artistdesc:
        "Percussionist Cynthia Yeh, New York Philhmarnoic Principal Percussion",
      type: "Percussion",
      title: "Percussion",
      desc:
        "A percussion instrument is a musical instrument that is sounded by being struck or scraped.The percussion section of an orchestra most commonly contains instruments such as timpani, snare drum, bass drum, cymbals, triangle and tambourine. However, the section can also contain non-percussive instruments, such as whistles and sirens, or a blown conch shell. ",
      uses:
        "The percussion has very unique role and sound when it comes to band, orchestral and chamber music as it is very capable creating certain effects other instrmuents cannot produce. ",
      songs: [
        {
          songTitle: "Higdon Percussion Concerto",
          link: "https://www.youtube.com/watch?v=DZcVN09o0ik"
        },
        {
          songTitle: "Azul for Flute and Percussion",
          link: "https://www.youtube.com/watch?v=euM1Ydu8vEo"
        }
      ]
    },
    {
      id: 14,
      src: "/images/instruments/harp.jpg",
      artists: "/images/artists/AnnekeHodnett.jpg",
      artistdesc: "Harpist Anneke Hodnett ,Concert Soloist",
      type: "Percussion",
      title: "Harp",
      desc:
        "The harp is a stringed musical instrument that has a number of individual strings running at an angle to its soundboard; the strings are plucked with the fingers.Harps vary globally in many ways. In terms of size, many smaller harps can be played on the lap, whereas larger harps are quite heavy and rest on the floor.",
      uses:
        "Although the instrument main function is built on string, it is still also considered a percussion instrument as striking to produce a sound is included. Beacuse of the percussion, it is mainly used as either as a soloist or to add a certain effect in an ensemble.",
      songs: [
        {
          songTitle:
            "Ravel's Introduction and Allegro for flute, clarinet, string quartet and harp",
          link: "https://www.youtube.com/watch?v=izQJYJw3RRo"
        },
        {
          songTitle: "Hindeminth Harp Sonata",
          link: "https://www.youtube.com/watch?v=6z1sYg-kBYY"
        }
      ]
    }
  ]

  const routes = instruments.map(
    ({ title, id, desc, artists, artistdesc, type, uses, songs }) => (
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
            songs={songs}
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
