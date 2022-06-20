//initial value
let ranNum=Math.floor(Math.random()*5+1);
let inputScore1=0;
let correctBtn=0;
let wrongBtn=0;
let count=0;
let correctBtnCount=0;
let wrongBtnCount=0;
let correctPCount=0;
let wrongPCount=0;

//selector
let tryBtnEle=document.querySelector("#tryAgain");
let resetBtnEle=document.querySelector("#res");
let inputSEle=document.querySelector("#inputDigit");
let inputBtnEle=document.querySelector("#guess");
let resultEle=document.querySelector("#result-list");
let liEle=document.createElement("li");

let correctBtnEle=document.querySelector("#correct");
let wrongBtnEle=document.querySelector("#wrong");
let correctPEle=document.querySelector("#correct-progress");
let wrongPEle=document.querySelector("#wrong-progress");

inputSEle.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        let inSr=inputSEle.value;
        inputScore1=+inSr;
        inputSEle.value="";
        count++;
        ranNum=Math.floor(Math.random()*5+1);;
        // console.log("Random Number:"+ranNum);
        // console.log("Input Number:"+inputScore1);
        
        if(inputScore1===ranNum){
            //alert("Matched");
            correctBtnCount++;
            correctBtnEle.value=correctBtnCount;
            correctPCount+=20;
            correctPEle.innerHTML=correctPCount+"% Correct";
            correctPEle.style.width=correctPCount;
            //console.log(correctPEle.style.width);
            //console.log(correctPCount);
            liEle.innerHTML="Wow Great. Matched "+inputScore1;
            liEle.className="bg-info p-1";

            resultEle.appendChild(liEle);
        }
        else{
            //alert("Not Matched");
            wrongBtnCount++
            wrongBtnEle.value=wrongBtnCount;
            wrongPCount+=20;
            wrongPEle.innerHTML=wrongPCount+"% Wrong";
            wrongPEle.style.width=wrongPCount;
            //console.log(wrongPEle.style.width);
            //console.log(wrongPCount);
            liEle.innerHTML="Sorry! "+inputScore1+" Wrong Digit. It was "+ranNum;
            liEle.className="bg-danger p-1";
            
            resultEle.appendChild(liEle);
        }

        if(count>=5){
            inputSEle.setAttribute('disabled', 'disabled');
            inputBtnEle.setAttribute('disabled', 'disabled');
            alert("Game Over...");
        }

        
    }
})

inputBtnEle.addEventListener("click", (e)=>{
        let inSr=inputSEle.value;
        inputScore1=+inSr;
        //console.log(inputScore1);
        inputSEle.value="";    
})

