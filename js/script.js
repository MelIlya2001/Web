let changeActive = function (item, list) {
    list.forEach(function (item) {
        item.classList.remove('active');
    });
    item.classList.add('active');   
}



//Смена темы
const buttonsTheme = document.querySelectorAll('.theme-button');
buttonsTheme.forEach(function (item) {
    item.onclick = function () {
        let html = document.querySelector('html');
        switch (item.textContent.replace(/^\s+|\s+$/g, '')) {
            case "Светлая":
                html.setAttribute("data-theme-name", "light");
                break;
            case "Темная":
                html.setAttribute("data-theme-name", "dark");
                break;
            case "Текстура":
                html.setAttribute("data-theme-name", "texture");
                break;
        }
        changeActive(item, buttonsTheme);
    }
});



//Выбор просмотра элементов
const buttonsView = document.querySelectorAll('.card-view-button');
buttonsView.forEach(function (item) {
    item.onclick = function () {
        changeActive(item, buttonsView);
        let cards = document.querySelector('.cards');
        switch (item.textContent.replace(/^\s+|\s+$/g, '')) {
            case "Плитка":
                cards.classList.add("tile");
                cards.classList.remove("standard");
                cards.classList.remove("compact");
                break;
            case "Список":
                cards.classList.remove("tile");
                cards.classList.add("standard");
                cards.classList.remove("compact");
                break;
            case "Компактный список":
                cards.classList.remove("tile");
                cards.classList.remove("standard");
                cards.classList.add("compact");
                break;
        }
    }

});