const star1 = document.getElementById('s1');
const star2 = document.getElementById('s2');
const star3 = document.getElementById('s3');
const star4 = document.getElementById('s4');
const star5 = document.getElementById('s5');

let arr = [star1, star2, star3, star4, star5];

for (let i = 0; i< 5; i++){
    arr[i].addEventListener('mouseover', e => {
        star1.src = 'img/star.png';
    })

    arr[i].addEventListener('mouseleave', e => {
        star1.src = 'img/star-empty.png';
    })
    arr[i].addEventListener('mousedown', e => {
        star1.src = 'img/star.png';
        for (let i = 0; i<5; i++){
            arr[i].removeEventListener('mouseover');
            arr[i].removeEventListener('mouseleave');
        }
    })
}
