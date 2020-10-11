export default function likeChange() {
    document.querySelectorAll('.btn-like').forEach(like => {
        like.addEventListener('click', () => {
            if (like.classList.contains('btn-like')) {
                like.classList.remove('btn-like')
                like.classList.add('btn-like-new')
            } else {
                like.classList.remove('btn-like-new')
                like.classList.add('btn-like')
            }
        })
    })
}