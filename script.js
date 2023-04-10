let rating = document.getElementsByClassName("rating_star")


for (let i = 0; i< 5; i++){
    rating[i].addEventListener('mouseover', e =>
    {
        console.log(1)
        rating[i].color = '#000000B2';
    })

    rating[i].addEventListener('mouseleave', e => {
        star1.color = '#dabd18b2';
    })

    rating[i].addEventListener('mousedown', e => {
        star1.src = star1.color = '#000000B2';
        for (let i = 0; i<5; i++){
            rating[i].removeEventListener('mouseover');
            rating[i].removeEventListener('mouseleave');
        }
    })
}