function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',  // Default language
      includedLanguages: 'en,fr,es,de,it,pt,ru',  // Languages to show in the dropdown
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE  // Simple dropdown layout
    }, 'google_translate_element');
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const buttonTranslate = document.querySelector('#translate-dropdown');
    const languages = document.querySelector('#google_translate_element');
  
    if (buttonTranslate && languages) {
      buttonTranslate.addEventListener('click', function (event) {
        event.preventDefault();
        // Toggle visibility of the language dropdown
        // languages.classList.toggle('hidden');
        languages.classList.toggle('active');
      });
    } else {
      console.error('Translate button or language dropdown element not found.');
    }
  });