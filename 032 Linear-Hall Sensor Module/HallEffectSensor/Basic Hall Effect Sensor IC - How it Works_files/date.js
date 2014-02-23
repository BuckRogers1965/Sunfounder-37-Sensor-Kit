<!-- Changes Date on All Pages -->
function replacePhrase(){
	var aTags = document.getElementsByTagName('span');
	var txtNode = document.createTextNode('July 2013');
	for( var i=0; i < aTags.length; i++){ 
		className = aTags[i].className && aTags[i].className != '' ? aTags[i].className : aTags[i].getAttribute('class');
		if( className == 'replace')
			aTags[i].appendChild(txtNode.cloneNode(false));	
	}
}