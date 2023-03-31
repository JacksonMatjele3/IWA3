import config from './configuration.js';

const message = `© ${config.company} (${config.year})`;
document.querySelector('footer').innerText = message;
