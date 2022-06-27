const fontSizes = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

    for (let i = 0; i < fontSizes.length; i++) {
      const fontSize = fontSizes[i];

      fontSize.addEventListener('click', (evt) => {
        let fontSizeActive = document.querySelector('.font-size_active');

        evt.preventDefault();
        
        fontSizeActive.classList.remove('font-size_active');
        evt.target.classList.add('font-size_active');

        const changing = (fontSize) => {
          if (fontSize == 'small') {
            book.className = 'book_fs-small';
          } else if (fontSize == 'big') {
            book.className = 'book_fs-big';
          } else {
              book.className = 'book';
          }
        }

        changing(evt.target.dataset.size);
    })
  }