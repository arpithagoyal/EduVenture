chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'generateQuiz') {
      const pageContent = message.data;
  
      // Call AI API (OpenAI/Google API) to generate quiz
      const quiz = generateQuizFromContent(pageContent);
  
      // Store the quiz in local storage for later download
      chrome.storage.local.set({ quiz });
  
      sendResponse({ quizGenerated: true });
    } else if (message.action === 'generatePPT') {
      const pageContent = message.data;
  
      // Call AI API to generate PPT content
      const pptContent = generatePPTContent(pageContent);
  
      // Store PPT for download
      chrome.storage.local.set({ pptContent });
  
      sendResponse({ pptGenerated: true });
    }
    return true;  // Keep the messaging channel open for asynchronous response
  });
  
  function generateQuizFromContent(content) {
    // API call to OpenAI or Google for quiz generation (use your preferred model)
    const prompt = `Generate 5 multiple choice questions based on this content: ${content}`;
  
    // Example API call (OpenAI):
    // Add your OpenAI API code here
  
    return {
      type: 'MCQ',
      questions: [
        { question: 'What is AI?', options: ['Artificial Intelligence', 'Algorithm', 'Automation'], answer: 'Artificial Intelligence' },
        // Add more questions
      ]
    };
  }
  
  function generatePPTContent(content) {
    // Summarize and create bullet points
    return [
      { title: 'Introduction', points: ['Key Point 1', 'Key Point 2'] },
      // Add more slides
    ];
  }
