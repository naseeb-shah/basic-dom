// update data dynamically in html file using dom manupalution
let content = document.querySelector("#content");
content.innerHTML = "<h1>Deen Shah</h1><p>Jack ware</p>";
const englishNames = [
  "John",
  "Mary",
  "Michael",
  "Emily",
  "James",
  "Sarah",
  "David",
  "Emma",
  "Daniel",
  "Olivia",
];

// const namesCantainer=document.querySelector('#name')
// inject names in html page
// function namesShow(){
//     englishNames.forEach((e,index)=>{
// // create a paragraph tag using javascript
//         let pTag= document.createElement('p')
//         pTag.innerHTML=e
//         // add uniq ids
//         pTag.id="alima"+index+e
//         pTag.addEventListener('mouseenter',()=>changeColor("alima"+index+e))
//         pTag.addEventListener('click',()=>remove("alima"+index+e))

//         namesCantainer.append(pTag)

//     })
// }
// namesShow()
//  function changeColor(id){

//  let element= document.querySelector(`#${id}`)
// //  sb kuch change kr skte hain
// //  element.style.display="none"
// element.style.color="blue"
// element.style.fontSize="50px"
// element.style.textAlign="center"

//  }

function remove(id) {
  let element = document.querySelector(`#${id}`);

  element.style.display = "none";
}
//  access the parent element of buttons
let parent = document.querySelector("#parent");
let data = parent.children;
content.innerHTML = parent.firstElementChild.innerText;
