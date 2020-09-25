// Function modified from Adrian Roselli's article,
// A Responsive Accessible Table, http://adrianroselli.com/2017/11/a-responsive-accessible-table.html
// https://codepen.io/smashing-magazine/pen/JzRwQZ/?editors=0010

function cellHeaders(tableId) {
  try {
    let thArray = [];
    const table = document.getElementById(tableId);
    const headers = table.getElementsByTagName("th");
    for (let i = 0; i < headers.length; i++) {
      const headingText = headers[i].innerHTML;
      thArray.push(headingText);
    }
    const styleElm = document.createElement("style");
    let styleSheet;
    document.head.appendChild(styleElm);
    styleSheet = styleElm.sheet;
    for (let i = 0; i < thArray.length; i++) {
      styleSheet.insertRule(
        "#" +
          tableId +
          " td:nth-child(" +
          (i + 1) +
          ')::before {content:"' +
          thArray[i] +
          ': ";}',
        styleSheet.cssRules.length
      );
    }
  } catch (err) {
    console.log("cellHeaders(): " + err);
  }
}

var tableIDs = ["respTable1", "respTable2"];

for (i = 0; i < tableIDs.length; i++) {
  cellHeaders(tableIDs[i]);
}

