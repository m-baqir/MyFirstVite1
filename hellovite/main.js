import './style.scss';

import { makeHeadlines } from './headliner.js';

import json from './data.json';

const app = document.getElementById('app');

makeHeadlines(app, json.homepage.headline);


