document.querySelector("button").addEventListener('click', jumpModal)

function jumpModal() {
    document.querySelector('.modal').style.display = "flex";
    document.querySelector('.modal_bg').style.display = "flex";
    document.querySelector('.modal').style.animation = "fade 1s linear normal";
};
document.querySelector(".modal_bg").addEventListener('click', timeCloseModal);
document.querySelector("ion-icon").addEventListener('click', timeCloseModal);
document.querySelector(".red").addEventListener('click', timeCloseModal);
document.querySelector(".green").addEventListener('click', timeCloseModal);

function closeModal() {
    document.querySelector('.modal').style.display = "none";
    document.querySelector('.modal_bg').style.display = "none";
}
function timeCloseModal() {
    setTimeout(closeModal, 950);
    document.querySelector('.modal').style.animation = "fade_back 1s linear normal";
}
