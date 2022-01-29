import AudioPlayer from "react-h5-audio-player";

const Music = () => (
  <AudioPlayer
    loop
    autoPlay={true}
    src="https://ht.mobile9.com/download/media/3/starwars-i_sfxzhimi.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
);

export default Music