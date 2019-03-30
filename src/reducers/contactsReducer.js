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
            center: {"image": `url(${process.env.PUBLIC_URL}/image/share.svg)`},
            items: [
                {
                    "href": "https://github.com/qThegamEp",
                    "image": `url(${process.env.PUBLIC_URL}/image/github.svg)`
                },
                {
                    "href": "https://www.facebook.com/koliadin.nikita",
                    "image": `url(${process.env.PUBLIC_URL}/image/facebook.svg)`
                },
                {
                    "href": "https://javarush.ru/users/1324097",
                    "image": `url(${process.env.PUBLIC_URL}/image/javarush.svg)`
                },
                {
                    "href": "https://www.instagram.com/koliadin_nik/",
                    "image": `url(${process.env.PUBLIC_URL}/image/instagram.svg)`
                },
                {
                    "href": "https://www.linkedin.com/in/nikita-koliadin-b24361174/",
                    "image": `url(${process.env.PUBLIC_URL}/image/linkedin.svg)`
                }
            ],
            duration: 400,
            stagger: 50,
            itemsSize: getItemsSize(),
            distance: getDistance()
        }
    };
};
