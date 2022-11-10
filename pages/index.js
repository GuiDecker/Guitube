import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {
  const estilosDaHomePage = {}

  // console.log(config.playLists)

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          // backgroundColor: "red",
        }}
      >
        <Menu />
        <Header />
        <TimeLine playLists={config.playLists}></TimeLine>
      </div>
    </>
  )
}
export default HomePage

const StyledHeader = styled.div`
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
function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}
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

function TimeLine(props) {
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
              {videos.map((videos) => {
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
