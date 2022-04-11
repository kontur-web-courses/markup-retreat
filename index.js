const stars = document.getElementsByClassName('star');
for (let starNumber = 0; starNumber < stars.length; starNumber++) {
    const star = stars[starNumber];
    star.addEventListener('mouseenter', (evt) => {
        for (let i = 0; i <= starNumber; i++)
            stars[i].src = '/img/star.png'
    })

    star.addEventListener('mouseout', (evt) => {
        for (let i = 0; i <= starNumber; i++)
            stars[i].src = '/img/star-empty.png'
    })
}
