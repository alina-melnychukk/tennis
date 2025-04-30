const customPanelTabletName = document.getElementById('customPanelTabletName');
const customPanelTabletMinus = document.getElementById('customPanelTabletMinus');
const customPanelTabletPlus = document.getElementById('customPanelTabletPlus');

const customizationGrip = document.getElementById('customizationGrip');
const customizationFlex = document.getElementById('customizationFlex');
const customizationKickPoint = document.getElementById('customizationKickPoint');
const customizationColorScheme = document.getElementById('customizationColorScheme');
const customizationNameAndNumber = document.getElementById('customizationNameAndNumber');

const customPanelGrip = document.querySelector('.custom__panel--Grip');
const customPanelFlex = document.querySelector('.custom__panel--Flex');
const customPanelKickPoint = document.querySelector('.custom__panel--Kick__point');
const customPanelColorScheme = document.querySelector('.custom__panel--Color__scheme');
const customPanelShaftNameAndNumber = document.querySelector('.custom__panel--Shaft__Name__and__number');

const customPanel = document.querySelector('.custom__panel');

const customPanelBtn = document.querySelectorAll('.custom__panel a');
const customPanelGripBtn = document.querySelectorAll('.active__Grip');
const customPanelFlexBtn = document.querySelectorAll('.active__Flex');
const customPanelKickPointBtn = document.querySelectorAll('.custom__panel--Kick__point__btn');
const customPanelColorSchemeBtn = document.querySelectorAll('.custom__panel--Color__scheme__btn');
const customPanelColorSchemeColor = document.querySelectorAll('.custom__panel--Color__scheme--color');
const customPanelColorFillColor = document.querySelectorAll('.custom__panel--Color__fill--color');
const customPanelColorErrowsInsideColor = document.querySelectorAll('.custom__panel--Color__errowsInside--color');
const customPanelColorErrowsOutsideColor = document.querySelectorAll('.custom__panel--Color__errowsOutside--color');

const customPanelColorSchemeSelect = document.getElementById('colorSelect');

const customHockeyRacket = document.querySelector('.customHockey--racket');

let customPanelTabletNameIndex = 0;

const customPanelTabletNameArray = ['Вага(г)', 'Баланс', 'Розмір ручки', 'Колір'];

customPanelTabletMinus.addEventListener('click', () => {
    customPanelTabletNameIndex--;
    if (customPanelTabletNameIndex < 0) {
        customPanelTabletNameIndex = customPanelTabletNameArray.length - 1;
    }
    customPanelTabletName.textContent = customPanelTabletNameArray[customPanelTabletNameIndex];
    customPanelTabletNameChange();
});

customPanelTabletPlus.addEventListener('click', () => {
    customPanelTabletNameIndex++;
    if (customPanelTabletNameIndex > customPanelTabletNameArray.length - 1) {
        customPanelTabletNameIndex = 0;
    }
    customPanelTabletName.textContent = customPanelTabletNameArray[customPanelTabletNameIndex];
    customPanelTabletNameChange();
});

function customPanelTabletNameChange() {
    if (customPanelTabletName.textContent === 'Вага(г)') {
        customPanelGrip.style.display = 'block';
        customPanelFlex.style.display = 'none';
        customPanelKickPoint.style.display = 'none';
        customPanelColorScheme.style.display = 'none';
        customPanelShaftNameAndNumber.style.display = 'none';
    } else if (customPanelTabletName.textContent === 'Баланс') {
        customPanelGrip.style.display = 'none';
        customPanelFlex.style.display = 'block';
        customPanelKickPoint.style.display = 'none';
        customPanelColorScheme.style.display = 'none';
        customPanelShaftNameAndNumber.style.display = 'none';
    } else if (customPanelTabletName.textContent === 'Розмір ручки') {
        customPanelGrip.style.display = 'none';
        customPanelFlex.style.display = 'none';
        customPanelKickPoint.style.display = 'block';
        customPanelColorScheme.style.display = 'none';
        customPanelShaftNameAndNumber.style.display = 'none';
    } else if (customPanelTabletName.textContent === 'Колір') {
        customPanelGrip.style.display = 'none';
        customPanelFlex.style.display = 'none';
        customPanelKickPoint.style.display = 'none';
        customPanelColorScheme.style.display = 'block';
        customPanelShaftNameAndNumber.style.display = 'block';
    }
}

