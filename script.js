const countDownElement = document.getElementById("countDown");
const resetValueElement = document.querySelector(".resetValue");
let startCount = 0;
let intervalId;

// First function;
const startTimer = () => {
 intervalId = setInterval(() => { 
  countDownElement.innerText = startCount++;
  },1000 )
};
document.querySelector(".start_btn").addEventListener("click", startTimer);

///Second Function;
const stopTimer = () => {
    showStopValue();
    clearInterval(intervalId);
};
document.querySelector(".stop_btn").addEventListener('click',stopTimer);

///third function;
const resetTimer = () => {
    startCount = 0;
    countDownElement.innerText = startCount;
    clearInterval(intervalId);
};
document.querySelector(".reset_btn").addEventListener('click',resetTimer);

/// fourth function
const showStopValue = () => {
    const newPara = document.createElement("p");
    newPara.innerText = `The stop time is ${startCount - 1}`;
    resetValueElement.append(newPara);
}
document.querySelector(".time_btn").addEventListener('click',showStopValue);

/// fifth function
const clearTimeValue = () => {
    resetValueElement.innerHTML = "";
};
document.querySelector(".clear_btn").addEventListener('click',clearTimeValue);
