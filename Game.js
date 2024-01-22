alert("Only if you wuv starGirl")
let boxes =document.querySelectorAll(".btn");
let resetBtn =document.querySelector("#rstbtn");
let newGameBtn=document.querySelector("#newgame");
let FB=document.querySelectorAll(".mg");
let msg =document.querySelector("#msg");

//tarcking player acess
let turno= true;


//wining pattern we will use 2d array
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];

const resetGame=()=>{ //reset ke badd ye atye
    turno=true; //jab if else sach ho jae tb emable ke fcn trigger ho gae
    enableBoxes();
}

//event listener to get instant hint
/*function restBtn(){
    var resetBtn= document.getElementById("rstbtn");
     resetBtn.reset()}*/
     

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
    console.log("box was clciked!") 
    if(turno===true){
        box.innerText="O";
        turno=false;
    }
    else{
        box.innerText="X";
        turno=true; //taki x ke badd o aaa jae phir
    }
    box.disabled=true; //ek baar click karne 
    //ke baad value change na ho
    checkWinner();
    
     } )
    
});
const disableBoxes=()=>{
    for(let btn of boxes){ //ek baar game jente to dobara koi aur start na kare
       btn.disabled=true;
    }}
    const enableBoxes=()=>{
        for(let btn of boxes){
           btn.disabled=false;
           btn.innerText=""; //taki boxes ka text khali aaa ske
        }}
    
function showWinner(winner) {
    msg.innerHTML ='congratulations! winner is '+winner;//to aff fcn
     disableBoxes();
    //FB.classList.forEach.remove("hide");  
}
//tracking box clicked movemnt
//gving values when boxes was clicked


function checkWinner() {
    for (patterns of winPatterns) { //array mein loop chalayaa 
        // console.log(patterns[0],patterns[1],patterns[2]);
        //we will also check arry boxes so
        /* console.log(patterns[0],patterns[1],patterns[2]);//check box individualy
         console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText);
         //ineer text se content ka acess rakh rahe hai*/
        //neche wala better also to ceck values
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                //to show winner
                showWinner(pos1Val);
            }
        }

    }

}

    
newGameBtn.addEventListener("click", resetGame); //resetGame ke function aaa gae isme
resetBtn.addEventListener("click", resetGame);

