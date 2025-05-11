chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get('autoResetSetting', (result) => {
        chrome.storage.local.set({ autoResetSetting: result.autoResetSetting || false });
    });
});
