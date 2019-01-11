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

 function addCard(){
    var inputwrapper = document.createElement("div")
    inputwrapper.className = "input-wrapper"

    var input1 = document.createElement("input")
    input1.type = "text"
    input1.placeholder = "Type your question"
    
    var input2 = document.createElement("input")
    input2.type = "text"
    input2.placeholder = "Type your answe"

    inputwrapper.appendChild(input1)
    inputwrapper.appendChild(input2)

    var cardDesk = document.getElementById("cardDesk")

    cardDesk.appendChild(inputwrapper)
 }

 var cardDesk = {
    activeCard : {
        question : "This is the question",
        answer : "This is the answer"
    },
    card : {
        question : "",
        answer : ""
    }

}



function nextCard(){
    displayInfo()
}

function previousCard(){
    displayInfo()
}

function displayInfo(){
    var question = document.getElementById("question")
    question.innerText = cardDesk.activeCard.question

    var answer = document.getElementById("answer")
    answer.innerText = cardDesk.activeCard.answer
}



 function saveQuestion(){
    var question = this
    console.log(question.value)
 }
 function saveAnswer(){
    var answer = this
    console.log(answer.value)
 }

 