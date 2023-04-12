const button = document.getElementById('button');

function addName (name) {
    
    let finalName = name.toLowerCase().trim().split(/\s+/).map((word) =>{
        return word[0].toUpperCase() + word.substring(1);
        }).join(' ');
        return finalName; 
}
function checkSpam (text) {
    let commentFiltr = text.replace(/viagra/ig, "***").replace(/xxx/ig, "***");
    return commentFiltr;
}

function leaveComment () {
    const fullName = document.getElementById('name').value;
const link = document.getElementById('link').value;
const comment = document.getElementById('comment').value;
    let userFullName;
    let commentResult = checkSpam(comment);
    let checkboxYes = document.getElementById('yes');
    let checkboxNo = document.getElementById('no');

//условия
    if (fullName.value == '' || checkboxNo.checked) {userFullName = "username";}
    else if (checkboxYes.checked){
        userFullName = addName(fullName);
    } 
    //тут не работает
    else if (checkboxYes.checked && fullName.value == '') {userFullName = "username";}
    else {userFullName = "username";}

    let parentDiv = document.getElementById('result');
parentDiv.innerHTML = parentDiv.innerHTML + `<div class="user">
<img src="${link}" alt="" id="img" /><h4 id="username">${userFullName}</h4>
</div><p id="commentresult">${commentResult}</p>`;
}

button.addEventListener('click', leaveComment);



