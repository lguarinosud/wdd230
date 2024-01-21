const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
//const navi = document.querySelector('#navi');

hamButton.addEventListener('click', () => {
    console.log("menu clicked")
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');

});