import test from 'ava';
import alfyTest from 'alfy-test';

// created on 2017-04-21
const TEST_DATE = '2017/04/16';
const TEST_DATA = {
  data: [
    { rank: '1',
      title: '사랑이 잘 (With 오혁)',
      artist: '아이유',
      album: '사랑이 잘' },
    { rank: '2', title: '밤편지', artist: '아이유', album: '밤편지' },
    { rank: '3',
      title: 'REALLY REALLY',
      artist: 'WINNER',
      album: 'FATE NUMBER FOR' },
    { rank: '4',
      title: 'Marry Me',
      artist: '마크툽 (MAKTUB), 구윤회',
      album: '마크툽 프로젝트 Vol.03' },
    { rank: '5',
      title: '얼굴 찌푸리지 말아요',
      artist: '하이라이트 (Highlight)',
      album: 'CAN YOU FEEL IT?' },
    { rank: '6',
      title: '첫눈처럼 너에게 가겠다',
      artist: '에일리',
      album: '도깨비 OST Part.9' },
    { rank: '7',
      title: 'She`s a Baby',
      artist: '지코 (ZICO)',
      album: 'She`s a Baby' },
    { rank: '8',
      title: 'KNOCK KNOCK',
      artist: 'TWICE (트와이스)',
      album: 'TWICEcoaster : LANE 2' },
    { rank: '9',
      title: '부담이 돼 (Feat. 휘인 Of 마마무)',
      artist: '정키',
      album: 'EMPTY' },
    { rank: '10',
      title: '너란 봄 (Feat. 하림)',
      artist: '정은지',
      album: '공간' } ],
  dates: { start: '20170410', end: '20170416' }
};

test('default values', async t => {
  const alfy = alfyTest();

  // If the first parameter does not make sense, it will use default value.
  // Parameters are separated by a space, so the first parameter here is a space.
  const result = await alfy('not-a-date ' + TEST_DATE);

  // slice our data to 5 b/c default cutline is 5
  t.deepEqual(result, TEST_DATA.data.slice(0, 5).map(rank => {
    return {
      title: rank.title,
      subtitle: rank.artist + ' | ' + rank.album,
      arg: rank.rank
    }
  }))
});

test('top 10', async t => {
  const alfy = alfyTest();

  const result = await alfy('10 ' + TEST_DATE);

  t.deepEqual(result, TEST_DATA.data.map(rank => {
    return {
      title: rank.title,
      subtitle: rank.artist + ' | ' + rank.album,
      arg: rank.rank
    }
  }))
});