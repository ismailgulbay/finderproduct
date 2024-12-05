chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "findProduct",
      title: "Find Product",  
      contexts: ["image"],    
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "findProduct") {
      const imageUrl = info.srcUrl;
  
  
      console.log("Find Similar clicked for image:", imageUrl);
  
      // Örneğin, benzer resmi aramak için Google Görseller'i açma
      chrome.tabs.create({
        url: `https://www.google.com/searchbyimage?image_url=${encodeURIComponent(imageUrl)}`
      });
    }
  });
  