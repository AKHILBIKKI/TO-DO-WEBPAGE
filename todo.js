let inputT = document.querySelector(".todo_input");
let inputD = document.querySelector(".todo_date");
let outputcontainer = document.querySelector(".output_container");
let storagefile;

let displayvalue = [];

let str= localStorage.getItem("displayvalue");
let prevdisplayvalue = JSON.parse(str);

prevhtml();

function addtodo() {
  let inputText = inputT.value;
  let inputDate = inputD.value;
  displayvalue = prevdisplayvalue !== undefined ? prevdisplayvalue : [];
  displayvalue.push({ Text: inputText, Date: inputDate });
  storagefile= JSON.stringify(displayvalue);
  localStorage.setItem("displayvalue",storagefile);
  addhtml();
  inputT.value = "";
  inputD.value = "";
}



function addhtml() {

    let innerhtml ='';

  for (let i = 0; i < displayvalue.length ; i++) {
    
    // let Text = displayvalue[i].Text;
    // let Date = displayvalue[i].Date;
    let { Text, Date } = displayvalue[i] ;
    innerhtml += `
    <span id="output-text">»${Text}</span>
    <span id="output-date">${Date}</span>
    <button class="delete-btn " onclick='displayvalue.splice(${i},1);
    addhtml()' >DELETE</button>
    `;
  }
//   localStorage.setItem(storagefile);

  outputcontainer.innerHTML = innerhtml;

}

function prevhtml() {

    let innerhtml ='';

  for (let i = 0; i < prevdisplayvalue.length ; i++) {
    
    let { Text, Date } = prevdisplayvalue[i] ;
    innerhtml += `
    <span id="output-text">»${Text}</span>
    <span id="output-date">${Date}</span>
    <button class="delete-btn " onclick='prevdisplayvalue.splice(${i},1);
    prevhtml()' >DELETE</button>
    `;
  }

  outputcontainer.innerHTML = innerhtml;

}

