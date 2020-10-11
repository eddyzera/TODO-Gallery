export default function loginDrop() {
    document.querySelector('.login').addEventListener('click', () => {
        let ul = document.querySelectorAll('ul')[1];
        if (ul.classList.contains('close')) {
            ul.classList.remove('close')
            ul.classList.add('open')
        } else {
            ul.classList.remove('open')
            ul.classList.add('close')
        }
    })
}