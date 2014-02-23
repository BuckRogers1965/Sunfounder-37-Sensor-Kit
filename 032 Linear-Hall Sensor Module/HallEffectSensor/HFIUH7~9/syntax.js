function hasClass(ele,cls) {
	return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
	if (!this.hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
	if (hasClass(ele, cls)) {
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		ele.className = ele.className.replace(reg, ' ');
	}
}

function expandSyntax(element) {
	var syntax = element.parentNode.parentNode.parentNode.parentNode.parentNode;

	if (hasClass(syntax, 'expand')) {
		removeClass(syntax, 'expand');

		if(document.all) {
			element.innerText = 'collapse';
		} else{
			element.textContent = 'collapse';
		}
	} else {
		addClass(syntax, 'expand');

		if(document.all) {
			element.innerText = 'expand';
		} else{
			element.textContent = 'expand';
		}
	}

	return true;
}
