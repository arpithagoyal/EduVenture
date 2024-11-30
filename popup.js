document.getElementById('generateQuiz').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: extractPageContentForQuiz, // Function to execute in the tab
      }, (results) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
        } else {
          console.log('Quiz generated successfully:', results[0].result);
        }
      });
    });
  });
  
  document.getElementById('generatePPT').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: extractPageContentForPPT, // Function to execute in the tab
      }, (results) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
        } else {
          console.log('PPT generated successfully:', results[0].result);
        }
      });
    });
  });
  
  // Function to extract content from the page for quiz
  function extractPageContentForQuiz() {
    return document.body.innerText; // Return all text content from the page
  }
  
  // Function to extract content from the page for PPT
  function extractPageContentForPPT() {
    return document.body.innerText; // Return all text content from the page
  }
  