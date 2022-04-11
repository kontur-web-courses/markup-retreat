const ratingStars = [...document.getElementsByClassName("star")];
const ratingResult = document.querySelector(".img");

printRatingResult(ratingResult);

function executeRating(stars, result) {
    const starClassActive = "star";
    const starClassUnactive = "star";
    const starsLength = stars.length;
    let i;
    stars.map((star) => {
        star.onmouseenter = () => {
            i = stars.indexOf(star);

            if (star.className.indexOf(starClassUnactive) !== -1) {
                printRatingResult(result, i + 1);
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                printRatingResult(result, i);
                for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
            }
        };
    });
}

function printRatingResult(result, num = 0) {
    result.textContent = `${num}/5`;
}

executeRating(ratingStars, ratingResult);