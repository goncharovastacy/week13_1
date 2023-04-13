const button = document.getElementById('button');
const defaultUserImages = [
    "/assets/images/user1.jpg",
    "/assets/images/user2.jpg",
    "/assets/images/user3.jpg",
    "/assets/images/user4.jpg",
    "/assets/images/user5.jpg"
];

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
    
    let userImage;
        if (link === '') {
            let rand = Math.floor(Math.random() * defaultUserImages.length);
            userImage = defaultUserImages[rand];
        }
        else {
            userImage = link;
        }

    if (fullName === '' || checkboxNo.checked) 
    {
        userFullName = "username";
    }
    else if (checkboxYes.checked) {
        userFullName = addName(fullName);
    } 
    else if (checkboxYes.checked && fullName === '') 
    {
        userFullName = "username";
    }
    else {
        userFullName = "username";
    }

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (month < 10){
        month = '0' + month;
    }

    if (minutes < 10){
        minutes = '0' + minutes;
    }

    let weekDay;
    switch(date.getDay()){
        case 0:
            weekDay = 'Воскресенье';
            break;
        case 1:
            weekDay = 'Понедельник';
            break;
        case 2:
            weekDay = 'Вторник';
            break;
        case 3:
            weekDay = 'Среда';
            break;
        case 4:
            weekDay = 'Четверг';
            break;
        case 5:
            weekDay = 'Пятница';
            break;
        case 6:
            weekDay = 'Суббота';
            break;
        default:
            weekDay = 'День недели';
    }

    let parentDiv = document.getElementById('result');
parentDiv.innerHTML = parentDiv.innerHTML + `<div class="user-wrapper">
<div class="user">
  <img src="${userImage}" alt="" id="img" />
  <h4 id="username">${userFullName}</h4>
</div>
<div class="date"><p>${weekDay}, ${day}.${month}.${year} в ${hours}:${minutes}</p></div>
</div>
<p id="commentresult">${commentResult}</p>`;
}
button.addEventListener('click', leaveComment);
