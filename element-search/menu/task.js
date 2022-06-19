const menuLink = document.querySelectorAll('.menu__link'); 

for (let i = 0; i < menuLink.length; i++) {
  const menu = menuLink[i];
  const sub = menu.closest('.menu__item').querySelector('.menu');

  menu.onclick = () => {
    sub.style.display = 'block';
    return false;
  }

  if (!sub) {
    continue;
  } 

  sub.style.display = 'none';
}