import React from "react"
import config from "../config.json"
import styled from "styled-components"
import Menu from "../src/components/Menu/Index"
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("")

  // console.log(config.playLists)

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          // backgroundColor: "red",
        }}
      >
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <TimeLine searchValue={valorDoFiltro} playLists={config.playLists}>
          Conteudo
        </TimeLine>
      </div>
    </>
  )
}
export default HomePage

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`
const StyledBanner = styled.div`
  background-color: blue;
  background-image: url(${({ bg }) => bg});
  /* background-image: url(${config.bg}); */
  height: 230px;
  background-size: cover;
`

function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      <section className="user-info">
        <img src={`https://github.com/${config.gitHub}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}
function TimeLine({ searchValue, ...props }) {
  const playListNames = Object.keys(props.playLists)
  return (
    <StyledTimeline>
      {playListNames.map((playListNames) => {
        const videos = props.playLists[playListNames]
        // console.log(playListNames)
        // console.log(videos)
        return (
          <section>
            <h2>{playListNames}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase()
                  const seachValueNormalized = searchValue.toLowerCase()
                  return titleNormalized.includes(seachValueNormalized)
                })
                .map((videos) => {
                  return (
                    <a href={videos.url}>
                      <img src={videos.thumb} />
                      <span>{videos.title}</span>
                    </a>
                  )
                })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}
