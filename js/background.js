console.log("you are in bgScript", chrome.action);

function showBoardOnclick(tab) {
  let msg = {
    text: "request sent to show the board",
  };
  chrome.tabs.sendMessage(tab.id, msg);
}
chrome.action.onClicked.addListener(showBoardOnclick);
