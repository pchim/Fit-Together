const fs = require('fs');
const month = '06/';
const year = '/2016';
let quality = 10;
let energy = 8;

const exampleSleepData = [];
const exampleMEMData = [];
const tenths = num => (Math.floor(num * 10) / 10);

const sleepMemData = () => {
  for (let i = 1; i < 31; i++) {
    let sleepHours = 4 + Math.random() * 6;
    sleepHours = sleepHours - sleepHours % 0.1;
    if (sleepHours < 6) {
      quality = quality * 0.8;
    } else if (sleepHours < 8) {
      quality = quality * 1.2;
    } else {
      quality = quality + (sleepHours - 8) * 0.5;
    }
    let mood = Math.random() * 10;
    if (quality > 8) {
      mood *= 1.1;
    }

    if (sleepHours < 6) {
      energy *= 0.8;
    } else {
      energy = sleepHours * 1.2 * Math.random();
    }

    let motivation = (mood + energy) / 2;

    let time2 = tenths(sleepHours);
    let quality2 = tenths(quality);
    let mood2 = tenths(mood);
    let energy2 = tenths(energy);
    let motivation2 = tenths(motivation);

    let datePerf = '';

    if (i < 10) {
      datePerf = month + '0' + i + year;    
    } else {
      datePerf = month + String(i) + year;
    }
    exampleSleepData.push({
      date_performed: datePerf,
      duration: time2,
      quality: quality2,
    });
    exampleMEMData.push({
      date_performed: datePerf,
      mood: mood2,
      energy: energy2,
      motivation: motivation2    
    });
  }

  return [exampleSleepData, exampleMEMData];
};

export default sleepMemData;


