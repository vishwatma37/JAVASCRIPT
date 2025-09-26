const apiBody = document.querySelector(".api_body");

// const apiUrl = "https://jsonplaceholder.typicode.com/todos/1"

const apiUrl = "https://icanhazdadjoke.com";
const fetchData = () => {
  fetch(apiUrl, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data.joke);
      apiBody.innerHTML = data.joke;
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchData();

document.getElementById("fetchjoke").addEventListener("click", fetchData);
