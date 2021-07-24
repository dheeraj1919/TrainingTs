let currentAudio:HTMLAudioElement= document.querySelector("#audio")as HTMLAudioElement;
let playlist:any= document.querySelector('#playlist');

let current_background: HTMLImageElement= document.querySelector("#background_image")as HTMLImageElement;
let background:HTMLImageElement=document.querySelector("#background") as HTMLImageElement;
import {songs} from "./playlist";

let current_index=0;
//console.log(playlist);
export function clickHandler(event:any) {
    
    event.preventDefault();
   
   
    currentAudio.src = event.target.href;
    currentAudio.load();
    currentAudio.play();
}

function prevfunction(index1:number)
{
        
            index1=index1-1;
            songs[index1].index=index1;
            current_background.src= songs[index1].href;
           
            currentAudio.load();
            currentAudio.play();
        
};
//

function currentTrack(current_index1:number)
{
   //console.log(current_index1);
    currentAudio.src=songs[current_index1].href;
    current_background.src=songs[current_index1].background;
    background.src=songs[current_index1].background;
    currentAudio.load();
    currentAudio.play();

    
};
export function prevTrack()
{
    
    if(current_index>0)
    {
       
        current_index -=1;
    }
    else {
       
        current_index=songs.length;
    }
    console.log(current_index);
    currentTrack(current_index);

};
export function nextTrack ()
{

    if (current_index < songs.length - 1)
        current_index += 1;
  else current_index = 0;
console.log(current_index);
  currentTrack(current_index);

}
export function suffleTrack()
{
   let Randomindex= Math.floor(Math.random() * songs.length);
   currentTrack(Randomindex);
}


currentTrack(1);

