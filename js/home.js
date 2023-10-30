const  textsObj = {
    MinPgText : "Im Mohamed Alborolusy" ,
    MynameText : "Frontend Web Developer" ,

}




const textContainer = document.getElementById('my-name');
const MyNamy = document.getElementById('my-title');
const MinBt = document.getElementById('min-bt');
let currentIndex = 0;
let MyNameIndex = 0;

function typeText() {
  if (currentIndex < textsObj.MinPgText.length) {
    textContainer.textContent += textsObj.MinPgText.charAt(currentIndex);
    currentIndex++;
    setTimeout(typeText, 40 );
}
  if (currentIndex === textsObj.MinPgText.length) {
    if (MyNameIndex < textsObj.MynameText.length) {
      MyNamy.textContent += textsObj.MynameText.charAt(MyNameIndex);
      MyNameIndex++;
      setTimeout(typeText, 80 );
    }
    if (MyNameIndex === textsObj.MynameText.length) {

      MinBt.style.display = 'block'; 

    }
    

    

}
}

typeText();
console.log( )





