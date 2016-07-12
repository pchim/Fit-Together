// to seed activities table, do 'npm run seed' from root directory
const sleepCtrl = require('../controllers/sleepCtrl.js');


const exampleSleepData = [ 
  { user_id: 1, date_performed: '06/01/2016', duration: 6.8, quality: 12 },
  { user_id: 1, date_performed: '06/02/2016', duration: 5.6, quality: 9.6 },
  { user_id: 1, date_performed: '06/03/2016', duration: 6.1, quality: 11.5 },
  { user_id: 1, date_performed: '06/04/2016', duration: 9.8, quality: 12.4 },
  { user_id: 1, date_performed: '06/05/2016', duration: 4.3, quality: 9.9 },
  { user_id: 1, date_performed: '06/06/2016', duration: 4.2, quality: 7.9 },
  { user_id: 1, date_performed: '06/07/2016', duration: 9.5, quality: 8.6 },
  { user_id: 1, date_performed: '06/08/2016', duration: 7.1, quality: 10.4 },
  { user_id: 1, date_performed: '06/09/2016', duration: 8.1, quality: 10.4 },
  { user_id: 1, date_performed: '06/10/2016', duration: 7.2, quality: 12.5 },
  { user_id: 1, date_performed: '06/11/2016', duration: 8.6, quality: 12.8 },
  { user_id: 1, date_performed: '06/12/2016', duration: 7.9, quality: 15.4 },
  { user_id: 1, date_performed: '06/13/2016', duration: 8.8, quality: 15.8 },
  { user_id: 1, date_performed: '06/14/2016', duration: 7.1, quality: 19 },
  { user_id: 1, date_performed: '06/15/2016', duration: 5.7, quality: 15.2 },
  { user_id: 1, date_performed: '06/16/2016', duration: 5.8, quality: 12.1 },
  { user_id: 1, date_performed: '06/17/2016', duration: 5.3, quality: 9.7 },
  { user_id: 1, date_performed: '06/18/2016', duration: 5.8, quality: 7.7 },
  { user_id: 1, date_performed: '06/19/2016', duration: 7.9, quality: 9.3 },
  { user_id: 1, date_performed: '06/20/2016', duration: 9.3, quality: 10 },
  { user_id: 1, date_performed: '06/21/2016', duration: 8.9, quality: 10.4 },
  { user_id: 1, date_performed: '06/22/2016', duration: 6.3, quality: 12.5 },
  { user_id: 1, date_performed: '06/23/2016', duration: 4.4, quality: 10 },
  { user_id: 1, date_performed: '06/24/2016', duration: 7.6, quality: 12 },
  { user_id: 1, date_performed: '06/25/2016', duration: 8.1, quality: 12 },
  { user_id: 1, date_performed: '06/26/2016', duration: 5.8, quality: 9.6 },
  { user_id: 1, date_performed: '06/27/2016', duration: 5.7, quality: 7.7 },
  { user_id: 1, date_performed: '06/28/2016', duration: 7.3, quality: 9.2 },
  { user_id: 1, date_performed: '06/29/2016', duration: 7.9, quality: 11.1 },
  { user_id: 1, date_performed: '06/30/2016', duration: 5.6, quality: 8.9 } 
];

exampleSleepData.forEach((sleep, index) => {
  setTimeout(() => sleepCtrl.addSleep({ body: sleep }, null), index * 200);
});

setTimeout(process.exit, exampleSleepData.length * 200);


