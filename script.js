let arr = [1, 2, 3, 4];
let resultContainer = document.querySelector("#output");

function propogateResult(arr) {
  let para = document.createElement("p");
  para.textContent = arr;
  resultContainer.appendChild(para);
}



const promiseOne = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve((arr = arr.filter((element) => element % 2 == 0)));
    }, 1000);
  });
};

const promiseTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr.map((element) => element * 2));
    }, 2000);
  });
};

promiseOne().then((data)=>{
  console.log(data);
  propogateResult(data);
  return promiseTwo();
}).then((data)=>{
  propogateResult(data);
  console.log(data);

});
