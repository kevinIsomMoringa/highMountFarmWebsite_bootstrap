
const workSheetid = "1EFwe7fr6qQ5qEi65dj1sSoeIKuDE5G4Zj_ycPD5s2lw"
const folderid = "1Rzg1oRVykSDKhko63n0_SUvHk9EisBto"

function scrapingImgInfo() {
  let folder = DriveApp.getFolderById(folderid)
  let folderS = folder.getFolders();
  while (folderS.hasNext()) {
    let Nxfolder = folderS.next();
    Logger.log(retrieveFiles(Nxfolder.getName(),Nxfolder));
  }
}

function retrieveFiles(prefix,folDer){
  let fileDetails = []
  let files = folDer.getFiles();
    while (files.hasNext()) {
      let file = files.next();
      let fileName = file.getName();
      fileDetails.push(`${prefix}_${fileName}`)
      Logger.log(`${prefix}_${fileName}`);
  }
  if (fileDetails.length > 0) {return fileDetails}
}

function addRecord(record=['hey','HEERE','Hurray']) {
  const spreadSheet = SpreadsheetApp.openById(workSheetid);
  const sheet = spreadSheet.getSheetByName("Sheet1")
  sheet.appendRow(record);
}

function testing() {
  addRecord(['Here','boytoy'])
}