// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  // Get saved language preference or default to English
  const savedLanguage = localStorage.getItem('language') || 'en';
  
  // Set initial language
  setLanguage(savedLanguage);
  
  // Update toggle button active state
  updateToggleButton(savedLanguage);
});

// Function to set language
function setLanguage(lang) {
  // Update all elements with data-key attribute
  const elementsWithKeys = document.querySelectorAll('[data-key]');
  
  elementsWithKeys.forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Populate arrays for skill lists
  populateArrays(lang);
  
  // Update html lang attribute
  document.documentElement.lang = lang;
  
  // Save preference to localStorage
  localStorage.setItem('language', lang);
}

// Function to populate skill arrays
function populateArrays(lang) {
  const elementsWithArrays = document.querySelectorAll('[data-key-array]');
  
  elementsWithArrays.forEach(element => {
    const key = element.getAttribute('data-key-array');
    const items = translations[lang] && translations[lang][key];
    
    if (Array.isArray(items)) {
      element.innerHTML = '';
      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        element.appendChild(li);
      });
    }
  });
}

// Function to toggle language
function toggleLanguage() {
  const currentLang = localStorage.getItem('language') || 'en';
  const newLang = currentLang === 'en' ? 'fr' : 'en';
  
  setLanguage(newLang);
  updateToggleButton(newLang);
}

// Update toggle button appearance
function updateToggleButton(lang) {
  const toggleBtn = document.getElementById('language-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'en' ? 'FR' : 'EN';
  }
}
