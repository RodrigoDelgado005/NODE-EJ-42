let obj = document.getElementById('text1').addEventListener('blur', (e) => {
    if (e.target.value == '')
        alert('ERROR no ha ingresado ningun dato')
})