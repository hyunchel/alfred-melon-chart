const alfy = require('alfy');
const melonWeekly = require('melon-chart-api');

const [cutLine, date] = alfy.input.split(' ');
melonWeekly(date, { cutLine }).then(data => {
  const items = data.data.map(rank => {
    return {
      title: rank.title,
      subtitle: rank.artist + ' | ' + rank.album,
      arg: rank.rank
    }
  });
  alfy.output(items);
});