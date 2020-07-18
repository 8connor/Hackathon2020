document.addEventListener('DOMContentLoaded', function () {
    var sideNavElems = document.querySelectorAll('.sidenav');
    var sideNavInstances = M.Sidenav.init(elems);
    var modalElems = document.querySelectorAll('.modal');
    var modalInstances = M.Modal.init(modalElems);



    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'send-ajax-data.php');
    xhr.send(null);

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                console.log(xhr.responseText); // 'This is the returned text.'
            } else {
                console.log('Error: ' + xhr.status); // An error occurred during the request.
            }
        }

        
    };


});