const nav = [
  { name: 'Home', icon: 'home', path: '/' },
  { name: 'Trends', icon: 'trending_up' },
  { name: 'Features', icon: 'new_releases' },
  { name: 'Modules', icon: 'extension' /* or 'build' */ },
  { name: 'History', icon: 'history' },
  { name: 'Imprint', icon: 'info' },
];

// make name lowercase and prefix with '/'
const generatePath = item => `/${item.name.toLowerCase()}`;
// assign original to new -> overwrite generated path if already set
const addpath = item => Object.assign({ path: generatePath(item) }, item);

module.exports = nav.map(addpath);
