const interestsActive = document.querySelectorAll('.interests_active');

for (let i = 0; i < interestsActive.length; i++) {
  let generalCheckBox = interestsActive[i].closest('.interest').firstElementChild.firstElementChild;
  let items = interestsActive[i].querySelectorAll('.interest__check');

  generalCheckBox.addEventListener('change', function() {
    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      if (this.checked) {
        item.checked = true;
      } else item.checked = false;
    }
  });
}