
#include <dht.h>
#define dht_dpin A0 //no ; here. Set equal to channel sensor is on
#define LIGHT_SENSOR_PIN 1
// include the library code:
#include <LiquidCrystal.h>

dht DHT;
// initialize the library with the numbers of the interface pins
LiquidCrystal lcd(0, 1, 2, 3, 4, 5);

byte bGlobalErr; //for passing error code back from complex functions.
byte dht_dat[4]; //Array to hold the bytes sent from sensor.
int light_intensity = 0;
unsigned int flip = 0;

void setup(){
	//Blink LED to detect hangs
	pinMode(13, OUTPUT);
	// set up the LCD's number of columns and rows:
	lcd.begin(16, 2);
	lcd.print("Hello world!");
	//Serial.begin(9600);
	delay(300); //Let system settle
	//Serial.println("Humidity and temperature\n\n");
	delay(700); //Wait rest of 1000ms recommended delay before
	//accessing sensor
} //end "setup()"

void loop(){
  
	// set the cursor to column 0, line 1
	// (note: line 1 is the second row, since counting begins with 0):
	//lcd.setCursor(0, 1);
	// print the number of seconds since reset:
	//lcd.print("100");
	//lcd.print(millis()/1000);
	if ( flip & 1 )
	{
		digitalWrite(13, HIGH);
	} else {
		digitalWrite(13, LOW);
	}

	flip++;

	light_intensity=analogRead(LIGHT_SENSOR_PIN);

	DHT.read11(dht_dpin); //This is the "heart" of the program.

		lcd.setCursor(0, 0);

		lcd.print("temp =       ");
		lcd.setCursor(7, 0);
		lcd.print( DHT.temperature);

		lcd.setCursor(0, 1);
		//Every 7 out of 15 times we show humidity, rest temp
		if ((flip % 15) > 7 )
		{
			lcd.print("humidity = ");
			lcd.setCursor(11, 1);
			lcd.print(DHT.humidity);
		} else {
			lcd.print("Light =         ");
			lcd.setCursor(8, 1);
			lcd.print( light_intensity, DEC);
		}

	delay(800); //Don't try to access too frequently... in theory
	//should be once per two seconds, fastest,
	//but seems to work after 0.8 second.

} // end loop()

