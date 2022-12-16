//open this in devtools and see the result
console.log('this working!!')

// No longer need the auto scroll since I changed the sizing to match the window
// Decision was made because modals did not function great on the mobile platform
// window.scroll(520, 1536);



// Image modal only - other modals are done with Bootstrap
var modal = document.getElementById("myModalArticle");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImgArticle");
var modalImg = document.getElementById("articleImage");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// p5sketch - will just embed anyway
// let sketch = function(p) {
//     p.setup = function(){
//       p.createCanvas(windowWidth/2, windowHeight/2);
//       background(255);
//     }

//     p.draw = function(){
//         background(255);
//         // triangles
//       for(m=0; m < windowHeight; m++){
//         p.drawTriangle (m, m)
//         p.stroke(255, 255, 255);
//         var randTri = color(random(180,255),0,0);
//         p.fill(randTri);}
      
//       // creating random lines from the center
//       for(k=0; k < windowHeight; k++){
//         p.funLinesCentered(k);
//         var lineColor = color(0,random(100,180),0);
//         p.stroke(lineColor);
//         p.strokeWeight(random(1,15))
//       }
      
//       //   drawing small circles
//       for(j=0; j < 500; j++){
//         p.drawCircle(5);
//         p.fill(255, 255, 0);
//         p.strokeWeight(5);
//       }
          
      
//       let circlesQty = 80;
//       for(i=0; i < circlesQty; i++){
//         p.drawCircle(50);
//         var currColor = color(random(245,255),random(245,255),random(245,255));
//         p.fill(currColor);
//       }
      
//     }
    
//     function drawCircle (maxSize){
//       p.circle(random(0, windowWidth),random(0,windowHeight), random (0,maxSize));
//     }
    
//     function funLinesCentered (yLoc){
//       p.line(windowWidth/2, windowHeight/2, random(0,windowWidth), yLoc);
//     }
    
//     function drawTriangle (t, th) {
//       p.triangle (0, 0, t, th,random(0,windowWidth),random(0,windowHeight));
//     }    
//     };
//   new p5(sketch, window.document.getElementById('containerp5'));



// Setting interactivity with the svg elements - want to adjust opacity

$(document).ready(function(){

    $("#plane").click(function(){
      $("#plane").addClass("opaque");
    });

    $("#flag").click(function(){
        $("#flag").addClass("opaque");
      });
      
      $("#tree").click(function(){
        $("#tree").addClass("opaque");
      });

      $("#scissor").click(function(){
        $("#scissor").addClass("opaque");
      });

      $("#sun").click(function(){
        $("#sun").addClass("opaque");
      });

      $("#yarn").click(function(){
        $("#yarn").addClass("opaque");
      });

      $("#shovel").click(function(){
        $("#shovel").addClass("opaque");
      });

      $("#sauce").click(function(){
        $("#sauce").addClass("opaque");
      }); 

  });














// document.addEventListener("DOMContentLoaded", function() {
//     try {
//       MicroModal.init({
//         awaitCloseAnimation: true, // set to false, to remove close animation
//         onShow: function(modal) {
//           console.log("micromodal open");
//           addModalContentHeight('short');
//           /**************************
//             For full screen scrolling modal, 
//             uncomment line below & comment line above
//            **************************/
//           //addModalContentHeight('tall');
//         },
//         onClose: function(modal) {
//           console.log("micromodal close");
//         }
//       });
//     } catch (e) {
//       console.log("micromodal error: ", e);
//     }
//   });
  
//   function addModalContentHeight(type) {
//     var type = (arguments[0] != null) ? arguments[0] : 'short';
//     var modalContainer = $("#modal-container");
//     var modalHeader = $("#modal-header");
//     var modalContentContent = $("#modal-content-content");
//     var modalContent = $("#modal-content");
//     var modalFooter = $("#modal-footer");
  
//     var modalIsDefined =
//       modalContainer.length &&
//       modalHeader.length && 
//       modalContent.length &&
//       modalFooter.length;
  
//     if (modalIsDefined) {
//       var modalContainerHeight = modalContainer.outerHeight();
//       var modalHeaderHeight = modalHeader.outerHeight();
//       var modalFooterHeight = modalFooter.outerHeight();
  
//       console.log("modalContainerHeight: ", modalContainerHeight);
//       console.log("modalHeaderHeight: ", modalHeaderHeight);
//       console.log("modalFooterHeight: ", modalFooterHeight);
      
//       var offset = 80;
      
//       var height = modalContainerHeight - (modalHeaderHeight + modalFooterHeight + offset);
      
//       console.log('height: ',height);
      
//       if(!isNaN(height)){
//         height = height > 0 ? height: 20;
//         if(type == 'short'){
//           modalContent.css({'height': height + 'px'});
//         }
//         else{
//           modalContainer.css({'height': '100%', 'overflow-y': 'hidden', 'margin-top': '40px'});
//           modalContentContent.css({'height': '100%', 'overflow-y': 'auto'});
//           modalContent.css({'overflow-y': 'visible'});
//           modalFooter.css({'margin-bottom': '120px'});
//         }
//         setTimeout(function(){
//           modalContent.css({'display': 'block'});
//           var modalContentDOM = document.querySelector('#modal-content');
//           modalContentDOM.scrollTop = 0;
//         });
//       }
      
//     }
    
//   }
  































// let div = document.createElement('div'); //create element
// div.classList.add('btn'); //add class to element

// console.log(div);

// //add element to page - must be added to a parent
// document.querySelector('.container').appendChild(div);


// //add and remove classes
// div.classList.add('btn-click');
// div.classList.remove('btn');

// div.innerText = 'dude whats up';
// document.querySelector('h1').innerText = 'this is now an official header'

// //select element to reference
// let header = document.querySelector('h1');
// //change one style at a time
// header.style.color = 'red';
// //if the style has a dash in it - you have to reference it using brackets
// header.style["padding-top"] = "10px"; 

// // ABOVE THIS IS THE MAIN NEW CREATION




// //i can also specify multiple styles at once. however if i do this, i will overwrite all the styles that were applied (no longer red)
// header.style = 'font-family: monospace; font-size: 60px';

// //we can also straight up edit the HTML by specifying it all to one string- but this will replace the element entirely - notice how our previous div element is gone and replaced by the string we specified

// document.querySelector('.btn-click').innerHTML = '<div class="test-outer"><div class="test-inner">this is not a drill</div></div>'




// //let's create a new element for fun
// let newDiv = document.createElement('div');
// newDiv.classList.add('clickme');
// newDiv.innerText = 'yes i am clickable';
// newDiv.style['font-size'] = '30px';
// newDiv.style.border = '1px solid black';
// document.querySelector('.container').appendChild(newDiv);

// let colors = ['red', 'blue', 'purple', 'green', 'black', 'yellow'];


// // INTERACTIVITY HERE _ LOOKING FOR A CLICK - There's MouseEvent, TouchEvent, 
// newDiv.addEventListener('click', function(){
//     console.log('is this workin');
//     //generates random number between 0 and 4
//     let randomColorIndex = Math.floor(Math.random() * colors.length);
//     let randomColor = colors[randomColorIndex];
//     newDiv.style.color = randomColor;
// })

// let arrayRGB = ['red', 'green', 'blue'];

// arrayRGB.forEach(document.createElement(div,0,arrayRGB))