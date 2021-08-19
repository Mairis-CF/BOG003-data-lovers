import {
  filterDataNews,
  estimateScores,
  filterDataOlder,
  sortZA,
  sortAZ
} from '../src/data.js';

const moviesToTest = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "release_date": "1986",
    "rt_score": "95",
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93",
  },
  {
    "title": "My Neighbors the Yamadas",
    "director": "Isao Takahata",
    "release_date": "1999",
    "rt_score": "75",
  },
  {
    "title": "When Marnie Was There",
    "director": "Hiromasa Yonebayashi",
    "release_date": "2014",
    "rt_score": "92",
  },
  {
    "title": "The Wind Rises",
    "director": "Hayao Miyazaki",
    "release_date": "2013",
    "rt_score": "89",
  }
]

describe('filterDataNews', () => {
  it('is a function', () => {
    expect(typeof filterDataNews).toBe('function');
  });

  const moviesNews = [
    {
      "title": "When Marnie Was There",
      "director": "Hiromasa Yonebayashi",
      "release_date": "2014",
      "rt_score": "92",
    },
    {
      "title": "The Wind Rises",
      "director": "Hayao Miyazaki",
      "release_date": "2013",
      "rt_score": "89",
    }
  ]

  it('To moviesToTest should return those with a relase_date over to 2000', () => {
    let result = filterDataNews(moviesToTest);
    expect(result).toStrictEqual(moviesNews);
  });
});

describe('filterDataOlder', () => {
  it('is a function', () => {
    expect(typeof filterDataOlder).toBe('function');
  });

  const moviesOlder = [
    {
      "title": "Castle in the Sky",
      "director": "Hayao Miyazaki",
      "release_date": "1986",
      "rt_score": "95",
    },
    {
      "title": "My Neighbor Totoro",
      "director": "Hayao Miyazaki",
      "release_date": "1988",
      "rt_score": "93",
    },
    {
      "title": "My Neighbors the Yamadas",
      "director": "Isao Takahata",
      "release_date": "1999",
      "rt_score": "75",
    },

  ]


  it('To moviesToTest should return those with a relase_date lower than 2000', () => {
    let resultOlder = filterDataOlder(moviesToTest);
    expect(resultOlder).toStrictEqual(moviesOlder);
  });
});

const testghibli = [
  {
    title: "From Up on Poppy Hill",
    release_date: "2011",
  },
  {
    title: "Grave of the Fireflies",
    release_date: "1988",
  },

  {
    title: "Ponyo on the Cliff by the Sea",
    release_date: "2008"
  },
  {
    title: "When Marnie Was There",
    release_date: "2014",
  },

];


describe('filterDataNews', () => {
  it('is a function', () => {
    expect(typeof filterDataNews).toBe('function');
  });

  const dataReciente = [

    {
      title: "Ponyo on the Cliff by the Sea",
      release_date: "2008"
    },
    {
      title: "From Up on Poppy Hill",
      release_date: "2011",
    },

    {
      title: "When Marnie Was There",
      release_date: "2014",
    },
  ];
  
  it('  For moviesToTest should return those with a relase_date over than 2000 ', () => {
    expect(filterDataNews(testghibli)).toEqual(expect.arrayContaining(dataReciente)
    );
  });
})


describe('sortZA', () => {
  it('is a function', () => {
    expect(typeof sortZA).toBe('function');
  });

  const moviesSortZA = [
    {
      "title": "When Marnie Was There",
      "director": "Hiromasa Yonebayashi",
      "release_date": "2014",
      "rt_score": "92",
    },
    {
      "title": "The Wind Rises",
      "director": "Hayao Miyazaki",
      "release_date": "2013",
      "rt_score": "89",
    },
    {
      "title": "My Neighbors the Yamadas",
      "director": "Isao Takahata",
      "release_date": "1999",
      "rt_score": "75",
    },
    {
      "title": "My Neighbor Totoro",
      "director": "Hayao Miyazaki",
      "release_date": "1988",
      "rt_score": "93",
    },
    {
      "title": "Castle in the Sky",
      "director": "Hayao Miyazaki",
      "release_date": "1986",
      "rt_score": "95",
    },
  ]

  it('To moviesToTest should return a sorted array with an inverse order from Z to A', () => {
    let resultSortZA = sortZA(moviesToTest)
    expect(resultSortZA).toStrictEqual(moviesSortZA);
  });
});


describe('sortAZ', () => {
  it('is a function', () => {
    expect(typeof sortAZ).toBe('function')
  })

  const moviesSortAZ =
    [
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
        "release_date": "1986",
        "rt_score": "95",
      },

      {
        "title": "My Neighbor Totoro",
        "director": "Hayao Miyazaki",
        "release_date": "1988",
        "rt_score": "93",
      },
      {
        "title": "My Neighbors the Yamadas",
        "director": "Isao Takahata",
        "release_date": "1999",
        "rt_score": "75",
      },
      {
        "title": "The Wind Rises",
        "director": "Hayao Miyazaki",
        "release_date": "2013",
        "rt_score": "89",
      },
      {
        "title": "When Marnie Was There",
        "director": "Hiromasa Yonebayashi",
        "release_date": "2014",
        "rt_score": "92",
      },

    ]

  it('to moviesToTest should return a sorted array with an order from A to Z', () => {
    let resultSortAZ = sortAZ(moviesToTest)
    expect(resultSortAZ).toStrictEqual(moviesSortAZ);
  });
});



describe('estimateScores', () => {
  it('is a function', () => {
    expect(typeof estimateScores).toBe('function');
  });

  const outPutAverages = {
    high: 460,
    low: 400
  }
//error de tipado
  it('it should return the values in outputAverages', () => {
    expect(estimateScores(92, 80)).toEqual(expect.objectContaining(outPutAverages)
    );
  });
});



