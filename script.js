const input = document.getElementById('input-text')

input.onmouseover = onMouseHover;
input.onmouseout = onMouseNotHover;

function onMouseHover() {
    const container = document.getElementById('container');
    const myDiv = document.createElement('div');
    myDiv.textContent = 'Нікому не показуйте свій пароль!'
    myDiv.classList.add('big_font_size')
    myDiv.classList.add('color_of_text')
    myDiv.setAttribute('myDiv', 'text-area')
    container.appendChild(myDiv)
}

function onMouseNotHover() {
    const ourDiv = document.querySelector('.big_font_size.color_of_text');
    ourDiv.remove();
}