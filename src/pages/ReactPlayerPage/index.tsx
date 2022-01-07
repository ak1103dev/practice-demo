import { useRef } from 'react'
import ReactPlayer from "react-player"

const ReactPlayerPage = () => {
  const playerRef = useRef<any>(null)
  // const [playing, setPlaying] = useState(false)
  return (
    <div>
      <h2>Preview</h2>
      <ReactPlayer
        ref={playerRef}
        // url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        url='https://vimeo.com/471602493'
        playing
        light
        // controls
        onProgress={(progress) => {
          console.log(progress)
          if (progress.playedSeconds > 60) {
            playerRef.current.seekTo(0)
          }
        }}
      />
      <hr />
      <h2>Full</h2>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        controls
      />
    </div>
  )
}

export default ReactPlayerPage
