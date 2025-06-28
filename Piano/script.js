const pianoKeys = document.querySelectorAll(".piano-keys .key");
 volumeSlider = document.querySelector(".volume-slider input");
 keyChecckbox = document.querySelector(".keys-checkbox input");

let allkeys = [],
 audio = new Audio("tunes/tunes/a.wav"); // by default, audio src is "a" tune

const playTune = (key)=>{
    audio.src = `tunes/tunes/${key}.wav`; // by passing audio src based on key pressed
    audio.play(); //playing audio
    console.log(allkeys);
    

    const clickedKey = document.querySelector(`[data-key="${key}"]`) //getting clicked key element

    clickedKey.classList.add("active");
    setTimeout(() => { //remove active class after 150 ms from the clicked key element
        clickedKey.classList.remove("active");
    });
}
 pianoKeys.forEach(key => {
    allkeys.push(key.dataset.key); // adding data-key  value to the allkeys array
    //calling playTune function with passing data-key value as an argument.
    key.addEventListener("click", () => playTune(key.dataset.key));
    console.log(key.dataset.key);
    
 });
 const handleVolume = (e) => {
audio.volume = e.target.volume; //passing the range slider value as an audio volume
 }

 const showHideKeys = () => {
    //toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
 }

 const pressedkey = (e) => {
    //if the pressed key is in the allkeys array, only call the playTune function

    if(allkeys.includes(e.key))playTune(e.key);
    
 }

 document.addEventListener("keydown", pressedkey)
 volumeSlider.addEventListener("input", handleVolume);
 keysCheckbox.addEventListener("click", showHideKeys);