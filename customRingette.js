const links = document.querySelectorAll('.custom__panel a');
const customPanelTabletMinus = document.getElementById('customPanelTabletMinus');
const customPanelTabletName = document.getElementById('customPanelTabletName');
const customPanelTabletPlus = document.getElementById('customPanelTabletPlus');
let customPanelTabletCount = 0;

const customizationCurve = document.getElementById('customizationCurve');
const customizationKickPoint = document.getElementById('customizationKickPoint');
const customizationShaftShape = document.getElementById('customizationShaftShape');
const customizationShaftTexture = document.getElementById('customizationShaftTexture');
const customizationColorScheme = document.getElementById('customizationColorScheme');
const customizationGrip = document.getElementById('customizationGrip');
const customizationFlex = document.getElementById('customizationFlex');
const racketImg = document.querySelector('.customHockey--racket');

function switchPanel(count) {
    for (let a = 0; a < arrCustomPanel.length; a++) {
        let elements = document.querySelector(`.${arrCustomPanel[a]}`);
        elements.style.display = 'none';
    }
    let elements = document.querySelector(`.${arrCustomPanel[count]}`);
    elements.style.display = 'block';
}

const arrGrip = ['260', '280', '300', '330'];
const arrFlex = ['Баланс на голову (330+ мм)', 'Нейтральний баланс (320 мм)', 'Баланс на ручку (310 мм і менше)'];
const arrKickPoint = ['L0 (4.0")', 'L1 (4 1/8")', 'L2 (4 1/4")', 'L3 (4 3/8")', 'L4 (4 1/2")', 'L5 (4 5/8")'];
const arrColor = ['white', 'yellow', 'green', 'pink', 'blue', 'purple'];

const arrCustomPanel = ['custom__panel--Grip', 'custom__panel--Flex ', 'custom__panel--Kick__point', 'custom__panel--Color__scheme '];
const arrNameCustomPanel = ['Вага(г)', 'Баланс', 'Розмір ручки', 'Колір'];
links.forEach((link, index) => {
    link.addEventListener('click', function (event) {
        switchPanel(index);
        event.preventDefault();
        links.forEach((item) => item.classList.remove('custom--active'));
        this.classList.add('custom--active');
    });
});

const activeGrip = document.querySelectorAll('.active__Grip');
const activeFlex = document.querySelectorAll('.active__Flex');

const activeKickPoint = document.querySelectorAll('.custom__panel--Kick__point__btn');

const activeSchemeColor = document.querySelectorAll('.custom__panel--Color__scheme--color');
// new
const activeInsideColor = document.querySelectorAll('.custom__panel--Color__scheme--color');
const activeOutsideColor = document.querySelectorAll('.custom__panel--Color__scheme--color');

function activeButton(nameBtn, link, index = 'default', arr = 'default', tablePush = 'default') {
    link.addEventListener('click', function () {
        tablePush.innerHTML = `${arr[index]}`;
        nameBtn.forEach((l) => l.classList.remove('active'));
        this.classList.add('active');
        if (nameBtn === activeGrip) customizationGrip.innerHTML = arrGrip[index];
        if (nameBtn === activeFlex) customizationFlex.innerHTML = arrFlex[index];
        if (nameBtn === activeKickPoint) customizationKickPoint.innerHTML = arrKickPoint[index];
    });
}

customPanelTabletMinus.onclick = () => {
    if (customPanelTabletCount > 0) {
        customPanelTabletCount--;
        customPanelTabletName.innerHTML = `${arrNameCustomPanel[customPanelTabletCount]}`;
        switchPanel(customPanelTabletCount);
    } else {
        customPanelTabletCount = 3;
        customPanelTabletName.innerHTML = `${arrNameCustomPanel[customPanelTabletCount]}`;
        switchPanel(customPanelTabletCount);
    }
};
customPanelTabletPlus.onclick = () => {
    if (customPanelTabletCount < 3) {
        customPanelTabletCount++;
        customPanelTabletName.innerHTML = `${arrNameCustomPanel[customPanelTabletCount]}`;
        switchPanel(customPanelTabletCount);
    } else {
        customPanelTabletCount = 0;
        customPanelTabletName.innerHTML = `${arrNameCustomPanel[customPanelTabletCount]}`;
        switchPanel(customPanelTabletCount);
    }
};

activeGrip.forEach((link, index) => {
    activeButton(activeGrip, link, index, '', '');
});

console.log(activeFlex);

activeFlex.forEach((link, index) => {
    activeButton(activeFlex, link, index, arrFlex, '');
});

activeKickPoint.forEach((link, index) => {
    activeButton(activeKickPoint, link, index, arrKickPoint, customizationKickPoint);
});

activeSchemeColor.forEach((link, index) => {
    link.addEventListener('click', function () {
        activeSchemeColor.forEach((l) => l.classList.remove('active'));
        this.classList.add('active');
        const computedStyle = window.getComputedStyle(link);
        const background = computedStyle.background;
        customizationColorScheme.style.background = background;
        console.log(index);
        racketImg.src = `img/${arrColor[index]}.png`;
    });
});

// Table input nameAndNumber
function updateContent() {
    const nameAndNumber = document.getElementById('nameAndNumber').value;
    const customizationNameAndNumber = document.getElementById('customizationNameAndNumber');
    customizationNameAndNumber.innerHTML = nameAndNumber;
}

const colorSelect = document.getElementById('colorSelect');
const colorSchemeBtns = document.querySelectorAll('.custom__panel--Color__scheme__btn');

colorSelect.addEventListener('change', function () {
    const selectedIndex = this.selectedIndex;
    colorSchemeBtns.forEach((l) => l.classList.remove('active'));
    colorSchemeBtns[selectedIndex].classList.add('active');
});

// Отримуємо елементи DOM
const modal = document.getElementById('orderModal');
const orderBtn = document.getElementById('orderBtn');
const closeBtn = document.getElementsByClassName('close')[0];
const orderForm = document.getElementById('orderForm');
const successMessage = document.getElementById('successMessage');

// Показуємо модальне вікно при кліку на кнопку
orderBtn.onclick = function() {
    modal.style.display = "block";
}

// Закриваємо модальне вікно при кліку на хрестик
closeBtn.onclick = function() {
    modal.style.display = "none";
    resetForm();
}

// Закриваємо модальне вікно при кліку поза ним
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        resetForm();
    }
}

// Функція для скидання форми
function resetForm() {
    orderForm.reset();
    successMessage.style.display = "none";
    document.querySelectorAll('.error').forEach(error => {
        error.style.display = "none";
    });
}

// Валідація форми
orderForm.onsubmit = function(e) {
    e.preventDefault();
    
    let isValid = true;
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const address = document.getElementById('address');

    // Перевірка імені
    if (!firstName.value.trim()) {
        document.getElementById('firstNameError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('firstNameError').style.display = "none";
    }

    // Перевірка прізвища
    if (!lastName.value.trim()) {
        document.getElementById('lastNameError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('lastNameError').style.display = "none";
    }

    // Перевірка телефону
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(phone.value.trim())) {
        document.getElementById('phoneError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('phoneError').style.display = "none";
    }

    // Перевірка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        document.getElementById('emailError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = "none";
    }

    // Перевірка адреси
    if (!address.value.trim()) {
        document.getElementById('addressError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('addressError').style.display = "none";
    }

    if (isValid) {
        // Тут можна додати код для відправки даних на сервер
        successMessage.style.display = "block";
        setTimeout(() => {
            modal.style.display = "none";
            resetForm();
        }, 2000);
    }
}
