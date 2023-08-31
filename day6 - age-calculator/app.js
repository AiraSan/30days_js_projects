let userInput = document.querySelector("#date");
userInput.max = new Date().toISOString().split("T")[0];
const result = document.getElementById("result");

function calculateAge() {
    let birthday = new Date(userInput.value);

    let birthDate = birthday.getDate();
    let birthMonth = birthday.getMonth() + 1;
    let birthYear = birthday.getFullYear();

    let today = new Date();

    let currentDate = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    // console.log(birthDate, birthMonth, birthYear)
    // console.log(currentDate, currentMonth, currentYear)

    let d3, m3, y3;

    y3 = currentYear - birthYear;

    if(birthMonth <= currentMonth) {
        m3 = currentMonth - birthMonth;
    } else {
        y3--;
        m3 = 12 + (currentMonth - birthMonth);
    }

    if(birthDate <= currentDate) {
        d3 = currentDate - birthDate;
    } else {
        m3--;
        d3 = getDaysInMonth(birthYear, birthMonth) + (currentDate - birthDate);
    }

    if(m3 < 0) {
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }


}