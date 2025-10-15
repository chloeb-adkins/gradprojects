#include <Servo.h>

Servo myservo;

const int LED_PIN = 13;  // Onboard LED

// Stage values (your data)
const int stages[] = {
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  1,1,1,1,1,1,
  2,2,2,2,2,2,2,2,2,2,2,2,
  3,3,3,
  4,4,4
};

const int numStages = sizeof(stages) / sizeof(stages[0]);

void setup() {
  Serial.begin(9600);
  while (!Serial);

  myservo.attach(9);        // Servo on pin 9
  pinMode(LED_PIN, OUTPUT); // LED output

  runStages();
}

void loop() {
  // nothing here
}

void blinkLED() {
  digitalWrite(LED_PIN, HIGH);
  delay(200);
  digitalWrite(LED_PIN, LOW);
}

int getServoAngle(int stage) {
  switch (stage) {
    case 0: return 10;
    case 1: return 60;
    case 2: return 120;
    case 3: return 170;
    case 4: return 10;  // reset position
    default: return 10;
  }
}

void runStages() {
  Serial.print("Number of entries: ");
  Serial.println(numStages);
  Serial.println();

  int lastStage = -1;

  for (int i = 0; i < numStages; i++) {
    int stage = stages[i];
    int angle = getServoAngle(stage);

    // Blink every time a new element is read
    blinkLED();

    // Only move servo if stage changed
    if (stage != lastStage) {
      Serial.print("Stage changed to ");
      Serial.print(stage);
      Serial.print(" | Servo angle: ");
      Serial.println(angle);

      myservo.write(angle);
      lastStage = stage;
    }

    delay(500);  // Delay between array reads
  }

  Serial.println("All stages complete!");
}
