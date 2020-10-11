export default function saveChange() {
    document.querySelectorAll('.btn-save').forEach(save => {
        save.addEventListener('click', () => {
            if (save.classList.contains('btn-save')) {
                save.classList.remove('btn-save')
                save.classList.add('btn-save-new')
            } else {
                save.classList.remove('btn-save-new')
                save.classList.add('btn-save')
            }
        })
    })
}