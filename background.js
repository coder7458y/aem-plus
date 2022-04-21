document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("wcm-mode-disabled").addEventListener("click", handler_one);
  document.getElementById("wcm-mode-edit").addEventListener("click", handler_two);
  document.getElementById("wcm-mode-design").addEventListener("click", handler_three);
  document.getElementById("wcm-mode-preview").addEventListener("click", handler_four);
  document.getElementById("client-lib").addEventListener("click", handler_five);
  document.getElementById("editor").addEventListener("click", handler_six);
  document.getElementById("crxde").addEventListener("click", handler_seven);
  document.getElementById("logs").addEventListener("click", handler_eight);
});

// WCM = Disabled
function handler_one() {
  chrome.tabs.query({
    currentWindow: true,
    active: true
  }, function (tab) {
    const customParam = 'wcmmode=disabled';
    const url = tab[0].url
    const splitWord = '?'
    const splittedUrl = url.split(splitWord);
    const newUrl = splittedUrl[0] + splitWord + customParam;
    chrome.tabs.update(undefined, {
      url: newUrl
    });
  });
};

// WCM = Edit
function handler_two() {
  chrome.tabs.query({
    currentWindow: true,
    active: true
  }, function (tab) {
    const customParam = 'wcmmode=edit';
    const url = tab[0].url
    const splitWord = '?'
    const splittedUrl = url.split(splitWord);
    const newUrl = splittedUrl[0] + splitWord + customParam;

    chrome.tabs.update(undefined, {
      url: newUrl
    });
  });
};

// WCM = Design
function handler_three() {
  chrome.tabs.query({
    currentWindow: true,
    active: true
  }, function (tab) {
    const customParam = 'wcmmode=design';
    const url = tab[0].url
    const splitWord = '?'
    const splittedUrl = url.split(splitWord);
    const newUrl = splittedUrl[0] + splitWord + customParam;

    chrome.tabs.update(undefined, {
      url: newUrl
    });
  });
};

// WCM = Preview
function handler_four() {
  chrome.tabs.query({
    currentWindow: true,
    active: true
  }, function (tab) {
    const customParam = 'wcmmode=preview';
    const url = tab[0].url
    const splitWord = '?'
    const splittedUrl = url.split(splitWord);
    const newUrl = splittedUrl[0] + splitWord + customParam;

    chrome.tabs.update(undefined, {
      url: newUrl
    });
  });
};

// Clientlibs
function handler_five() {
  chrome.tabs.query({
    currentWindow: true,
    active: true
  }, function(tab) {
      const customParam = 'debugClientLibs=true';
      const url = tab[0].url
      const hashStart = (url.indexOf('#') === -1) ? url.length : url.indexOf('#');
      const querySymbol = (url.indexOf('?') === -1) ? '?' : '&';
      const newUrl = url.substring(0, hashStart) + querySymbol + customParam +
        url.substring(hashStart);

    chrome.tabs.update(undefined, {
      url: newUrl
    });
  });
};

// Editor.html
function handler_six() {
  chrome.tabs.query({
    currentWindow: true,
    active: true,
  }, ([tab]) => {
    const urlText = tab.url;
    const editorText = 'editor.html';
    const splitWord = '.html'
    const url = new URL(urlText);
    const readyUrl = `${url.origin}/${editorText}`;
    if (url.pathname.includes(splitWord)) {
      const splittedUrl = url.pathname.split(splitWord);
      const newUrl = `${readyUrl}${splittedUrl[0]+splitWord}`;
      chrome.tabs.update({
        url: url.origin + newUrl,
      });
    }
  });
};

// CRXDE
function handler_seven() {
  chrome.tabs.query({
    currentWindow: true,
    active: true,
  }, ([tab]) => {
    const url = new URL(tab.url);
    chrome.tabs.update({
      url: url.origin + '/crx/de/index.jsp',
    });
  });
};

// Logs
function handler_eight() {
  chrome.tabs.query({
    currentWindow: true,
    active: true,
  }, ([tab]) => {
    const url = new URL(tab.url);
    chrome.tabs.update({
      url: url.origin + '/system/console/bundles',
    });
  });
};
