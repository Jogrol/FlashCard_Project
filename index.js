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
 }

 function addCard(){
    var inputwrapper = document.createElement("div")
    inputwrapper.className = "input-wrapper"

    var input1 = document.createElement("input")
    input1.type = "text"
    input1.placeholder = "Type your question here"
    
    var input2 = document.createElement("input")
    input2.type = "text"
    input2.placeholder = "Type your answer here"

    inputwrapper.appendChild(input1)
    inputwrapper.appendChild(input2)

    var cardDesk = document.getElementById("cardDesk")

    cardDesk.appendChild(inputwrapper)
 }

 var cardDesk = {
    activeCard : {
        index : 0,
        question : "Create your question",
        answer : "and at it to your card deck."
    },
    cards : [{question:"This is the question",answer:"This is the answer"}]
}

function addCardToCardDesk(q,a){
    event.preventDefault();
    const card = {
        question : q.value,
        answer: a.value
    }

    cardDesk.cards.push(card)
    console.log(cardDesk.cards)

}


function nextCard(){
    console.log(cardDesk.activeCard.index)
    if (cardDesk.activeCard.index >= cardDesk.cards.length-1){
        alert("NO MORE CARDS TO THE RIGHT")
    }else{
        cardDesk.activeCard.index++
        var i = cardDesk.activeCard.index

        cardDesk.activeCard.question = cardDesk.cards[i].question
        cardDesk.activeCard.answer = cardDesk.cards[i].answer
        
        displayInfo(cardDesk.cards[i])
    }
}

function previousCard(){
    console.log(cardDesk.activeCard.index)
    // think about there is no more cards left
    if (cardDesk.activeCard.index<=0){
        alert("NO MORE CARDS TO THE LEFT")
    }else{
        cardDesk.activeCard.index--
        var i = cardDesk.activeCard.index

        cardDesk.activeCard.question = cardDesk.cards[i].question
        cardDesk.activeCard.answer = cardDesk.cards[i].answer
        
        displayInfo(cardDesk.cards[i])
    }
    
    

    // think about there is no more cards left
}

function displayInfo(card){
    var question = document.getElementById("question")

    question.innerText = cardDesk.activeCard.question
    

    var answer = document.getElementById("answer")
    answer.innerText = cardDesk.activeCard.answer
}



 