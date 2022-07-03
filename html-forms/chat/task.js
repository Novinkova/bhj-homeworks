const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

const randomizer = () => {
  const answers = [
    'Я в своем познании настолько преисполнился...',
    'Я как будто бы уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, как эта Земля.',
    'Мне этот мир абсолютно понятен.',
    'Я здесь ищу только одного - покоя, умиротворения и вот этой гармонии, от слияния с бесконечно вечным...',
  ];

  return answers[Math.floor(Math.random() * answers.length)];
}

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
}) 

chatWidget.addEventListener('keydown', (event) => {
	const time = new Date().toLocaleDateString() + ' ' + new Date().getHours() + ':' + new Date().getMinutes();  
	const message = chatWidgetInput.value;

	if (event.key === 'Enter' && event.target.value !== '') {

		messages.innerHTML +=                                                                                                                                                                                                                                                             
			`<div class='message message_client'>
				<div class='message__time'> ${time} </div>
				<div class='message__text'> ${message} </div>
			</div>
			<div class='message'>
				<div class='message__time'> ${time} </div>
				<div class='message__text'>	${randomizer()}	</div>
			</div>`;

		chatWidgetInput.value = '';
	}
})