customPanel.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === 'A') {
        customPanelBtn.forEach((btn) => {
            btn.classList.remove('custom--active');
        });
        e.target.classList.add('custom--active');
        if (e.target.textContent === 'Вага(г)') {
            customPanelGrip.style.display = 'block';
            customPanelFlex.style.display = 'none';
            customPanelKickPoint.style.display = 'none';
            customPanelColorScheme.style.display = 'none';
            customPanelShaftNameAndNumber.style.display = 'none';
        } else if (e.target.textContent === 'Баланс') {
            customPanelGrip.style.display = 'none';
            customPanelFlex.style.display = 'block';
            customPanelKickPoint.style.display = 'none';
            customPanelColorScheme.style.display = 'none';
            customPanelShaftNameAndNumber.style.display = 'none';
        } else if (e.target.textContent === 'Розмір ручки') {
            customPanelGrip.style.display = 'none';
            customPanelFlex.style.display = 'none';
            customPanelKickPoint.style.display = 'block';
            customPanelColorScheme.style.display = 'none';
            customPanelShaftNameAndNumber.style.display = 'none';
        } else if (e.target.textContent === 'Колір') {
            customPanelGrip.style.display = 'none';
            customPanelFlex.style.display = 'none';
            customPanelKickPoint.style.display = 'none';
            customPanelColorScheme.style.display = 'block';
            customPanelShaftNameAndNumber.style.display = 'block';
        }
    }
});

customPanelGrip.addEventListener('click', (e) => {
    if (e.target.tagName === 'LABEL') {
        customPanelGripBtn.forEach((btn) => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        customizationGrip.textContent = e.target.textContent;
    }
});

customPanelFlex.addEventListener('click', (e) => {
    if (e.target.tagName === 'LABEL') {
        customPanelFlexBtn.forEach((btn) => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        customizationFlex.textContent = e.target.textContent;
    }
});

customPanelKickPoint.addEventListener('click', (e) => {
    if (e.target.tagName === 'LABEL') {
        customPanelKickPointBtn.forEach((btn) => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        customizationKickPoint.textContent = e.target.textContent;
    }
});

customPanelColorSchemeSelect.addEventListener('change', () => {
    customPanelColorSchemeBtn.forEach((btn, index) => {
        if (index === 0) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
});

customPanelColorScheme.addEventListener('click', (e) => {
    if (e.target.tagName === 'LABEL' || e.target.tagName === 'BUTTON') {
        if (e.target.classList.contains('custom__panel--Color__scheme--color')) {
            customPanelColorSchemeColor.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            customizationColorScheme.style.backgroundColor = e.target.style.backgroundColor;
            customHockeyRacket.style.filter = 'none';
            customHockeyRacket.style.backgroundColor = e.target.style.backgroundColor;
        } else if (e.target.classList.contains('custom__panel--Color__fill--color')) {
            customPanelColorFillColor.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            customizationColorScheme.style.backgroundColor = e.target.style.backgroundColor;
            customHockeyRacket.style.filter = 'none';
            customHockeyRacket.style.backgroundColor = e.target.style.backgroundColor;
        } else if (e.target.classList.contains('custom__panel--Color__errowsInside--color')) {
            customPanelColorErrowsInsideColor.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            customizationColorScheme.style.backgroundColor = e.target.style.backgroundColor;
            customHockeyRacket.style.filter = 'none';
            customHockeyRacket.style.backgroundColor = e.target.style.backgroundColor;
        } else if (e.target.classList.contains('custom__panel--Color__errowsOutside--color')) {
            customPanelColorErrowsOutsideColor.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            customizationColorScheme.style.backgroundColor = e.target.style.backgroundColor;
            customHockeyRacket.style.filter = 'none';
            customHockeyRacket.style.backgroundColor = e.target.style.backgroundColor;
        }
    }
});

document.getElementById('nameAndNumber').addEventListener('input', (e) => {
    customizationNameAndNumber.textContent = e.target.value;
}); 