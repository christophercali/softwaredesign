//open this in devtools and see the result

console.log('this working!!')

    // Adding hearts in the title of the Ugly Website on click
    var taylorTitle = document.getElementById("bigtitle");
    var addLove = function(){
    taylorTitle.textContent += " <3";
}
taylorTitle.addEventListener("click", addLove);


//  This works but is crazy because it keeps adding the message at the top. 
//   // // Trying a different way to add a message to the top

//     let scrollTop = function(){
//     const newHeading = document.createElement("h1");

//     // // and give it some content
//     const newHContent = document.createTextNode("Scrolling has commenced");

//     newHeading.appendChild(newHContent);

//     const currentHeading = document.getElementById("container");
//     document.body.insertBefore(newHeading, currentHeading);
//     }

//     addEventListener('scroll',scrollTop);



// Adding scroll functionality to the bottom so it is less disruptive. 
    // Creating a function to add a div at the bottom of the page 
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    let additiveOnPage = function(){
        // create a new div element
        const newDiv = document.createElement("div");

        // and give it some content
        const newContent = document.createTextNode("You are on the move.");
        
        newDiv.appendChild(newContent);

        const currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);
    }

    addEventListener('scroll',additiveOnPage);

// event listener to change styling
// creating a function to change styling
let colors = ['red', 'blue', 'purple', 'green', 'black', 'yellow'];
var clickColorChange = document.getElementById("container");
taylorTitle.addEventListener('click', function(){
//generates random number between 0 and 4
let randomColorIndex = Math.floor(Math.random() * colors.length);
let randomColor = colors[randomColorIndex];
clickColorChange.style.color = randomColor;
})