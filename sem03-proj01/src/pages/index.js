import nav from '../nav';

import Home from './Home.vue';
import Trends from './Trends.vue';
import Features from './Features.vue';
import Modules from './Modules.vue';
import History from './History.vue';
import Imprint from './Imprint.vue';

const imports = { Home, Trends, Features, Modules, History, Imprint };

const filterThings = item => ({
  path: item.path, component: imports[item.name],
});

export default nav.map(filterThings);
