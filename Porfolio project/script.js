let namstebtn= document.querySelector('button');
namstebtn.addEventListener('click',inputMsg);

function inputMsg(){
    let name=prompt('enter stu name?');
    namstebtn.textContent='roll no.1'+name;
    alert("namste world!");
}
