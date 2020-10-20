function calculate() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    let operators = document.getElementsByName('operation');
    let result;

    while (true) {
        if (firstNumber.length == 0) {
            document.getElementById("warning").innerHTML = "Chưa nhập số thứ nhất."
            return ;
        } else if (isNaN(parseFloat(firstNumber))) {
            document.getElementById("warning").innerHTML = "Số thứ nhất không phải là số thực."
            return ;
        } else {
            firstNumber = parseFloat(firstNumber);
        }
        if (secondNumber.length == 0) {
            document.getElementById("warning").innerHTML = "Chưa nhập số thứ hai."
            return ;
        } else if (isNaN(parseFloat(secondNumber))) {
            document.getElementById("warning").innerHTML = "Số thứ hai không phải là số thực."
            return ;
        } else {
            secondNumber = parseFloat(secondNumber);
        }
        let count = 0;
        for (let i = 0; i < operators.length; i++) {
            if (operators[i].checked) {
                count++;
            }
        }
        if (count != 1) {
            document.getElementById("warning").innerHTML = "Chưa chọn phép tính."
            return ;
        }
        document.getElementById("warning").innerHTML = ""
        break;
    }

    for (let i = 0; i < operators.length; i++) {
        if (operators[i].checked) {
            const operator = operators[i].value;
            if (operator == 'add')
                result = firstNumber + secondNumber;
            else if (operator == 'subtract')
                result = firstNumber - secondNumber;
            else if (operator == 'multiple')
                result = firstNumber * secondNumber;
            else if (operator == 'divide')
                result = firstNumber / secondNumber;
        }
    }
    document.getElementById("result").innerHTML = result.toString();
}