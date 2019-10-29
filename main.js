//Get SpeechSynthesis API
const synth = window.SpeechSynthesis;

//DOM elements
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');

//Initialize voices array
let voices = [];

const getVoices = () => {
  voices =synth.getVoices();

  //Loop through voices and create an option for each
  voices.forEach(voice => {
    //create option element
    const opotion = document.createElement('option';)
    
    //Fill option with voice and language
    option.textContent = voice.name + '{'+ voice.lang'}';
  });
};

getVoices();
if(synth.onvoiceschanged !== undefined){
  synth.onvoiceschanged = getVoices;
}
