let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let new_game = document.querySelector("#new");
let winner_div = document.querySelector(".winner")
let player_1 = document.querySelector(".p1").lastElementChild
let player_2 = document.querySelector(".p2").lastElementChild


function show_winnner(winner){
    let person = winner_div.firstElementChild;
    person.innerText = `Congratulations! the winner is ${winner}`;
    winner_div.classList.remove("hide");
}
function show_score(Score_p1,Score_p2){
    player_1.innerText = `Score : ${Score_p1} `
    player_2.innerText = `Score : ${Score_p2} `
}


let Score_p1 = 0;
let Score_p2 = 0;
let turn = true;

let win_arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("pressed")
    if (turn) {
      box.innerText = "X";
      turn = false;
    } else {
      box.innerText = "O";
      turn = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

function checkwinner() {
  for (arr of win_arr) {
    let box1 = boxes[arr[0]].innerText;
    let box2 = boxes[arr[1]].innerText;
    let box3 = boxes[arr[2]].innerText;
    if (box1 != "" && box2 != "" && box3 != "") {
      if (box1 === box2 && box2 === box3) {
        console.log(box1)
        if (box1 === "X"){
            ++Score_p1
            show_score(Score_p1,Score_p2)
            show_winnner("player 1")
            turn = false

        }
        else{
            ++Score_p2
            show_score(Score_p1,Score_p2)
            show_winnner("player 2")
            turn = true
        }
        disable_boxes()
      }
    }
  }
}
function disable_boxes(){
    for(let box of boxes){
        box.disabled = true
    }
}
function enable_boxes(){
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
    winner_div.classList.add("hide");
}

new_game.addEventListener("click",()=>{
    
    enable_boxes()
})
reset.addEventListener("click",()=>{
    Score_p1 =0
    Score_p2 = 0 
    show_score(Score_p1,Score_p2)
    enable_boxes()
})
