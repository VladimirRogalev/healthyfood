import { getResourses } from "../services/services";

function cards() {
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 3.5;
            this.changeToILS();
        }

        changeToILS() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = "menu__item";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> ILS/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    getResourses('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({ img, altimg, title, descr, price }) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });

    // //     getResourses('http://localhost:3000/menu')
    // //     .then(data => createCard(data));

    // //     function createCard(data) {
    // // data.forEach(({img, altimg, title, descr, price}) => {
    // // const element =document.createElement('div');

    // // element.classList.add('menu__item');


    // // element.innerHTML = `
    // // <img src=${img} alt=${altimg}>
    // // <h3 class="menu__item-subtitle">${title}</h3>
    // // <div class="menu__item-descr">${descr}</div>
    // // <div class="menu__item-divider"></div>
    // // <div class="menu__item-price">
    // //     <div class="menu__item-cost">Цена:</div>
    // //     <div class="menu__item-total"><span>${price}</span> ILS/день</div>
    // // </div>
    // // `;

    // // document.querySelector('.menu .container').append(element);
    // // })
    // //     }

    // axios.get('http://localhost:3000/menu')
    //     .then(data => {
    //         data.data.forEach(({ img, altimg, title, descr, price }) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //         });
    //     });
}

export default  cards;