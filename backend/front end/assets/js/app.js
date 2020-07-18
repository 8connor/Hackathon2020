document.addEventListener('DOMContentLoaded', function () {
    var sideNavElems = document.querySelectorAll('.sidenav');
    var sideNavInstances = M.Sidenav.init(sideNavElems);
    var modalElems = document.querySelectorAll('.modal');
    var modalInstances = M.Modal.init(modalElems);




    fetch("/api/trash").then(response => response.json())
        .then(function (data) {

        });
}
);


