let male_name = document.getElementById("male");
let female_name = document.getElementById("female");
let love_result = document.getElementById("love-percentage");
let calculate_btn = document.getElementById("calculate-btn");

//generate a random number between 1 - 100
function generateRandomNumber(){
    let random_number = Math.floor(Math.random()*100);
    return random_number;
}

//display the result base upon user input
function validateInput(){
    if(male_name.value !== "" && female_name.value !== ""){
        love_result.style.display = "block";
    }
}

//disable calculate btn
function disableCalculateBtn(){
    if(love_result.style.display === "block"){
        calculate_btn.removeEventListener("click", sendResult);
    }
}


//display user love percentage in the browerser
function sendResult(){
    if(male_name.value !== "" && female_name.value !== ""){
        let percentage_of_love = generateRandomNumber();
        love_result.innerHTML = `${percentage_of_love}%`;
    }

    validateInput();
}


calculate_btn.addEventListener("click", sendResult);

