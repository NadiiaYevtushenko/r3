export const countryData: { [key: string]: { cities: string[]; phonePrefix: string } } = {
    Ukraine: {
        cities: [
            'Kyiv', 'Lviv', 'Odesa', 'Dnipro', 'Kharkiv', 'Zaporizhzhia', 'Vinnytsia', 'Mykolaiv', 'Chernihiv', 'Poltava',
            'Khmelnytskyi', 'Ivano-Frankivsk', 'Ternopil', 'Chernivtsi', 'Sumy', 'Rivne', 'Zhytomyr', 'Uzhhorod', 'Lutsk'
        ],
        phonePrefix: '+380'
    },
    Poland: {
        cities: ['Warsaw', 'Krakow', 'Gdansk', 'Wroclaw', 'Poznan', 'Lodz', 'Katowice', 'Lublin', 'Szczecin', 'Bydgoszcz'],
        phonePrefix: '+48'
    },
    USA: {
        cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Diego', 'Dallas', 'Austin'],
        phonePrefix: '+1'
    },
};

