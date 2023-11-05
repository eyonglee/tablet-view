let url = window.location.pathname;
let filename = url.substring(url.lastIndexOf('/')+1)
let topic = ""

if (filename == "index.html"){
    topic = "pet";
}
else if (filename == "recipes.html"){
    topic = "recipe";
}
else {
    topic = "location";
}

let userInput = prompt(`What is the name of your ${topic}?`);
let h2Tags = Array.from(document.getElementsByTagName('h2'));

let isOnPage = false
h2Tags.forEach(h2 => {
    if(h2.textContent.trim() === userInput) {
        isOnPage = true;
    }
});

if(isOnPage) {
alert(`Your ${topic} is on this page!`);
}
else {
    alert(`Your ${topic} is not on this page :(`)
}