import DataModule from './data.js';
import UiModule from './ui.js';

let data = new DataModule;
let ui = new UiModule;

let id = window.location.search.split("=")[1];
console.log(id);

data.loadDataSeasonsShowPage(id).then(myJason => ui.renderSeasonsShowPages(myJason));
data.loadDataShowPage(id).then(myJason => ui.renderShowPage(myJason));
data.loadDataShowPage(id).then(myJason => console.log(myJason));