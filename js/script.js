function Checker() {
    let check = true;

    const errorTop = document.getElementById('error-message');
    const errorSide = document.getElementById('error-message1');

    errorTop.textContent = "";
    errorSide.textContent = "";

    const begin1 = parseInt(document.getElementById('Beginning1').value);
    const end1 = parseInt(document.getElementById('Ending1').value);
    const begin2 = parseInt(document.getElementById('Beginning2').value);
    const end2 = parseInt(document.getElementById('Ending2').value);

    if (isNaN(begin1) || isNaN(end1)) {
        errorTop.textContent = "Top numbers must be numeric.";
        check = false;
    } else if (begin1 > end1) {
        errorTop.textContent = "Beginning number must be ≤ ending number (Top).";
        check = false;
    }

    // Validate Side Numbers
    if (isNaN(begin2) || isNaN(end2)) {
        errorSide.textContent = "Side numbers must be numeric.";
        check = false;
    } else if (begin2 > end2) {
        errorSide.textContent = "Beginning number must be ≤ ending number (Side).";
        check = false;
    }

    if (begin1 < -50) {
        errorTop.textContent = "Begin1 cannot be less than -50";
        check = false;
    }
    else if (end1 > 50) {
        errorTop.textContent = " end1 cannot be greater than 50";
        check = false;
    }

    if (begin2 < -50) {
        errorSide.textContent = "Begin2 cannot be less than -50";
        check = false;
    }
    else if (end2 > 50) {
        errorSide.textContent = " end2 cannot be greater than 50";
        check = false;
    }

    if (check) {
        Table(begin1, end1, begin2, end2);
    } else {
        return false;
    }
}

function Table(begin1, end1, begin2, end2) {
    const table = document.getElementById("multiplicationtable");
    let output = "<tr><th></th>";

    for (let i = begin1; i <= end1; i++) {
        output += `<th>${i}</th>`;
    }
    output += "</tr>";

    for (let j = begin2; j <= end2; j++) {
        output += `<tr><th>${j}</th>`;
        for (let i = begin1; i <= end1; i++) {
            output += `<td>${i * j}</td>`;
        }
        output += "</tr>";
    }

    table.innerHTML = output;
}
