import DataModule from './data.js';
import UiModule from './ui.js';

let data = new DataModule;
let ui = new UiModule;

data.loadData().then( myJson => {
    // console.log(myJson);
    ui.render(myJson)
});

$('input').on('keyup', e => {
    e.preventDefault();
    let searchItem = ui.getData();
    data.searchForShow(searchItem).then((response) => {
        console.log(response);
        ui.renderSearch(response);

        $('li').on('click',(e) => {
            e.preventDefault();
            let id = $('li').attr('show-id');
            window.location.href =`showPage.html?id=${id}`
        })
    }); 
});

