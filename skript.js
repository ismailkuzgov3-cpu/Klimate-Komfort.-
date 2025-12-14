// script.js

function openModal(type) {
    const modal = document.getElementById('modalBackdrop');
    const body = document.getElementById('modalBody');
    let content = '';

    switch(type) {
        case 'calculate':
            content = `
                <h2>Рассчитать стоимость</h2>
                <form id="calcForm">
                    <select required>
                        <option value="">Выберите услугу</option>
                        <option>Отопление</option>
                        <option>Кондиционирование</option>
                        <option>Вентиляция</option>
                    </select>
                    <input type="number" placeholder="Площадь помещения (м²)" min="10" required>
                    <input type="tel" placeholder="Ваш телефон" required>
                    <button type="submit" class="btn btn-primary" style="width:100%; margin-top:15px;">Получить расчёт</button>
                </form>
            `;
            break;
        case 'master':
            content = `
                <h2>Вызвать мастера</h2>
                <form id="masterForm">
                    <input type="text" placeholder="Ваше имя" required>
                    <input type="tel" placeholder="Телефон" required>
                    <textarea placeholder="Адрес и описание проблемы"></textarea>
                    <button type="submit" class="btn btn-primary" style="width:100%; margin-top:15px;">Вызвать</button>
                </form>
            `;
            break;
        case 'callback':
            content = `
                <h2>Заказать звонок</h2>
                <form id="callbackForm">
                    <input type="text" placeholder="Ваше имя" required>
                    <input type="tel" placeholder="Телефон" required>
                    <button type="submit" class="btn btn-primary" style="width:100%; margin-top:15px;">Перезвоните мне</button>
                </form>
            `;
            break;
    }

    body.innerHTML = content;
    modal.classList.add('active');

    // Обработка форм
    const form = body.querySelector('form');
    if (form) {
        form.onsubmit = function(e) {
            e.preventDefault();
            alert('✅ Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
            closeModal();
        };
    }
}

function closeModal() {
    document.getElementById('modalBackdrop').classList.remove('active');
}

function showServiceModal(title, description) {
    const modal = document.getElementById('modalBackdrop');
    const body = document.getElementById('modalBody');
    body.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        <button class="btn btn-primary" onclick="openModal('calculate')" style="margin-top:20px;">Заказать услугу</button>
    `;
    modal.classList.add('active');
}

function showPortfolioModal(title, description) {
    const modal = document.getElementById('modalBackdrop');
    const body = document.getElementById('modalBody');
    body.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        <button class="btn btn-primary" onclick="openModal('calculate')" style="margin-top:20px;">Рассчитать свой проект</button>
    `;
    modal.classList.add('active');
}

// Фильтрация портфолио
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        document.querySelectorAll('.portfolio-item').forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Отправка основной формы
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ Спасибо за заявку! Мы скоро свяжемся с вами.');
    this.reset();
});
document.getElementById('menuToggle').addEventListener('click', function() {
  document.querySelector('.nav-menu').classList.toggle('active');
  document.getElementById('menuOverlay').classList.toggle('active');
});

document.getElementById('menuOverlay').addEventListener('click', function() {
  document.querySelector('.nav-menu').classList.remove('active');
  this.classList.remove('active');
});