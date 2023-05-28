const cards = document.querySelectorAll('.product-card');

const filter_season = document.querySelectorAll('.season');
filter_season.forEach(function (item) {
    item.onclick = function () {
        const background = document.querySelector('body');
        const group_buttons = document.querySelectorAll('.dropdown-toggle');
        let color;
        let backgroundImage;
        let season;

        switch (item.textContent.replace(/^\s+|\s+$/g, '')) {
            case "Лето":
                backgroundImage = "url(img/12.jpg)";
                color = "#5BA276";
                season = [06, 07, 08];
                break;
            case "Весна":
                backgroundImage = "url(img/bg-3.jpg)";
                color = "#E59663";
                season = [03, 04, 05];
                break;
            case "Зима":
                backgroundImage = "url(img/bg-1.jpg)";
                color = "#5487A4";
                season = [12, 01, 02];
                break;
            case "Осень":
                backgroundImage = "url(img/bg-2.jpg)";
                color = "#6BB296";
                season = [09, 10, 11];
                break;
            default:
                season = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12];
                backgroundImage = "url(img/12.jpg)";
                color = "#5BA276";
                break;
        }

        

        background.style.backgroundImage = backgroundImage;
        group_buttons.forEach(function (button) {
            button.style.backgroundColor = color;
            button.style.borderColor = color;
        });  

        cards.forEach(function (card) {
            const description = card.querySelector('p').textContent.replace(/^\s+|\s+$/g, '');
            const month = Number(description[3] + description[4]);
            if (season.indexOf(month) != -1) {
                card.parentElement.hidden = false;
            } else {
                card.parentElement.hidden = true;
            }
        });
    }
});


const filter_hard = document.querySelectorAll('.hard');
filter_hard.forEach(function (item) {
    item.onclick = function () {
        let hard;

        switch (item.textContent.replace(/^\s+|\s+$/g, '')) {
            case "Расслабляющая (1-2 к.с.)":
                hard = [1, 2];
                break;
            case "Для опытных и жаждующих (3-4 к.с.)":
                hard = [3, 4];
                break;
            case "Прожжённый турист (5-6 к.с.)":
                hard = [5, 6];
                break;
            default:
                hard = [1, 2, 3, 4, 5, 6];
                break;
        }


        cards.forEach(function (card) {
            const description = card.querySelector('p').textContent.replace(/^\s+|\s+$/g, '');
            const numbers = description.split('|')[1][1] == '-' ? [description.split('|')[1][0], description.split('|')[1][2]] : [description.split('|')[1][0]];
            numbers.forEach(function (number) {
                console.log(number, numbers, hard);
                if (hard.indexOf(Number(number)) != -1) {
                    card.parentElement.hidden = false;
                } else {
                    card.parentElement.hidden = true;
                }
            });
        });
    }
});








const filter_duration = document.querySelectorAll('.duration');
filter_duration.forEach(function (item) {
    item.onclick = function () {
        let duration;

        switch (item.textContent.replace(/^\s+|\s+$/g, '')) {
            case "1-2 дня":
                duration = [0, 2];
                break;
            case "до недели":
                duration = [3, 7];
                break;
            case "10-14 дней":
                duration = [10, 14];
                break;
            case "от 20 дней":
                duration = [20, 31];
                break;
            default:
                duration = [0, 31];
                break;
        }


        cards.forEach(function (card) {
            const description = card.querySelector('p').textContent.replace(/^\s+|\s+$/g, '');
            const date = description.split('|')[0];
            let current_duration = 1;
            if (date.length > 5) {
                const list_date = date.split('.');
                current_duration = (Number(list_date[2]) - Number(list_date[1][0] + list_date[1][1])) * 30 + Number(list_date[1][list_date[1].length - 2] + list_date[1][list_date[1].length - 1]) - Number(list_date[0])
                console.log((Number(list_date[2]) - Number(list_date[1][0] + list_date[1][1])) * 30 + Number(list_date[1][list_date[1].length - 2] + list_date[1][list_date[1].length - 1]), Number(list_date[0]), current_duration);
            } 

            if (current_duration >= duration[0] && current_duration <= duration[1]) {
                card.parentElement.hidden = false;
            } else {
                card.parentElement.hidden = true;
            }
        });
    }
});