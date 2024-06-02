const boxes = document.querySelectorAll(".box");
//console.log(boxes);
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerX, player0
let buttonClicks = 0;

// 2D Array
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      buttonClicks++;
    } else {
      box.innerText = "X";
      box.style.color = "#c75bc7";
      turnO = true;
      buttonClicks++;
    }
    box.disabled = true;
    checkWinner();
  });
});

// resetGame Function
const resetGame = () => {
  buttonClicks = 0;
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

// showWinner Function
const showWinner = (winner) => {
  msg.innerText = `Congratulations. Winner is ${winner}!! 🎉`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// drawMesg Function
const drawMesg = () => {
  msg.innerText = `Game Draw. 🙄`;
  msgContainer.classList.remove("hide");
};

// disableBoxes Function
const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

// enableBoxes Function
const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

// checkWinner Function
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log(buttonClicks);
        // console.log("winner", pos1Val);
        showWinner(pos1Val);
      } else if (buttonClicks === 9) {
        // console.log(buttonClicks);
        drawMesg();
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

//console.log(pattern[0], pattern[1], pattern[2]);

// console.log(
//   boxes[pattern[0]],
//   boxes[pattern[1]],
//   boxes[pattern[2]]
// );

// console.log(
//   boxes[pattern[0]].innerText,
//   boxes[pattern[1]].innerText,
//   boxes[pattern[2]].innerText
// );
