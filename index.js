const alfy = require('alfy');
const melon = require('melon-chart-api');

const DEFAULT_CUTLINE = 5;

let [cutLine, date] = alfy.input.split(' ');
if (isNaN(parseInt(cutLine))) {
  cutLine = DEFAULT_CUTLINE;
}
melon(date, { cutLine }).weekly().then(data => {
  const items = data.data.map(rank => {
    return {
      title: rank.title,
      subtitle: rank.artist + ' | ' + rank.album,
      arg: rank.rank
    }
  });
  alfy.output(items);
});