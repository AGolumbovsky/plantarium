void setup() {

  Serial.begin(9600);
  pinMode(3, OUTPUT);

}

void loop() {

  int sensorValue = analogRead(A1); // 3-digit value
  
  Serial.println(sensorValue);

  if (sensorValue < 400)
  {

    digitalWrite(3, HIGH);
    delay(1500);
    digitalWrite(3, LOW);

  }
  
  digitalWrite(3, LOW);
  delay(60000); // try add "L" after the number, it's 16bit int by default
  
}