

document.getElementById('input_value').addEventListener('keyup', function (event) {

    const text = event.target.value;
    const btnDelete = document.getElementById('btn_delete');
    if (text === 'email') {
        btnDelete.removeAttribute('disabled');
    } else {
        btnDelete.setAttribute('disabled', true);
    }
});

document.getElementById('btn_delete').addEventListener('click', function () {
    const secretInfo = document.getElementById('secret_info');
    secretInfo.style.display = 'none';
});


