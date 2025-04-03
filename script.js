const input=document.getElementById('input-box');
const list=document.getElementById('list-container');
function addtask(){
    if(input.value===''){
        alert("You must write something!");
    }else{
        let li=document.createElement('li');//lets you create a li tag
        li.innerHTML=input.value;
        list.appendChild(li);
        span=document.createElement('span')
        span.innerHTML="\u00d7";//cross sign
        li.appendChild(span);
    }
    input.value="";
    saveData();
}
list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){//tag name should always be in uppercase in this case
        e.target.classList.toggle("checked");/*Every HTML element has a classList property, which is a list of all the CSS classes applied to that element.
                                              classList allows us to add, remove, and toggle classes easily. EXAMPLE:<li class="active">Task 1</li>
                                              OUTPUT:classList now contains ["active"].*/
                                              
                                              /*toggle("checked") checks if the "checked" class is present:
                                              ✅ If not present, it adds the "checked" class.❌ If already present, it removes the "checked" class.*/

                                              //if li is clicked, it will be checked it will change that li tag to class name='checked' so it will use the css code for checked class
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data", list.innerHTML);//local storage is used to store data in the browser. It stores data with no expiration date.
    //local storage is a property of the window object, so you can access it using window.localStorage or simply localStorage.
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();