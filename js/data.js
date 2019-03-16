
class DataModule {

    loadData() {
        if(localStorage.getItem('show') == null) {

            return fetch('http://api.tvmaze.com/shows')
                .then(response => response.json())
                .then(data =>{
                     localStorage.setItem('show', JSON.stringify(data))
                     return data
                });
        }else{
            let data = JSON.parse(localStorage.getItem('show'));
            //console.log(data)
            return Promise.resolve(data);
        }
    }
        
    searchForShow(searchItem) {
        // if( localStorage.getItem('searchItem') == null){
        
            return fetch(`http://api.tvmaze.com/search/shows?q=${searchItem}`)
                .then(response => response.json())
                // .then(data => {
                    // localStorage.setItem('searchItem', JSON.stringify(data));
                    // console.log(data)
                    // return data
                // })
        
        // }else{
        //     let data = JSON.parse(localStorage.getItem('searchItem'));
        //     // console.log(typeof data);
        //     // return Promise.resolve(data);
        //     return data;
        // }
    }

    loadDataShowPage(id){
        // if(localStorage.getItem('ShowPage') == null) {
            return fetch(`http://api.tvmaze.com/shows/${id}?embed=cast`)
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('ShowPage', JSON.stringify(data));
                    return data;  
                });
    
        // }else{
        //     let data = JSON.parse(localStorage.getItem('ShowPage'));
        //     return Promise.resolve(data);
        // }
    }
    
    loadDataSeasonsShowPage(id){
        // if(localStorage.getItem('SeasonsShowPage') == null) {
            return fetch(`http://api.tvmaze.com/shows/${id}/seasons`)
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('SeasonsShowPage', JSON.stringify(data));
                    return data;  
                });
    
        // }else{
        //     let data = JSON.parse(localStorage.getItem('SeasonsShowPage'));
        //     return Promise.resolve(data);
        // }
    }
}

export default DataModule;