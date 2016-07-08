// to seed users table, do 'npm run seed' from root directory
const usersCtrl = require('../controllers/usersCtrl.js');

const exampleUserLocation = [
  { lat: 37.790629, lng: -122.401800 },
  { lat: 37.786063, lng: -122.431807 },
  { lat: 37.759391, lng: -122.412258 },
  { lat: 37.762762, lng: -122.434837 }
];

const exampleUserData = [
  {
    name: 'Jessica Jones',
    username: 'jjones',
    password: 'jjones',
    email: 'jjones@gmail.com',
    age: 26,
    weight: 112,
    height: 154.6,
    bmi: 21.3,
    goal: 'Live a healthy lifestyle',
    points: 118,
    user_icon: 'https://s-media-cache-ak0.pinimg.com/564x/7c/1d/15/7c1d156f6e62f5559e8fada72b2117f7.jpg'
  },
  {
    name: 'John Jacobs',
    username: 'johnyj',
    password: 'johnyj',
    email: 'johnyj@gmail.com',
    age: 30,
    weight: 180,
    height: 160,
    bmi: 24.5,
    goal: 'Get super swole',
    points: 113,
    user_icon: 'https://tutsplus-media.s3.amazonaws.com/photo.tutsplus.com/uploads/2013/09/benlucas-web-portrait-16.jpg'
  },
  {
    name: 'Jeffrey Jordan',
    username: 'jeffj',
    password: 'jeffj',
    email: 'jeffj@gmail.com',
    age: 23,
    weight: 170,
    height: 158.9,
    bmi: 22.5,
    goal: 'Get more tone',
    points: 110,
    user_icon: 'http://www.timo-wadenpohl.de/files/tw/content/about/timo_wadenpohl_portrait.jpg'
  },
  {
    name: 'Stephanie Mills',
    username: 'stephm',
    password: 'stephm',
    email: 'stephm@gmail.com',
    age: 26,
    weight: 130,
    height: 156.2,
    bmi: 20.5,
    goal: 'Get super tone',
    points: 101,
    user_icon: 'http://getparade.com/media/imagic/square3.jpg'
  },
  {
    name: 'Allison Graham',
    username: 'allyg',
    password: 'allyg',
    email: 'allyg@gmail.com',
    age: 28,
    weight: 135,
    height: 158.2,
    bmi: 22.5,
    goal: 'Get super tone',
    points: 99,
    user_icon: 'http://d38we5ntdyxyje.cloudfront.net/857749/profile/KZPZNEAZ_avatar_medium_square.jpg'
  },
  {
    name: 'Richard Hendricks',
    username: 'piedpiper',
    password: 'piedpiper',
    email: 'piedpiper@gmail.com',
    age: 27,
    weight: 140,
    height: 160.1,
    bmi: 23.5,
    goal: 'Get buff',
    points: 160,
    user_icon: 'http://i.imgur.com/4RhhCZK.png',
  },
  {
    name: 'Erlich Bachman',
    username: 'bachman',
    password: 'bachman',
    email: 'bachman@gmail.com',
    age: 29,
    weight: 150,
    height: 158.4,
    bmi: 25.5,
    goal: 'Get buff',
    points: 156,
    user_icon: 'http://i.imgur.com/zLCxI02.png'
  },
  {
    name: 'Jared Dunn',
    username: 'jared',
    password: 'jared',
    email: 'jared@gmail.com',
    age: 26,
    weight: 145,
    height: 162.1,
    bmi: 22.1,
    goal: 'Get swole',
    points: 142,
    user_icon: 'http://i.imgur.com/qXFHqxc.png'
  },
  {
    name: 'Bertram Gilfoyle',
    username: 'bertman',
    password: 'bertman',
    email: 'bertman@gmail.com',
    age: 26,
    weight: 146,
    height: 157.1,
    bmi: 23.2,
    goal: 'Get strong',
    points: 133,
    user_icon: 'http://i.imgur.com/kSnJSMb.png'
  },
  {
    name: 'Dinesh Chugtai',
    username: 'dineshc',
    password: 'dineshc',
    email: 'dineshc@gmail.com',
    age: 28,
    weight: 147,
    height: 154.8,
    bmi: 23.7,
    goal: 'Get fit',
    points: 121,
    user_icon: 'http://i.imgur.com/kPyPCur.png'
  }
];


// seeds users table with example data
exampleUserData.forEach((user, index) => {
  setTimeout(() => usersCtrl.addUser({ body: user }, null), index * 200);
});

setTimeout(process.exit, exampleUserData.length * 200);

