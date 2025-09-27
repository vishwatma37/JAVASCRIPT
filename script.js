const apiBody = document.querySelector(".api_body");
const apiUrl = "https://icanhazdadjoke.com";

// async function fetchData() {
  const fetchData = async () => {
  try { 
  const res = await fetch(apiUrl, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();
  console.log(data.joke);
  apiBody.innerHTML = data.joke;
  } catch(error){
    apiBody.innerHTML = 'error!!!!!!';
      console.log(error);
  }
}

fetchData();

document.getElementById("fetchjoke").addEventListener("click", fetchData);
