const pictures = document.querySelectorAll('.picture');

pictures.forEach(picture => {
    picture.addEventListener('mouseover', () => {
        removeFocus();
        picture.classList.add('selected');
        console.log(pictures)
    })

    removeFocus = () => {
        pictures.forEach(picture => {
            picture.classList.remove('selected')
        })
    }
})