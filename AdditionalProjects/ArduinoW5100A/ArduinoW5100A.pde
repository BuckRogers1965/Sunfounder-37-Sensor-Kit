#include <Ethernet.h>
#include <SPI.h>
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
byte ip[] =  { 192, 168, 0, 15 };
Server server(80);
// SW1 AT PIN 3
// SW2 AT PIN 4
// SW3 AT PIN 5
// SW4 AT PIN 6
// SW5 AT PIN 7
// SW6 AT PIN 8
// SW7 AT PIN 9
void setup()
{
 for (int i = 0; i < 7; i++) 
   {
    pinMode((i+3),OUTPUT);
    digitalWrite((i+3), HIGH);
   }         
  Ethernet.begin(mac, ip);
  server.begin();
}
void loop()
{
  Client client = server.available();
  if (client) {
    // an http request ends with a blank line
    boolean current_line_is_blank = true;
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        // if we've gotten to the end of the line (received a newline
        // character) and the line is blank, the http request has ended,
        // so we can send a reply
        if (c == 'n' && current_line_is_blank) {
          // send a standard http response header
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println();
         
          // output the value of each analog input pin
          client.print(" welcome to Keyes ");
          client.println("<br />");
          client.print(" ");
          client.println("<br />");
          
          client.print("//********************");
          client.println("<br />");
          client.print("Modifly by LAIHOYA");
          client.println("<br />");
          client.print("//********************");
          client.println("<br />");
          client.print(" ");
          client.println("<br />");
        for (int i = 0; i < 6; i++) 
          {
          client.print(" analog input  ");
          client.print(i);
          client.print(" is ");
          client.print(analogRead(i));
          client.println("<br />");
          }
          client.print(" ");
          client.println("<br />");
        for (int i = 0; i < 7; i++) 
          {
          client.print(" Switch input  ");
          client.print(i);
          client.print(" is ");
          client.print(digitalRead(i+3));
          client.println("<br />");
          }
          client.print(" ");
          client.println("<br />");          
          client.print("LAIHOYA SAY TEST OK ^=^ ");
          client.println("<br />");
          break;
        }
        if (c == 'n') {
          // we're starting a new line
          current_line_is_blank = true;
        } else if (c != 'r') {
          // we've gotten a character on the current line
          current_line_is_blank = false;
        }
      }
    }
    client.stop();
  }
}
