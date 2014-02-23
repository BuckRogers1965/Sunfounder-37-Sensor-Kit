/*=================================================================*\
// Hepful Answers AJAX Code -- Version 2.1.0
// Base AJAX Copyright vBulletin 2008
// Thanks developers for the AJAX samples over the years!
\*=================================================================*/
var helpfulanswers_handleSuccess = function(o)
{
	if(o.responseText !== undefined)
	{
		if (helpfulanswers_callback.object_name[o.tId] !== undefined)
		{
			fetch_object(helpfulanswers_callback.object_name[o.tId]).innerHTML = o.responseText;
		}
	}
}
var helpfulanswers_handleFailure = function(o)
{
	if(o.responseText !== undefined)
	{
		alert(o.responseText);
	}
}
var helpfulanswers_callback =
{
	success: helpfulanswers_handleSuccess,
	failure: helpfulanswers_handleFailure,
	timeout: vB_Default_Timeout,
	cache: false,
	object_name: new Array()
}
function helpfulanswers_rate(postid, rank)
{	
	var sUrl = 'helpfulanswers.php';
	var postData = 'do=helpfulanswer&using_ajax=1&p=' + postid + '&rank=' + rank + '&securitytoken=' + SECURITYTOKEN;

	var request = YAHOO.util.Connect.asyncRequest('POST', sUrl, helpfulanswers_callback, postData);

	helpfulanswers_callback.object_name[request.tId] = 'helpfulanswers_box_' + postid;

	return false;
}
/*=================================================================*\
// That's all folks!
\*=================================================================*/