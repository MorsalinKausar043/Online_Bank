
document.getElementById("form_btn").addEventListener("click", () => {
    const input_email = document.getElementById("input_email").value;
    const input_password = document.getElementById("input_password").value;

    input_email === "morsalinkausar043@gmail.com" && input_password === "12345" ? window.location.href = "bank.html" : alert("invalid User details!");
});