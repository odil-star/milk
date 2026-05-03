const heroBtn = document.querySelector('.hero_btn');
const modal = document.querySelector('.modal');
const modalClose = document.getElementById('closeModal');
const textBtn = document.querySelector('.text-btn');
const items = document.querySelector('.item-content');
const podBtn = document.querySelector('.product-btn')
const columns = document.querySelectorAll(".compare__column");
const textColumns = document.querySelectorAll('.compare__content .column:not(:first-child)');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__content-links')
heroBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    console.log('close');
});
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});
textBtn.addEventListener('click', () => {
    items.classList.toggle('active');
    if (items.classList.contains('active')) {
        textBtn.textContent = 'Скрыть бонус';
    } else {
        textBtn.textContent = 'Каждый клиент нашего агентства получает приятный бонус на финише проекта, о котором мы расскажем ниже ▼';
    }
});
podBtn.addEventListener('click', () => {
    console.log('не трогай')
})
textColumns.forEach(column => {
    const cells = column.querySelectorAll('.call');

    cells.forEach((cell, rowIndex) => {
        cell.addEventListener('click', () => {

            // убрать active у всех
            document.querySelectorAll('.row-active').forEach(item => {
                item.classList.remove('row-active');
            });

            // выделить левый пункт
            const leftItems = columns[0].querySelectorAll('div');
            if (leftItems[rowIndex]) {
                leftItems[rowIndex].classList.add('row-active');
            }

            // выделить весь ряд во всех колонках
            textColumns.forEach(col => {
                const calls = col.querySelectorAll('.call');

                if (calls[rowIndex]) {
                    calls[rowIndex].classList.add('row-active');
                }
            });
        });
    });
});
columns.forEach((column) => {
    column.addEventListener("click", () => {
        columns.forEach((item) => {
            item.classList.remove("column-active");
        });

        column.classList.add("column-active");
    });
});
burger.addEventListener('click', () => {
    burger.classList.toggle("active")
    menu.classList.toggle('active')
    console.log('click')
})