const addDevSkill = function (skill) {
    let listItem = document.createElement('li');
    listItem.innerHTML = skill;
    document.getElementById("coding-section").appendChild(listItem);
};

const confuse = function (item) {
   return 'I\'d like a ' + item + ', please!';
};
 
const ginger = 'cocktail';
let numberOfClicks = 0;

const clickHandler = function (text) {
    debugger;
    numberOfClicks = numberOfClicks + 1;
    text = 'click ' + numberOfClicks;
    if (numberOfClicks <= 3) {
        alert(text);
    } else {
        alert("Drink in moderation-- no more cocktails for you!");
    }
    console.log('numberOfClicks', numberOfClicks);
};

// Declare brainSkills array below this line

document.addEventListener("DOMContentLoaded", function (event) {

   document.getElementById('cocktail-section').innerHTML = confuse(ginger);

});
