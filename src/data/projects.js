const projects = [
    {
        id: 1,
        image: '/works/projects/1.webp',
        illustration:'/works/projects/object/1.webp',
        title: 'MONGTAN JEJU',
        subTitle: 'CEREMONY',
        type: 'BARBECUE RESTAURANT',
        client: 'MT FOOD',
        siteArea: '329.8M2 / 99.93PY',
        location: 'GUJWA-EUP, JEJU-SI, JEJU-DO',
        involvement: 'CONCEPT DESIGN, CONSTRUCTION, BRANDING',
    },
    {
        id: 2,
        image: '/works/projects/2.webp',
        illustration:'/works/projects/object/1.webp',
        title: 'AOMG OFFICE',
        subTitle: 'MIND-SET',
        type: 'OFFICE',
        client: 'AOMG',
        siteArea: '1070M2 / 323.7PY',
        location: 'SEONGDONG-GU, SEOUL',
        involvement: 'CONCEPT DESIGN, CONSTRUCTION'
    },
    {
        id: 3,
        image: '/works/projects/3.webp',
        illustration:'/works/projects/object/2.webp',
        title: 'SHUIT W',
        subTitle: "W, W'",
        type: 'BESPOKE SHOP',
        client: 'SHUIT W',
        siteArea: '322M2 / 97.57PY',
        location: 'GANGNAM-GU, SEOUL',
        involvement: 'CONCEPT DESIGN, CONSTRUCTION'
    },
    {
        id: 4,
        image: '/works/projects/4.webp',
        illustration:'/works/projects/object/3.webp',
        title: 'MOTUNGIWOO HIGHTABLE',
        subTitle: 'SOMMELIER',
        type: 'WINE DINING BAR',
        client: 'MOTUNGIWOO',
        siteArea: '322.16M2 / 97.62PY',
        location: 'GANGNAM-GU, SEOUL',
        involvement: 'CONCEPT DESIGN, CONSTRUCTION'
    },
    {
        id: 5,
        image: '/works/projects/5.webp',
        illustration:'/works/projects/object/4.webp',
        title: 'GOONIES',
        subTitle: 'NEVER SAY NEVER!',
        type: 'CAFE',
        client: 'BEODD',
        siteArea: '57.92M2 / 17.57PY',
        location: 'YONGSAN-GU, SEOUL',
        involvement: 'CONCEPT DESIGN, CONSTRUCTION, BRANDING'
    },
    {
        id: 6,
        image: '/works/projects/6.webp',
        illustration:'',
        title: 'GROVE',
        subTitle: 'BIOLOGY MUSEUM',
        type: 'FLOWER SHOWROOM',
        client: 'GROVE',
        siteArea: '192.2M2 / 58.14PY',
        location: 'GANGNAM-GU, SEOUL',
        involvement: 'CONSTRUCTION'
    },
    {
        id: 7,
        image: '/works/projects/7.webp',
        illustration:'/works/projects/object/6.webp',
        title: 'SALTY SEOUL',
        subTitle: 'FEAST OF WAVES',
        type: 'CASUAL DINING BAR',
        client: 'SALTY SEOUL',
        siteArea: '88.59M2 / 26.8PY',
        location: 'GANGNAM-GU, SEOUL',
        involvement: 'CONCEPT DESIGN, CONSTRUCTION, GRAPHIC'
    },
    {
        id: 8,
        image: '/works/projects/8.webp',
        illustration:'/works/projects/object/7.webp',
        title: 'SHUIT W',
        subTitle: 'THE PROCESS',
        type: 'BESPOKE SHOP',
        client: 'SHUIT W',
        siteArea: '217.49M2 / 65.79PY',
        location: 'GANGNAM-GU, SEOUL',
        involvement: 'CONCEPT DESIGN, CONSTRUCTION'
    },
    {
        id: 9,
        image: '/works/projects/9.webp',
        illustration:'/works/projects/object/8.webp',
        title: 'N-PIXEL OFFICE',
        subTitle: "P'OSSIBILITY",
        type: 'OFFICE',
        client: 'N-PIXEL',
        siteArea: '1859.46M2 / 563.16PY (1F)',
        location: 'GANGNAM-GU, SEOUL',
        involvement: 'DIRECTION'
    },
    {
        id: 10,
        image: '/works/projects/10.webp',
        illustration:'/works/projects/object/9.webp',
        title: 'HYUNDAI PEER',
        subTitle: 'UNEXPECTED',
        type: 'EDIT SHOP',
        client: 'HYUNDAI DEPARTMENT STORE',
        siteArea: '241.25M2 / 73.1PY (1ST)',
        location: 'GANGNAM-GU, SEOUL',
        involvement: 'CONCEPT DESIGN, GRAPHIC'
    },
    {
        id: 11,
        image: '/works/projects/11.webp',
        illustration:'/works/projects/object/11.webp',
        title: 'ALAIN DELON',
        subTitle: 'DAYDREAM',
        type: 'FRENCH RESTAURANT',
        client: 'ALAIN DELON',
        siteArea: '53M2 / 16PY',
        location: 'YONGSAN-GU, SEOUL',
        involvement: 'CONCEPT DESIGN, CONSTRUCTION, BRANDING'
    },
    {
        id: 12,
        image: '/works/projects/12.webp',
        illustration:'/works/projects/object/12.webp',
        title: 'AVECQUE',
        subTitle: 'BLENDING',
        type: 'RESTAURANT',
        client: 'AVECQUE',
        siteArea: '343.2M2 / 104PY (1ST)',
        location: 'GANGNAM-GU, SEOUL',
        involvement: 'CONCEPT DESIGN, CONSTRUCTION, GRAPHIC'
    },
    {
        id: 13,
        image: '/works/projects/13.webp',
        illustration:'/works/projects/object/13.webp',
        title: 'ADER SPACE 1.0',
        subTitle: 'BUT NEAR MISSED WAY',
        type: 'FLAGSHIP STORE',
        client: 'ADERERROR',
        location: 'MAPO-GU, SEOUL',
        involvement: 'CONCEPT DESIGN, CONSTRUCTION'
    },
    {
        id: 14,
        image: '/works/projects/14.webp',
        illustration:'',
        title: 'GENTLEMONSTER',
        subTitle: 'LAST PIECE',
        type: 'FLAGSHIP STORE',
        client: 'GENTLEMONSTER',
        location: 'NINGBO, CHINA',
        involvement: 'FURNITURE DESIGN'
    },
    {
        id: 15,
        image: '/works/projects/15.webp',
        illustration:'/works/projects/object/15.webp',
        title: 'JUUN.J',
        subTitle: 'DIVERSION OF IMAGINE',
        type: 'FLAGSHIP STORE',
        client: 'JUUN.J',
        location: 'GANGNAM-GU, SEOUL',
        involvement: 'LIGHTING TEXTURE DESIGN'
    },
    {
        id: 16,
        image: '/works/projects/16.webp',
        illustration:'/works/projects/object/16.webp',
        title: 'LIGHT HOUSE',
        subTitle: 'NOSTALGIA',
        type: 'CAFE',
        client: 'ILKWANG LIGHTING',
        siteArea: '385.95M2 / 116.95PY',
        location: 'JUNG-GU, INCHEON',
        involvement: 'CONCEPT DESIGN, CONSTRUCTION'
    },
    {
        id: 17,
        image: '/works/projects/17.webp',
        illustration:'/works/projects/object/17.webp',
        title: 'CHAPTER1 COLLECT',
        subTitle: 'WATCH FOR SPACE',
        type: 'LIFE LIVING SHOP',
        client: 'PPS CORP.',
        location: 'SEONGBUK-GU, SEOUL',
        involvement: 'CONCEPT DESIGN, CONSTRUCTION'
    },
    {
        id: 18,
        image: '/works/projects/18.webp',
        illustration:'/works/projects/object/18.webp',
        title: 'ENDIVE',
        subTitle: '1, 0, ㅇ, ㅣ',
        type: 'CAFE / FLAGSHIP STORE',
        client: 'LYNN COMPANY',
        location: 'YONGSAN-GU, SEOUL',
        involvement: 'CONCEPT DESIGN, CONSTRUCTION'
    },
    {
        id: 19,
        image: '/works/projects/19.webp',
        illustration:'/works/projects/object/19.webp',
        title: 'BOSKETT',
        subTitle: 'THE LAB',
        type: 'BRUNCH RESTAURANT',
        client: 'DANK DESIGN HAUS',
        siteArea: '109.57M2 / 33.14PY',
        location: 'GANGNAM-GU, SEOUL',
        involvement: 'CONCEPT DESIGN, CONSTRUCTION'
    },
    {
        id: 20,
        image: '/works/projects/20.webp',
        illustration:'/works/projects/object/20.webp',
        title: 'CHAPTER1 SELECT',
        subTitle: 'UNFAMILIAR BEAUTY',
        type: 'LIFE LIVING SHOP',
        client: 'PPS CORP.',
        location: 'GANGNAM-GU, SEOUL',
        involvement: 'CONCEPT DESIGN, CONSTRUCTION'
    }
];

export default projects; 