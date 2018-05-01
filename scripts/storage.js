function getJSON() {
    return JSON.parse(localStorage.getItem('modJson'));
}

function writeJson(input) {
    localStorage.setItem('modJson', JSON.stringify(input));
    localStorage.setItem('edited', "true");
}

function isSaved() {
    return localStorage.getItem('edited') == "false";
}

function markEdited() {
    localStorage.setItem('edited', "true");
}

function save() {
    var file = new Blob([JSON.parse(localStorage.getItem('modJson'))], {type: 'json'});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, "moddingToolsJson");
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = "moddingToolsJson";
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}