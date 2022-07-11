const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const tool = document.createElement('div');

for (let i = 0; i < hasTooltip.length; i++) {
  const tooltip = hasTooltip[i];

  tooltip.addEventListener('click', function(evt) {
    tool.classList.add('tooltip');
    tool.classList.toggle('tooltip_active');
    tool.setAttribute('style', `left: ${tooltip.getBoundingClientRect().left}px; top: ${tooltip.getBoundingClientRect().bottom}px`);
    tool.innerText = `${tooltip.title}`;
    tooltip.insertAdjacentElement('beforeBegin', tool);
    
    evt.preventDefault();
  })
}