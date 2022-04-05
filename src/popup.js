const replaceButton = document.querySelector('.replace-text-button');

replaceButton.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: replaceTextInH1,
  });
});

const replaceTextInH1 = () => {
  const H1_TAG_TEXT = 'Hello world!';
  const h1 = document.querySelector('h1');

  if (h1) {
    h1.textContent = H1_TAG_TEXT;
  }
};
