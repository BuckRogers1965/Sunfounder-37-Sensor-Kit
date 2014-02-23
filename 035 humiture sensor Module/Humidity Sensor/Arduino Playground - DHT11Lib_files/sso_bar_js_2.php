// varible declaration to monitor the status
var $LOGGED_OUT = '0';
var $LOGGED_IN = '1';
var $user_state = $LOGGED_OUT;
var $extRender = '';

// create the logout bar
function ssoGenerateLogoutBar($username) {
  $r  = '<div class="li un">Logged in as <b>' + $username + '</b></div> ';
  $r += '<div class="li sep">|</div> ';
  	  $r += '<div class="li up"><a class="t0" href="https://id.arduino.cc/">Profile</a></div> ';
	  $r += '<div class="li sep">|</div> ';
	    $r += '<div class="li"><a href="https://id.arduino.cc/auth/logout/?returnurl=http%3A%2F%2Fplayground.arduino.cc%2F">Sign out</a></div>';
  document.getElementById("loginInfo").innerHTML = $r; 
}

// create the login bar
function ssoGenerateLoginBar() {
  $r = '<div class="lo"><a href="https://id.arduino.cc//auth/login/?returnurl=http%3A%2F%2Fplayground.arduino.cc%2Fmain%2FDHT11Lib">Sign in</a> or ';
  $r += '<a href="https://id.arduino.cc/auth/register/?returnurl=http%3A%2F%2Fplayground.arduino.cc%2Fmain%2FDHT11Lib">Register</a></div>';
  document.getElementById("loginInfo").innerHTML = $r;
}

// create the navigation bar
function ssoGenerateNavigationBar($username) {
  $r = '';
    $r += '<a class="t0" href="http://arduino.cc/en/">Main Site</a> ';
    $r += '<a class="t0" href="http://blog.arduino.cc/">Blog</a> ';
    $r += '<a class="t1" href="http://playground.arduino.cc/">Playground</a> ';
    $r += '<a class="t0" href="http://arduino.cc/forum/">Forum</a> ';
    $r += '<a class="t0" href="http://labs.arduino.cc/">Labs</a> ';
    $r += '<a class="t0" href="http://store.arduino.cc/ww/">Store</a> ';
    document.getElementById("ssoNavBar").innerHTML = $r;

  if (cookieExists('arduino_sso_authorized')) {
	$user_state = $LOGGED_IN;
	ssoGenerateLogoutBar($username);
  } else {
	$user_state = $LOGGED_OUT;
	ssoGenerateLoginBar();
  }

  /* load the first timer, to check whether the user is logged in */
  window.setTimeout("stateMachine()",1000);

  /* setup a clock to check periodically whether the user is there */
  window.setInterval("stateMachine()",5000);
}

// create the cookie upon login
function setCookie(c_name,value,expiredays) {
  var exdate=new Date();
  exdate.setDate(exdate.getDate()+expiredays);
  document.cookie=c_name+ "=" +escape(value)+
  ((expiredays==null) ? "" : ";expires="+exdate.toUTCString());
}

// get the value of the cookie
function getCookie(c_name) {
  if (document.cookie.length>0) {
	c_start=document.cookie.indexOf(c_name + "=");
	if (c_start!=-1) {
	  c_start=c_start + c_name.length+1;
	  c_end=document.cookie.indexOf(";",c_start);
	  if (c_end==-1) c_end=document.cookie.length;
	  return unescape(document.cookie.substring(c_start,c_end));
	}
  }
  return "";
}

// erase the cookie upon logout
function deleteCookie(c_name) {
  document.cookie = c_name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
} 

// check the security cookie and the name cookie to decide for a reset
function cookieExists(c_name)
{
  if (document.cookie.length>0)
  {
	c_start=document.cookie.indexOf(c_name + "=");
	if (c_start!=-1)
	{
	  c_start=c_start + c_name.length+1;
	  c_end=document.cookie.indexOf(";",c_start);
	  if (c_end==-1) c_end=document.cookie.length;
	  return 1;
	}
  }
  return 0;
}

// state machine to decide what to do
function stateMachine() {
  switch($user_state) {
	case $LOGGED_OUT:
	  if (cookieExists('arduino_sso_authorized')) {
		window.location.reload();
	  }
	  break;
	case $LOGGED_IN:
	  if (!cookieExists('arduino_sso_authorized')) {
				  $user_state = $LOGGED_OUT;
		  ssoGenerateLoginBar();
			  }
	  break;
  }
}

