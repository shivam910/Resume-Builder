const body = document.querySelector("body");
body.style.backgroundColor = "black";

const btn = document.querySelector("button");
btn.style.cursor = "pointer";
btn.style.width = "150px";
btn.style.color = "white";

const input = document.querySelector('.input-fields')
const output = document.querySelector('.output')

let inputShow = true

async function TextEditor(element){
  const newEditor =  await ClassicEditor
  .create(element,{
    toolbar: [ 'heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ],
  } )
  return newEditor
 
}

let workExpdetails;
TextEditor(input["workexp"]).then(nEditor=>{
  workExpdetails = nEditor
})
let Academic;
TextEditor(input["academics"]).then(nEditor=>{
  Academic = nEditor
})
let Projects;
TextEditor(input["projects"]).then(nEditor=>{
    Projects = nEditor
})
let Achievements;
TextEditor(input["achievements"]).then(nEditor=>{
    Achievements = nEditor
})
let Skills;
TextEditor(input["skills"]).then(nEditor=>{
    Skills = nEditor
})


function toggle(){
    if(inputShow){
         input.style.display = "none"
         inputShow = false 
         output.innerHTML=`
           <div class="hero">
            <h1>${input["name"].value}</h1>
            <h3>${input["title"].value}</h3>
           </div>
           <div class="main">
               <div>
                 <h2>OBJECTIVE</h2>
                 <p>${input["objective"].value}</p>
                 <h2>SKILLS</h2>
                 <p>${input["skills"].value}</p>
                 <h2>ACHIEVEMENTS</h2>
                 <p>${input["achievements"].value}</p>
                 <h2>CONTACT</h2>
                 <p>${input["contact"].value}</p>
               </div>
               <div>
                <h2>WORK EXPERIENCE</h2>
                ${workExpdetails.getData()}
                <h2>ACEMEDIC DETAILS</h2>
                 ${Academic.getData()}
                <h2>PROJECTS</h2>
                <p>${input["projects"].value}</p>
               </div>
           </div>
           <div class="btn">
              <button onclick="print()">Print Resume</button>
        </div>
         `
    }else{
        input.style.display =  "block"
        inputShow = true
        output.innerHTML=""
    }
}

