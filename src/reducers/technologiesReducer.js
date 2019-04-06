import localization from '../localization/localization';

export default function () {
    return [
        {
            id: 1,
            name: localization.about2,
            imageSrc: `${process.env.PUBLIC_URL}/image/react.svg`,
            description: localization.about3
        },
        {
            id: 2,
            name: localization.about4,
            imageSrc: `${process.env.PUBLIC_URL}/image/redux.svg`,
            description: localization.about5
        }
    ];
};
