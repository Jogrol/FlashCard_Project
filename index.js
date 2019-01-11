function flipCardToFace2 () {
    //Hides face 1
   const face1 = document.getElementsByClassName('face1');
   const face2 = document.getElementsByClassName('face2');
   face2[0].className = "face face2"
   face1[0].className = "face face1 hidden";

}
function flipCardToFace1 () {
    //Hides face 2
    const face1 = document.getElementsByClassName('face1');
    const face2 = document.getElementsByClassName('face2');
    face2[0].className = "face face2 hidden"
    face1[0].className = "face face1";
 }

 function toggleMenu () {
     const menu = document.getElementById('menu');
     const tab = document.getElementById('tab');

     if (tab.innerText == "<"){
        menu.className = "moveToLeft";
        tab.innerText = ">";
     }else{
        menu.className = "moveToRight";
        tab.innerText = "<";
     }
     console.log(tab.innerText)
 }