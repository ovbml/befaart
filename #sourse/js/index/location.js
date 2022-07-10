let locationTools = {
    search: {
        get: function() {
            let search = window.location.search;
            let items = {};

            if ( search[0] === '?' )
                search = search.replace('?', '');

            if ( search.length === 0 )
                return items;

            for ( let item of search.split('&') ) {
                let key = item.split('=')[0];
                let value = item.split('=')[1];

                // replace map
                if ( value === undefined || value === 'true' )
                    value = true;
                else if ( value === 'false' )
                    value = false;
                else if ( !isNaN(value) )  // if an number
                    value = +value;
                else if ( value === 'NaN' )
                    value = NaN
                else if ( value === 'undefined' )
                    value = undefined;
                else if ( value === 'null' )
                    value = null;

                items[key] = value;
            }

            return items;
        },
        set: function(search, reload=true) {
            if ( typeof search === 'object' ) {
                let items = [];

                for ( let key of Object.getOwnPropertyNames(search) ) {
                    let value = search[key];
                    let item;

                    if ( value === true )
                        item = key;
                    else
                        item = key + '=' + value;

                    items.push(item);
                }

                search = items.join('&');
            }

            if ( reload )
                window.location.search = search;
            else
                window.history.pushState('', '',
                    window.location.origin + window.location.pathname + '?' + search + window.location.hash);
        }
    }
}