browser.contextMenus.create({
    id: "gotocurrentISIS",
    title: "Go to current section"
});
  
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "gotocurrentISIS") {
        browser.tabs.executeScript({
            file: "heading.js"
        });
    }
});