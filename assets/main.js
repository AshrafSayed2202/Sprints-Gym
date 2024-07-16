document.getElementById('navOpen').addEventListener('click', () => {
    document.querySelector('nav ul').classList.add('actv')
})
document.getElementById('navClose').addEventListener('click', () => {
    document.querySelector('nav ul').classList.remove('actv')
})