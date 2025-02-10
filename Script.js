function calculateAge() {
    let dobInput = document.getElementById('dob').value;
    if (!dobInput) {
        alert('Please enter your date of birth');
        return;
    }
    
    let dob = new Date(dobInput);
    let today = new Date();
    
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();
    
    if (days < 0) {
        months--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    document.getElementById('result').innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
}
