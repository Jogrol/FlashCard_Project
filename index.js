function flipCardToFace2 () {
   const face1 = document.getElementsByClassName('face1');
   const face2 = document.getElementsByClassName('face2');
   face2[0].className = "face face2"
   face1[0].className = "face face1 hidden";
}
function flipCardToFace1 () {
    const face1 = document.getElementsByClassName('face1');
    const face2 = document.getElementsByClassName('face2');
    face2[0].className = "face face2 hidden"
    face1[0].className = "face face1";
 }