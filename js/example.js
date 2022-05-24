const fox_result = document.getElementById("fox_result");
const dog_result = document.getElementById("dog_result");
const fox_btn = document.getElementById("fox_btn");
const dog_btn = document.getElementById("dog_btn");

fox_btn.addEventListener('click', getRandomFox, false)
dog_btn.addEventListener('click', getRandomDog, false)

function getRandomFox() {
    fetch('https://randomfox.ca/floof/')
        .then(res => res.json())
        .then(data => {
            fox_result.innerHTML = `<img src="${data.image}"/>`
        })
}

function getRandomDog(){
  fetch('https://random.dog/woof.json')
  .then(res=>res.json())
  .then(data=> { 
    if (data.url.includes('.mp4')){
      getRandomDog()
    }else {
    dog_result.innerHTML= `<img src="${data.url}"/>`
    }
  })
}