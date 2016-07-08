const mongoCtrl = require('../controllers/mongoCtrl.js');

const exampleTeamMessages = [
  {
    team_id: 1,
    team_name: 'Bay Area Hikers',
    user_id: 1,
    user_name: 'Jessica Jones',
    message: 'Hey everyone welcome to Bay Area Hikers! Feel free to introduce yourselves and put in recommendations for some team meetups',
    date_entered: "2016-07-01T18:18:44.460Z"
  },
  {
    team_id: 1,
    team_name: 'Bay Area Hikers',
    user_id: 2,
    user_name: 'John Jacobs',
    message: 'Hey Jessica, so glad to have joined!, I was thinking maybe we can go to Muir Woods during the next couple of weekends',
    date_entered: "2016-07-02T18:18:44.460Z"
  },
  {
    team_id: 1,
    team_name: 'Bay Area Hikers',
    user_id: 3,
    user_name: 'Jeffrey Jordan',
    message: 'Oh yea, that sounds awesome! Count me in.',
    date_entered: "2016-07-03T18:18:44.460Z"
  },
  {
    team_id: 1,
    team_name: 'Bay Area Hikers',
    user_id: 4,
    user_name: 'Stephanie Mills',
    message: 'Oh yea, that\'s rad! Im totally down brochachos.',
    date_entered: "2016-07-04T18:18:44.460Z"
  },
  {
    team_id: 2,
    team_name: 'Yoga and Pilates',
    user_id: 1,
    user_name: 'Jessica Jones',
    message: 'Hey everyone welcome to Yoga and Pilates! Im excited to get in a good strech with y\'all',
    date_entered: "2016-07-01T18:18:44.460Z"
  },
  {
    team_id: 2,
    team_name: 'Yoga and Pilates',
    user_id: 2,
    user_name: 'John Jacobs',
    message: 'Hey Jessica, so glad to have joined, how bout we take this to a local park one of these weekends! ',
    date_entered: "2016-07-02T18:18:44.460Z"
  },
  {
    team_id: 2,
    team_name: 'Yoga and Pilates',
    user_id: 3,
    user_name: 'Jeffrey Jordan',
    message: 'That would be great! Gimme a place and time and I\'ll be there',
    date_entered: "2016-07-03T18:18:44.460Z"
  },
  {
    team_id: 2,
    team_name: 'Yoga and Pilates',
    user_id: 4,
    user_name: 'Stephanie Mills',
    message: 'I need to get my inner zen on real quick. IM EXCITED!',
    date_entered: "2016-07-04T18:18:44.460Z"
  },
  {
    team_id: 3,
    team_name: 'Weekend Bootcamp',
    user_id: 1,
    user_name: 'Jessica Jones',
    message: 'Hey everyone welcome to Weekend Bootcamp! Feel free to introduce yourselves and put in recommendations for some team meetups',
    date_entered: "2016-07-01T18:18:44.460Z"
  },
  {
    team_id: 4,
    team_name: 'Eat Healthy With Me',
    user_id: 1,
    user_name: 'Jessica Jones',
    message: 'Hey everyone welcome to Eat Healthy With Me! Feel free to introduce yourselves and put in recommendations for some team meetups',
    date_entered: "2016-07-01T18:18:44.460Z"
  }
];

// mongoCtrl.getMessagesByTeam({ body: { team_id: 1 }});

exampleTeamMessages.forEach((message, index) => {
  setTimeout(() => mongoCtrl.sendMessage({ body: message }, null), index * 200);
});

setTimeout(process.exit, exampleTeamMessages.length * 200);
