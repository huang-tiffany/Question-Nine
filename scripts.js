// JavaScript Document

var interval;
var elements = document.querySelectorAll('span');
var originalTexts = [];
for (var j = 0; j < elements.length; j++) {
	originalTexts[j] = elements[j].innerText;
}

function randomInt(max) {
	return Math.floor(Math.random() * max);
}

function randomFromArray(array) {
	return array[randomInt(array.length)];
}

function scrambleText(text) {
	const chars = '*?><[]&@#)(.%$-_:/;?!'.split('');
	return text.split('').map(x =>  randomFromArray(chars)).join('');
}

elements.forEach(item => {
	var originalText;
	item.addEventListener('mousemove', () => {
		originalText = item.innerText;
		interval = setInterval(() => {
			item.innerText = scrambleText(item.innerText);
		}, 100);
	});
//	item.addEventListener('mouseleave', () => {
//		setTimeout(function () {
//			clearInterval(interval);
//			item.innerText = originalText;
//		}, 100)
//	})
})