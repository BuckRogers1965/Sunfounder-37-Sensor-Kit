const int analogInPin = A0; 
int sensorValue = 0;         
int KEY ;
int NEWKEY ;
int OLDKEY = 0;
int OK = 0 ; 
int FLAG = 0;
int coun = 0;
int coun1 = 0;
int look = 0;

int chk[16] = {0,100,260,385,482,530,587,630,660,688,714,735,753,769,784,800};

//*******************************************************************************************
#include <IRremote.h>   
long irKeyCodes[16] = {
   0x00000000, 0x40BFF807, 0x40BF7887, 0xC03FC03F,       
  0xC03F40BF,0x40BF00FF, 0x00000000, 0x00000000,       
  0x00000000, 0x00000000, 0x00000000, 0x00000000,      
  0x80FFC13E, 0x80FFE11E, 0x80FFD12E, 0x80FFF10E       
};
IRsend irsend;
//*******************************************************************************************

void setup() {
  Serial.begin(9600); 
}

 void loop() {

    sensorValue = analogRead(analogInPin);                        
   delay(15);
   aaa:    
     if (FLAG == 0)
      {
  if (chk[0]<=sensorValue && sensorValue<chk[1])        
     {
      KEY = 1 ; 
     }
   else if (chk[1]<=sensorValue && sensorValue<chk[2]) 
     {
      KEY = 2 ;   
     }
   else if (chk[2]<=sensorValue && sensorValue<chk[3])  
     {
      KEY = 3 ;        
     }
   else if (chk[3]<=sensorValue && sensorValue<chk[4])   
     {
      KEY = 4 ;       
     }
   else if (chk[4]<=sensorValue && sensorValue<chk[5])    
     {
      KEY = 5 ;    
     }
   else if (chk[5]<=sensorValue && sensorValue<chk[6])    
     {
      KEY = 6 ;
     }
   else if (chk[6]<=sensorValue && sensorValue<chk[7])    
     {
      KEY = 7 ; 
     }
   else if (chk[7]<=sensorValue && sensorValue<chk[8])     
     {
      KEY = 8 ;  
     }
   else if (chk[8]<=sensorValue && sensorValue<chk[9])    
     {
     KEY = 9 ;    
     }
   else if (chk[9]<=sensorValue && sensorValue<chk[10])     
     {
      KEY = 10 ; 
     }
   else if (chk[10]<=sensorValue && sensorValue<chk[11])   
     {
      KEY = 11 ;
     }
   else if (chk[11]<=sensorValue && sensorValue<chk[12])   
     {
      KEY = 12 ;  
     }
   else if (chk[12]<=sensorValue && sensorValue<chk[13])   
     {
      KEY = 13 ; 
     }
   else if (chk[13]<=sensorValue && sensorValue<chk[14])  
     {
      KEY = 14 ; 
     }
   else if (chk[14]<=sensorValue && sensorValue<chk[15])   
     {
      KEY = 15 ;   
     }
   else if (chk[15]<sensorValue && sensorValue<850)        
     {
      KEY = 16 ;  
     }
   else if (sensorValue>1000 )                          
     {
      KEY =  0;   
     }     
    }
     
     
    NEWKEY = KEY;                                     
      if ( NEWKEY == OLDKEY)              
         {                                                                                                                                               
           OK++;                                                                 
         }                                                    
         else
         {
           OK = 0;                          
         }
         OLDKEY = NEWKEY;
      if(OK>=5)                   
           {
           Serial.print("KEY = ");    
           Serial.println(NEWKEY);
            Serial.println(sensorValue);
              Serial.print("look = ");    
           Serial.println(look);   
         if (NEWKEY !=0)
         {  
           switch(NEWKEY){

       case 1:
            FLAG =1;
             break;
       case 2:
             FLAG =1;
             break;
       case 3:
             FLAG =1;
             break;
       case 4:
               FLAG =1;
              break;
       case 5:
           FLAG =1;
              break;
       case 6:
              FLAG =1;
                break;
       case 7:
               FLAG =1;
                break;
       case 8:
               FLAG =1;
               break;
       case 9:
               FLAG =1;
               break;
       case 10:
               FLAG =1;
               break;
       case 11:
               FLAG =1;
               break;
        case 12: 
               FLAG =1;
               break;
        case 13:    
               FLAG =1;
               break;
        case 14:  
                FLAG =1;
                 break;
        case 15:
                FLAG =1;
                break;

        case 16:            
              FLAG =1;
              break;               
            }     
         }    
         
          if(NEWKEY>0)
                {            
                  coun1++;            
                }  
                
             if(coun1>5)
                {
                  coun1=0;
                  irsend.sendNEC(irKeyCodes[NEWKEY], 32);
                  look++;
                }  
         
          if (sensorValue>950)
          {
            coun++;
          }
          if(coun>1)
          { 
             FLAG =0;      
            coun = 0;
            goto aaa;
         }
    }
 }



