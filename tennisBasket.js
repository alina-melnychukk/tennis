const item__container__btn__buy = document.querySelector('.item__container__btn__buy');

// Створюємо стилі для модального вікна
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    }

    .modal-content {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        max-width: 500px;
        width: 90%;
        animation: slideIn 0.3s ease;
    }

    .modal-title {
        color: #2b7a0b;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .form-group {
        margin-bottom: 1rem;
    }

    .form-label {
        display: block;
        margin-bottom: 0.5rem;
        color: #333;
        font-weight: 500;
    }

    .form-input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.2s;
    }

    .form-input:focus {
        outline: none;
        border-color: #2b7a0b;
    }

    .modal-buttons {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        margin-top: 1.5rem;
    }

    .modal-btn {
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.2s;
    }

    .modal-btn-primary {
        background: #2b7a0b;
        color: white;
    }

    .modal-btn-primary:hover {
        background: #1e5508;
    }

    .modal-btn-secondary {
        background: #f8f9fa;
        color: #333;
        border: 1px solid #ddd;
    }

    .modal-btn-secondary:hover {
        background: #e9ecef;
    }

    .error-message {
        color: #ff4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: none;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideIn {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(modalStyles);

// Створюємо стилі для форми
const formStyles = document.createElement('style');
formStyles.textContent = `
    .form-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    }

    .form-content {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        max-width: 400px;
        width: 90%;
        position: relative;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }

    .close-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #666;
        transition: color 0.2s;
        padding: 0.5rem;
        line-height: 1;
    }

    .close-btn:hover {
        color: #333;
    }

    #order-form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    label {
        color: #333;
        font-weight: 500;
        font-size: 0.9rem;
    }

    input {
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.2s;
        width: 100%;
        box-sizing: border-box;
    }

    input:focus {
        outline: none;
        border-color: #2b7a0b;
        box-shadow: 0 0 0 2px rgba(43, 122, 11, 0.1);
    }

    button[type="submit"] {
        background: #2b7a0b;
        color: white;
        padding: 0.75rem;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.2s;
        margin-top: 1rem;
        font-weight: 500;
    }

    button[type="submit"]:hover {
        background: #1e5508;
        transform: translateY(-1px);
    }

    #form-message {
        margin-top: 1rem;
        padding: 0.75rem;
        border-radius: 8px;
        text-align: center;
        display: none;
        font-size: 0.9rem;
    }

    .success-message {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }

    .error-message {
        background: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideIn {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(formStyles);

function showModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <h3 class="modal-title">Оформлення замовлення</h3>
            <form id="orderForm">
                <div class="form-group">
                    <label class="form-label" for="firstName">Ім'я</label>
                    <input type="text" id="firstName" class="form-input" required>
                    <div class="error-message">Будь ласка, введіть ваше ім'я</div>
                </div>
                <div class="form-group">
                    <label class="form-label" for="lastName">Прізвище</label>
                    <input type="text" id="lastName" class="form-input" required>
                    <div class="error-message">Будь ласка, введіть ваше прізвище</div>
                </div>
                <div class="form-group">
                    <label class="form-label" for="phone">Номер телефону</label>
                    <input type="tel" id="phone" class="form-input" required>
                    <div class="error-message">Будь ласка, введіть номер телефону</div>
                </div>
                <div class="form-group">
                    <label class="form-label" for="email">Email</label>
                    <input type="email" id="email" class="form-input" required>
                    <div class="error-message">Будь ласка, введіть коректний email</div>
                </div>
                <div class="form-group">
                    <label class="form-label" for="address">Адреса доставки</label>
                    <input type="text" id="address" class="form-input" required>
                    <div class="error-message">Будь ласка, введіть адресу доставки</div>
                </div>
                <div class="modal-buttons">
                    <button type="button" class="modal-btn modal-btn-secondary" onclick="closeModal()">Скасувати</button>
                    <button type="submit" class="modal-btn modal-btn-primary">Підтвердити замовлення</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);

    // Додаємо обробку форми
    const form = document.getElementById('orderForm');
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    
    // Отримуємо значення полів
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Валідація форми
    if (!firstName || !lastName || !phone || !email || !address) {
        showError('Будь ласка, заповніть всі поля');
        return;
    }

    if (!isValidEmail(email)) {
        showError('Будь ласка, введіть коректний email');
        return;
    }

    if (!isValidPhone(phone)) {
        showError('Будь ласка, введіть коректний номер телефону');
        return;
    }

    // Якщо все валідно, відправляємо дані
    const orderData = {
        firstName,
        lastName,
        phone,
        email,
        address,
        items: [{
            title: document.querySelector('.item__description h2')?.textContent.trim(),
            details: document.querySelector('.item__description span')?.textContent.trim()
        }]
    };

    // Тут можна додати відправку даних на сервер
    console.log('Дані замовлення:', orderData);
    
    // Показуємо повідомлення про успіх
    showSuccessMessage();
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    return phoneRegex.test(phone);
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    errorDiv.style.color = '#ff4444';
    errorDiv.style.textAlign = 'center';
    errorDiv.style.marginTop = '1rem';

    const form = document.getElementById('orderForm');
    const existingError = form.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    form.appendChild(errorDiv);
}

function showSuccessMessage() {
    const modal = document.querySelector('.modal-content');
    modal.innerHTML = `
        <h3 class="modal-title">Дякуємо за замовлення!</h3>
        <p style="text-align: center; margin-bottom: 1.5rem;">Ваше замовлення успішно оформлено. Наш менеджер зв'яжеться з вами найближчим часом.</p>
        <div class="modal-buttons">
            <button class="modal-btn modal-btn-primary" onclick="closeModal()">Закрити</button>
        </div>
    `;
}

function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
    }
}

item__container__btn__buy.addEventListener('click', () => {
    const itemDescription = document.querySelector('.item__description');
    const title = itemDescription.querySelector('h2')?.textContent.trim();
    const details = itemDescription.querySelector('span')?.textContent.trim();

    // Показуємо форму перед відправкою даних
    showForm();

    // Зберігаємо дані про товар для подальшого використання
    const orderData = {
        title,
        details,
        name: '',
        surname: '',
        phone: ''
    };

    // Оновлюємо обробник форми
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const phone = document.getElementById('phone').value;

        if (!name || !surname || !phone) {
            showMessage('Будь ласка, заповніть всі поля', 'error-message');
            return;
        }

        if (!isValidPhone(phone)) {
            showMessage('Будь ласка, введіть коректний номер телефону', 'error-message');
            return;
        }

        // Оновлюємо дані замовлення
        orderData.name = name;
        orderData.surname = surname;
        orderData.phone = phone;

        // Відправляємо дані на сервер
        fetch('https://67ffe0dcb72e9cfaf7262e72.mockapi.io/basket', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Замовлення збережено:', data);
                showMessage('Дякуємо за замовлення! Наш менеджер зв\'яжеться з вами найближчим часом.', 'success-message');
                setTimeout(hideForm, 3000);
            })
            .catch((err) => {
                console.error('Помилка при збереженні:', err);
                showMessage('Виникла помилка при оформленні замовлення. Будь ласка, спробуйте пізніше.', 'error-message');
            });
    });
});

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Стилі для повідомлення
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '8px';
    notification.style.color = 'white';
    notification.style.backgroundColor = type === 'success' ? '#2b7a0b' : '#ff4444';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    notification.style.zIndex = '1000';
    notification.style.animation = 'slideIn 0.3s ease-out';
    
    document.body.appendChild(notification);
    
    // Видаляємо повідомлення через 3 секунди
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Додаємо стилі для анімації
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Додаємо HTML форми
const formHTML = `
    <div class="form-container" id="form-container" style="display: none">
        <div class="form-content">
            <button class="close-btn" id="close-btn">&times;</button>
            <form id="order-form">
                <div class="form-group">
                    <label for="name">Ім'я</label>
                    <input type="text" id="name" name="name" required placeholder="Введіть ваше ім'я" />
                </div>
                <div class="form-group">
                    <label for="surname">Прізвище</label>
                    <input type="text" id="surname" name="surname" required placeholder="Введіть ваше прізвище" />
                </div>
                <div class="form-group">
                    <label for="phone">Номер телефону</label>
                    <input type="tel" id="phone" name="phone" required placeholder="+380 XX XXX XX XX" />
                </div>
                <button type="submit">Відправити замовлення</button>
            </form>
            <div id="form-message"></div>
        </div>
    </div>
`;
document.body.insertAdjacentHTML('beforeend', formHTML);

// Обробка форми
const formContainer = document.getElementById('form-container');
const closeBtn = document.getElementById('close-btn');
const orderForm = document.getElementById('order-form');
const formMessage = document.getElementById('form-message');

function showForm() {
    formContainer.style.display = 'flex';
}

function hideForm() {
    formContainer.style.display = 'none';
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = type;
    formMessage.style.display = 'block';
}

closeBtn.addEventListener('click', hideForm);

// Оновлюємо обробник форми для обох випадків
function handleOrderSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const phone = document.getElementById('phone').value;

    if (!name || !surname || !phone) {
        showMessage('Будь ласка, заповніть всі поля', 'error-message');
        return;
    }

    if (!isValidPhone(phone)) {
        showMessage('Будь ласка, введіть коректний номер телефону', 'error-message');
        return;
    }

    // Оновлюємо дані замовлення
    const orderData = {
        name,
        surname,
        phone,
        title: document.querySelector('.item__description h2')?.textContent.trim() || 'Кастомізована ракетка',
        details: document.querySelector('.item__description span')?.textContent.trim() || 'Індивідуальне замовлення'
    };

    // Відправляємо дані на сервер
    fetch('https://67ffe0dcb72e9cfaf7262e72.mockapi.io/basket', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log('Замовлення збережено:', data);
            showMessage('Дякуємо за замовлення! Наш менеджер зв\'яжеться з вами найближчим часом.', 'success-message');
            setTimeout(hideForm, 3000);
        })
        .catch((err) => {
            console.error('Помилка при збереженні:', err);
            showMessage('Виникла помилка при оформленні замовлення. Будь ласка, спробуйте пізніше.', 'error-message');
        });
}

// Додаємо обробник форми
orderForm.addEventListener('submit', handleOrderSubmit);
