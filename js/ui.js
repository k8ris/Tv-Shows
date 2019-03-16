class UiModule {

render(data) {

    for(var i = 0; i < 51; i++) {

        if(i % 3 === 0) {
            var row = $('<div>');
            row.addClass('row');
            $('#main').append(row);
        }
    var col = $('<div>');
    col.addClass('col');
    
    var img = $('<img>');
    img.attr('src', data[i].image.medium);
    var p = $('<p>');
    p.text(data[i].name);
    
    
    var query = "./showPage.html?id=" + data[i].id;
    var link = $('<a>').attr('href',query);

    link.append(img);

    col.append(link);
    col.append(p);

    row.append(col)
    }
}

getData(){
    let searchItem = $('input').val();
    return searchItem;
}

renderSearch(data) {
    $('#searchList').html('');
    var length = 10 > data.length ? data.length : 10;
    for(var i = 0; i < length; i++){
           let li = $('<li>').text(data[i].show.name);
           li.attr('show-id',data[i].show.id);
           $('#searchList').append(li);
    }
}

renderSeasonsShowPages(data){
    //render show details
    let h3 = $('<h3>').text(`Seasons(${data.length})`);

    //render seasons
    let ul = $('<ul>').append(h3);
    ul.attr('id','seasons');
    
    for( var i = 0; i < data.length; i++){
        let li  = $('<li>').text(`${data[i].premiereDate} - ${data[i].endDate}`);
        ul.append(li);
    }
    $('#poster').append(ul);
}

renderShowPage(data){
    
    $('#description').html(`<h3>Show Details</h3>${data.summary}`); 

    //render show title
    let h1 = $('<h1>').text(data.name); 
    $('#title').append(h1);

    //render show img
    var img = $('<img>');
    img.attr('src', data.image.original);
    $('#poster').prepend(img);
    
    //render cast
    let h3 = $('<h3>');
    h3.text('Cast');
    let ul = $('<ul>');
    ul.append(h3);
    ul.attr('id','cast');

    for (var i = 0; i < data._embedded.cast.length; i++) {
        let li = $('<li>');
        // console.log(data._embedded.cast[i].person.name)
        li.text(data._embedded.cast[i].person.name);
        ul.append(li);
    }
    $('#poster').append(ul);   
}
}

export default UiModule;




