import * as restModule from './restaurantList.js';

// Main pop up div
let restuarantPopUp = document.querySelector('.restaurantBox');

// Restaurant categories
let categoryBtns = document.querySelectorAll('.category');

categoryBtns.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let finalCategory;
        if(choice.id === 'anything'){
            finalCategory = Object.keys(restModule.restaurantList);
        } else{
            finalCategory = Object.keys(restModule.restaurantList).filter((rest)=>{
                if(restModule.restaurantList[rest].categoryArr.includes(choice.id)){
                    return true;
                }
            });            
        }

        let randomRest = finalCategory[Math.floor(Math.random()*Math.floor(finalCategory.length))];

        restModule.restaurantList[randomRest].display(
            restuarantPopUp,
            document.getElementById('restName'),
            document.getElementById('restNumber'),
        )
    });
});

// Page reset button

let retryBtn = document.querySelector('.retry');

retryBtn.addEventListener('click',()=>{
    location.reload();
});

// About button

let aboutBtn = document.getElementById('about');
let aboutExit = document.getElementById('aboutExit');
let aboutBox = document.getElementById('aboutBox');

aboutBtn.addEventListener('click',()=>{
    aboutBox.style.display = 'block';
});

aboutExit.addEventListener('click',()=>{
    aboutBox.style.display = 'none';
});