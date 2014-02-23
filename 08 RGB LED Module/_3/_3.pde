/*
  Blink
  Turns on an LED on for one second, then off for one second, repeatedly.
 
  This example code is in the public domain.
 */

void setup() {                
  // initialize the digital pin as an output.
  // Pin 13 has an LED connected on most Arduino boards:
  pinMode(9, OUTPUT);   
  pinMode(10, OUTPUT); 
  pinMode(11, OUTPUT); 
}

void loop() {
  digitalWrite(9, LOW);  
  digitalWrite(10, LOW); 
  digitalWrite(11, HIGH);  // set the LED on
  delay(500);              // wait for a second
  digitalWrite(9, LOW); 
 digitalWrite(10, LOW);
 digitalWrite(11, LOW); // set the LED off
  delay(500);              // wait for a second
  digitalWrite(9, LOW);  
  digitalWrite(10, HIGH); 
  digitalWrite(11, LOW);  // set the LED on
  delay(500);              // wait for a second
  digitalWrite(9, LOW); 
 digitalWrite(10, LOW);
 digitalWrite(11, LOW); // set the LED off
  delay(500);              // wait for a second
  digitalWrite(9, HIGH);  
  digitalWrite(10, LOW); 
  digitalWrite(11, LOW);  // set the LED on
  delay(500);              // wait for a second
  digitalWrite(9, LOW); 
 digitalWrite(10, LOW);
 digitalWrite(11, LOW); // set the LED off
  delay(500);              // wait for a second
}
