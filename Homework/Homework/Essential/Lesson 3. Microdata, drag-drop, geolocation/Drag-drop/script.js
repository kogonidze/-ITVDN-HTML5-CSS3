const productList = document.querySelector(`.productList`);
const products = document.querySelectorAll(`.product`);
const basket = document.querySelector(`.basket`);

for (const product of products) {
    product.draggable = true;
}

productList.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`selected`);
});

productList.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`selected`);
});

basket.addEventListener(`dragover`, (evt) => {
    evt.preventDefault();
});

basket.addEventListener(`drop`, (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    const activeElement = productList.querySelector(`.selected`);
    basket.appendChild(activeElement);
})