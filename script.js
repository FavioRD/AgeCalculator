function calculateAge() {
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter a valid date");
        return;
    }

    let birthDate = new Date(year, month - 1, day);
    let today = new Date();
    
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("years").textContent = ageYears;
    document.getElementById("months").textContent = ageMonths;
    document.getElementById("days").textContent = ageDays;
}
