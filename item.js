const flex_71 = document.getElementById('flex_71');
const flex_65 = document.getElementById('flex_65');
const curve_71 = document.getElementById('curve_71');
const curve_65 = document.getElementById('curve_65');
const quantityMinus = document.getElementById('quantityMinus');
const quantityPlus = document.getElementById('quantityPlus');
const quantityCounter = document.getElementById('quantityCounter');

let counterItem = 1;
quantityCounter.innerHTML = counterItem;

flex_71.onclick = (e) => {
    e.preventDefault();
    flex_71.classList.add('item__span--active');
    flex_65.classList.remove('item__span--active');
};

flex_65.onclick = (e) => {
    e.preventDefault();
    flex_65.classList.add('item__span--active');
    flex_71.classList.remove('item__span--active');
};

curve_71.onclick = (e) => {
    e.preventDefault();
    curve_71.classList.add('item__span--active');
    curve_65.classList.remove('item__span--active');
};

curve_65.onclick = (e) => {
    e.preventDefault();
    curve_65.classList.add('item__span--active');
    curve_71.classList.remove('item__span--active');
};

quantityPlus.onclick = (e) => {
    e.preventDefault();
    counterItem++;
    quantityCounter.innerHTML = counterItem;
};

quantityMinus.onclick = (e) => {
    e.preventDefault();
    if (counterItem > 1) {
        counterItem--;
        quantityCounter.innerHTML = counterItem;
    }
};
