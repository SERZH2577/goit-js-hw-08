import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const STORAGE_KEY = 'videoplayer-current-time';
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onTimeupdate, 1000));

function onTimeupdate(time) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(time));
}

player.setCurrentTime(`${JSON.parse(localStorage.getItem(STORAGE_KEY)).seconds}`);
