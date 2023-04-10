for (let i = 1; i <= 5; i++) {
    let emptyStar = document.getElementById(`star-empty${i}`);
    emptyStar.addEventListener("mouseenter", (e) => {
        for (let j = 1; j <= i; j++) {
            document.getElementById(`star${j}`).style.display = "inline";
        }
    });
    emptyStar.addEventListener("mouseleave", (e) => {
        for (let j = 1; j <= i; j++) {
            document.getElementById(`star${j}`).style.display = "none";
        }
    })
}