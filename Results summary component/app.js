function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();

    xobj.overrideMimeType("application/json");
    xobj.open('GET', './data.json', true)
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function populateData() {
    loadJSON(function(response) {
        let data = JSON.parse(response);
    
        const rows = item => `
            <div class="summary-details-row" style="background-color: ${item.background_color};">
                <div class="summary-details-row-icon">
                    <img src="${item.icon}" alt="reaction icon">
                </div>
                <div class="summary-details-row-title">
                    <div style="color: ${item.color}">${item.category}</div>
                </div>
                <div class="summary-details-row-mark" style="text-align: center">
                    ${item.score} <span style="opacity: 60%;">/ 100</span>
                </div>
            </div>
        `;
    
        document.querySelector("#summary-details-rows").innerHTML = data.map(item => rows(item)).join('');
    });
}