function getItemsSize() {
    if (window.innerHeight / window.innerWidth > 1) {
        return window.innerWidth / 10;
    } else {
        return window.innerHeight / 10;
    }
}

function getDistance() {
    if (window.innerHeight / window.innerWidth > 1) {
        return window.innerWidth / 10;
    } else {
        return window.innerHeight / 10;
    }
}

export default function () {
    return {
        radialMenu: {
            center: {"image": "url(./image/share.png)"},
            items: [
                {"href": "https://github.com/qThegamEp", "image": "url(./image/github.png)"},
                {"href": "https://www.facebook.com/koliadin.nikita", "image": "url(./image/facebook.png)"},
                {"href": "https://javarush.ru/users/1324097", "image": "url(./image/javarush.png)"},
                {"href": "https://www.instagram.com/koliadin_nik/", "image": "url(./image/instagram.png)"},
                {"href": "https://www.linkedin.com/in/nikita-koliadin-b24361174/", "image": "url(./image/linkedin.png)"}
            ],
            duration: 400,
            stagger: 50,
            itemsSize: getItemsSize(),
            distance: getDistance()
        }
    };
};
