import "./main.css";
import {songs} from "./playlist";
import {clickHandler} from "./AudioHandler";
import {prevTrack} from "./AudioHandler";
import {nextTrack} from "./AudioHandler";
import {suffleTrack} from "./AudioHandler";
let aPlayer:any;


onload = ()=>{
    let playlist:any= document.querySelector('#playlist');
    aPlayer = document.querySelector('#audio');
    let prev_button=document.querySelector("#prev");
    let next_button=document.querySelector("#next");
    let suffle_button=document.querySelector("#random");
   songs.forEach((song:any) => {
       const li = document.createElement('li');
       const link = document.createElement('a');
        link.href = song.href;
        link.innerText = song.title;
        link.addEventListener('click', clickHandler, false);
       li.append(link);
       playlist.append(li);
    });
    
     prev_button?.addEventListener("click", prevTrack,false );
     next_button?.addEventListener("click", nextTrack,false);
    suffle_button?.addEventListener("click",suffleTrack,false);
       
    }

