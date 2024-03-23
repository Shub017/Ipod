import React, { useState, useEffect } from 'react';
import IpodWheel from './Components/IpodWheel/IpodWheel';
import Display from './Components/Display/Display';
import DisplayMenu from './Components/DisplayMenu/DisplayMenu';
import SongList from './Components/SongList/SongList';
import Games from './Components/Games/Games';
import Settings from './Components/Settings/Settings';
import SongimgDisplay from './Components/songImgDisplay/SongImgDisplay';
import song1 from './static/songs/Because-I-Love-You-For-Infinity(PagalWorld).mp3';
import song2 from './static/songs/Elton-John-feat-Dua-Lipa-Cold-Heart-PNAU-Remix-(VoxyTunes.com.ng).mp3';
import song3 from './static/songs/Houdini Dua Lipa.mp3';
import song4 from './static/songs/Rick Astley - Never Gonna Give You Up.mp3';

function App() {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [displayScreen, setDisplayScreen] = useState(0);
  const [wallpaperNo, setWallpaperNo] = useState(0);
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [activeSongListItem, setActiveSongListItem] = useState(0);
  const [lengthOfSongList] = useState(4);
  const [songs] = useState([song1, song2, song3, song4]);

  useEffect(() => {
    const initializeAudio = () => {
      setAudio(new Audio(songs[activeSongListItem]));
    };

    initializeAudio();

    return () => {
      if (audio) {
        audio.pause();
        audio.removeEventListener('ended', handleAudioEnded);
      }
    };
  }, [activeSongListItem, songs, audio]);

  

  const handleAudioEnded = () => {
    setPlaying(false);
    setDisplayScreen(0); // Go back to the main screen after song ends
  };

  const changeWallpaperNo = () => {
    setWallpaperNo((prevWallpaperNo) => {return  (prevWallpaperNo + 1) % 3});
  };

  const pressOKButtonEventHandler = () => {
    setDisplayScreen((prevDisplayScreen) => {
      if (prevDisplayScreen === 0) {
        return prevDisplayScreen + 1;
      }
   
      else if (prevDisplayScreen === 1){
        if (activeMenuItem === 0){
          // Screen 2 will be for songs
          return prevDisplayScreen+1;
        }
        else if (activeMenuItem === 1){
          // Screen 4 will be for Games 
          return 4;
        }
        else if (activeMenuItem === 2){
          // Screen 5 will be for settings
          return 5;
        }
      }
      
      else if (prevDisplayScreen === 2 || prevDisplayScreen === 3) {
        if (playing) {
          audio.pause();
          setPlaying(false);
        } else {
          audio.play();
          setPlaying(true);
        }
        
        if(prevDisplayScreen === 2) { 
          return prevDisplayScreen+1
        }  
        
        return prevDisplayScreen;
      } else {
        return prevDisplayScreen;
      }
    });
  };

  const menuNavigationAngle = (angle) => {
    console.log("Navigation triggered with angle: ", angle);
    angle = parseInt(angle);

    if (displayScreen === 5 && (angle === 0  || angle === 90 || angle === 30 || angle === 60 || angle === 20)){
      changeWallpaperNo();
    }

    if (displayScreen === 1 && (angle === 0  || angle === 90 || angle === 30 || angle === 60 || angle === 20)) {
        
            setActiveMenuItem((prevActiveMenuItem) => {
                const newActiveMenuItem = (prevActiveMenuItem + 1) % 3;
                return prevActiveMenuItem === newActiveMenuItem ? prevActiveMenuItem : newActiveMenuItem;
            });
         
    }

    if (displayScreen === 2 && (angle === 0  || angle === 90 || angle === 30 || angle === 60 || angle === 20)){
      setActiveSongListItem((prevActiveSongItem)=>{
        return (prevActiveSongItem+1)%lengthOfSongList;
      })
    }
  };

  const MENUEventHandler = () => {
    setDisplayScreen((prevDisplayScreen) => {
      if (prevDisplayScreen === 1 || prevDisplayScreen === 2 || prevDisplayScreen === 3) {
        return prevDisplayScreen - 1;
      }
      else if(prevDisplayScreen === 4){
        return 1;
      }
      else if(prevDisplayScreen === 5){
        return 1;
      }
      else{
        return prevDisplayScreen;
      }
    });
  };

  return (
    <>
      {displayScreen === 0 && <Display wallpaperNo={wallpaperNo} />}
      {displayScreen === 1 && <DisplayMenu activeMenuItem={activeMenuItem} />}
      {displayScreen === 2 && <SongList activeSongListItem={activeSongListItem} />}
      {displayScreen === 3 && <SongimgDisplay activeSongListItem={activeSongListItem}/>}
      {displayScreen === 4 && <Games />}
      {displayScreen === 5 && <Settings wallpaperNo={wallpaperNo} />}
      <IpodWheel
        pressOKButtonEventHandler={pressOKButtonEventHandler}
        menuNavigationAngle={menuNavigationAngle}
        MENUEventHandler={MENUEventHandler}
      />
    </>
  );
}

export default App;
