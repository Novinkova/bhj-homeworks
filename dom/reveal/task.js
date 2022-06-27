const reveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {
  for (let i = 0; i < reveal.length; i++) {
    const block = reveal[i];
    const top = block.getBoundingClientRect().top;
    const bottom = block.getBoundingClientRect().bottom;

    if (top < this.innerHeight && top > 0 || bottom < this.innerHeight && bottom > 0) {
      block.classList.add('reveal_active');
    } else block.classList.remove('reveal_active');
  }
})