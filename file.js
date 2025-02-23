document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
});

function openFinanceSection() {
    document.getElementById("finance-section").classList.toggle("hidden");
}

function calculateSavings() {
    const budget = document.getElementById("monthly-budget").value;
    const expenses = document.getElementById("monthly-expenses").value;
    if (!budget || !expenses) return;
    const savings = budget - expenses;
    let advice = "";

    if (savings > 0) {
        advice = `You can invest your ₹${savings} in:
        <ul>
            <li>📈 Stock Market (Index Funds, SIPs)</li>
            <li>🏅 Digital Gold for long-term safety</li>
            <li>💰 High-Interest Savings Accounts</li>
            <li>📊 Cryptocurrency (Only a small percentage)</li>
            <li>📚 Online Courses to improve skills</li>
        </ul>`;
    } else {
        advice = "You're spending more than your budget! Consider reducing unnecessary expenses.";
    }

    document.getElementById("finance-tips").innerHTML = advice;
    document.getElementById("finance-tips").classList.remove("hidden");
}
