const btn = document.querySelectorAll('.header__link')
const poisk = document.querySelector('.button')

btn.forEach((button) => {
    button.addEventListener('click', function () {
        alert('Sorri mi ne rabotayem he-he')
    })
});

poisk.addEventListener('click', function () {
    alert('Prostite no mi besplatno ne rabotayem, no vsye je Fatipedia.uz k vashim uslugam ;)')
})
