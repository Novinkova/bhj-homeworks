const rotators = document.querySelectorAll('.rotator');

for (let i = 0; i < rotators.length; i++) {
    let sentence = rotators[i].querySelector('.rotator__case');

    const showNext = () => {
      if (sentence.classList.contains('rotator__case_active')) {
        sentence.classList.remove('rotator__case_active');
      }
      
      sentence = sentence.nextElementSibling;

      if (sentence == null) {
        sentence = rotators[i].querySelector('.rotator__case');
      }

      sentence.classList.add('rotator__case_active');

      if (sentence.classList.contains('rotator__case_active')) {
         sentence.style.color = sentence.dataset.color;
      }
    }
    setInterval(showNext, 1000);
}