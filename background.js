searchTerapeak = function (word,tab) {
    chrome.tabs.sendMessage(tab.id, "getClickedEl", {frameId: word.frameId}, (res)=>{
        console.log(res)
        if(res!= null) chrome.tabs.create({url:res});
    });
};

chrome.contextMenus.removeAll(function () {
    chrome.contextMenus.create({
        id: "1",
        title: "Open image",
        contexts:["page","image"]
    });
})

chrome.contextMenus.onClicked.addListener(searchTerapeak);