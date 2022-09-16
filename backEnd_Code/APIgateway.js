const workSheetID = "1EFwe7fr6qQ5qEi65dj1sSoeIKuDE5G4Zj_ycPD5s2lw"

function json(sheetName) {
    const spreadsheet = SpreadsheetApp.openById(workSheetID);
    Logger.log(spreadsheet.getName());
    //SpreadsheetApp.getActiveSpreadsheet()
    const sheet = spreadsheet.getSheetByName(sheetName)
    const data = sheet.getDataRange().getValues()
    const jsonData = convertToJson(data)
    return ContentService
          .createTextOutput(JSON.stringify(jsonData))
          .setMimeType(ContentService.MimeType.JSON)
}

function convertToJson(data) {
    const headers = data[0]
    const raw_data = data.slice(1,)
    let json = []
    raw_data.forEach(d => {
        let object = {}
        for (let i = 0; i < headers.length; i++) {
            object[headers[i]] = d[i]
        }
        json.push(object)
    });
    return json
}

function doGet(e) {
    const path = e.parameter.path
    return json(path)
  }