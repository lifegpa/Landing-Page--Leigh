class TabLink {
    constructor(tabElement) {

        this.tabElement = tabElement;
        this.tabData = this.tabElement.dataset.tab;


        if (this.tabData === 'all') {
            this.cards = document.querySelectorAll('.card');
        } else {
            this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
        }
        this.cards = Array.from(this.cards).map((tcard) => new TabCard(tcard));
        this.tabElement.addEventListener('click', () => {
            this.selectTab();
        });
    }

    selectTab() {

        const tabs = document.querySelectorAll('.tab');


        tabs.forEach((tabsClass) => tabsClass.classList.remove('active-tab'));

        const cards = document.querySelectorAll('.card');

        cards.forEach((cardList) => (cardList.style.display = 'none'));

        this.tabElement.classList.add('.active-tab');


        this.cards.forEach((card) => card.selectCard());
    }
    
}

class TabCard {
    constructor(cardElement) {
    this.cardElement = cardElement;
    }

    selectCard() {
        this.cardElement.style.display = 'flex';
    }
}





let tabs = document.querySelectorAll('.tab');

tabs.forEach(function (tab) {
    return new TabLink(tab);
});