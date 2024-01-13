document.addEventListener("keydown", (e) => {
  const audio = new Audio("./audio.mp3");
  audio.play();



  const keyCombination=getKeyCombination(e);

  function getKeyCombination(event){
    let keyCombination="";

    if(event.ctrlKey) keyCombination+="Ctrl +";
    if(event.alKey) keyCombination+="Alt +";
    if(event.shiftKey) keyCombination+="Shift +";

    keyCombination+=event.key;
    return keyCombination.trim();
  }

  const firstH1 = document.querySelector(".container h1:first-child");
  firstH1.style.display = "none";




  // update keyName
  const KeyName = document.querySelector("div>h1>span");
  KeyName.innerText = `You have pressed  ${e.key}`;

  // update keyNo
  const keyNo1 = document.querySelector("#keyNo");
  keyNo1.innerText = e.keyCode;
  keyNo1.style.fontSize="85px";



 
});
