function onLoad() {
    for (var i = 1; i < 5; i++) {
        let paragraph = document.getElementById(`paragraph-${i}`);
        let icon = document.getElementById(`fold-${i}`);
        
        paragraph.style.visibility = "hidden";
        paragraph.style.height = '0';
        paragraph.style.paddingTop = '0';
        paragraph.style.paddingBottom = '0';
        icon.src = "./assets/images/icon-plus.svg";
    }
}

function show(id) {
    let paragraphID = `paragraph-${id}`
    let iconID = `fold-${id}`

    var paragraph = document.getElementById(paragraphID);
    var icon = document.getElementById(iconID);
    
    if (paragraph.style.visibility == "hidden") {
        paragraph.style.visibility = "visible";
        paragraph.style.height = 'auto';
        paragraph.style.paddingTop = '10px';
        paragraph.style.paddingBottom = '10px';
        icon.src = "./assets/images/icon-minus.svg"
    }
    else {
        paragraph.style.visibility = "hidden";
        paragraph.style.height = '0';
        paragraph.style.paddingTop = '0';
        paragraph.style.paddingBottom = '0';
        icon.src = "./assets/images/icon-plus.svg"
    }
}
