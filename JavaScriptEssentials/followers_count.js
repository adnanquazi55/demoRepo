let count = 0;

function increaseCount() {
    count++; //increment by 1
    displayCount(); //Display the count
    checkCountValue(); //keep checking this function on every count
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count; //Display the count in HTML
}

function checkCountValue() {
    if (count === 10) {
        alert(`Congratulations for ${count} followers`);
    } else if (count === 20) {
        alert(`Congratulations for ${count} followers`);
    }
}



