const msg = document.querySelector("#msg");
const myWords = document.querySelector("#my-words");
const btn = document.querySelector("#btn");
let startTime,endTime;
const rWords = ["Generating random paragraphs can be an excellent",
                "The writer has no idea what topic the random paragraph ",
                "This forces the writer to use creativity",
                "The writer can use the paragraph as the first one of a short story and build upon it"
                ];
let compareWords = (acrtualSentance,typedWords) => {
    let acrtualSentanceArr = acrtualSentance.split(" ");
    let typedWordsArr = typedWords.split(" ");
    let correctWords = 0;
    acrtualSentanceArr.forEach(function(item,index) {
        if(item == typedWordsArr[index]){
            correctWords++;
        }
    })
    let snt = `${correctWords} correct out of ${acrtualSentanceArr.length} words and the total number of error are ${acrtualSentanceArr.length-correctWords}`;
    return snt;
}

const wordNumber = (typedWords) => {
    let typedWordsStr = typedWords.split(" ").length;
    return typedWordsStr;
}

const endGame = () => {
    let time = new Date();
    endTime = time.getTime();
    let totalTime = ((endTime-startTime)/1000);
    let typedWords = myWords.value;
    let typedWordsStr = wordNumber(typedWords);

    let speed = Math.floor((typedWordsStr/totalTime)*60);
    let finalMsg = `You typed total at ${speed} words per minute. `;
    finalMsg += compareWords(msg.innerText,typedWords);
    msg.innerText = finalMsg;
}

const playGame = () => {
    let randomWords = Math.round(Math.random()*(rWords.length-1));
    msg.innerText = rWords[randomWords];
    let time = new Date();
    startTime = time.getTime();
    btn.innerText = "Done";
}

btn.addEventListener("click",()=>{

    if(btn.innerText == "Start"){
        if(myWords.value != ''){
            myWords.value = "";
        }
        myWords.disabled = false;
        setTimeout(playGame, 3000);
    }else{
        myWords.disabled = true;
        btn.innerText = "Start";
        endGame();
    }

});