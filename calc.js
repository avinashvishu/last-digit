function pow() {
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let num1 = Number(a);
    let num2 = Number(b);

    if (num1 >= 0 && num2 >= 0) {
        let power = Math.pow(num1, num2)
        let lastDigit = power.toString().at(-1);
        out = `The last digit is ${lastDigit}`
        console.log(power.toString().at(-1))
    } else {
        out = "ennter valid input";
        console.log("ennter valid input")
    }
    document.getElementById('output').innerText = out;
}