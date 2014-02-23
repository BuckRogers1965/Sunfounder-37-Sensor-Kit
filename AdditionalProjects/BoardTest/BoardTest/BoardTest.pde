
int BASE = 2 ;  // 第一顆 LED 接的 I/O 腳
int NUM = 68;   // LED 的總數  18是168/328 ;  68是 1280/2560
int i = 0;

void setup()
{
   for (i = BASE; i < BASE + NUM; i ++) 
   {
     pinMode(i, OUTPUT);   //設定數字I/O腳為輸出
   }
}

void loop()
{
  for (i = 1; i < 1 + NUM; i ++) 
    {
     digitalWrite(i, LOW);    //設定數字I/O腳輸出為"低"，即逐漸開燈
     delay(100);        //延遲
     digitalWrite(i+1, HIGH);    //設定數字I/O腳輸出為"低"，即逐漸開燈
     delay(100);        //延遲
    }  
   digitalWrite(19, LOW);    //設定數字I/O腳輸出為"低"，即逐漸開燈

   for (i = BASE; i < BASE + NUM; i ++) 
    {
     digitalWrite(i, HIGH);    //設定數字I/O腳輸出為"低"，即逐漸關燈
     delay(100);        //延遲
    }
   for (i = BASE; i < BASE + NUM; i ++) 
    {
     digitalWrite(i, LOW);    //設定數字I/O腳輸出為"低"，即逐漸開燈
     delay(100);        //延遲
    } 
   
 for (i = 1; i < 1 + NUM; i ++) 
    {
     digitalWrite(i, LOW);    //設定數字I/O腳輸出為"低"，即逐漸開燈
     delay(200);        //延遲
     digitalWrite(i+1, HIGH);    //設定數字I/O腳輸出為"低"，即逐漸開燈
     delay(200);        //延遲
    }  
   digitalWrite(19, LOW);    //設定數字I/O腳輸出為"低"，即逐漸開燈

   for (i = BASE; i < BASE + NUM; i ++) 
    {
     digitalWrite(i, HIGH);    //設定數字I/O腳輸出為"低"，即逐漸關燈
     delay(200);        //延遲
    }
   for (i = BASE; i < BASE + NUM; i ++) 
    {
     digitalWrite(i, LOW);    //設定數字I/O腳輸出為"低"，即逐漸開燈
     delay(200);        //延遲
    } 
}
