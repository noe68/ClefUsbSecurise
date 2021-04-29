#include "empreinte.h"
#include "FPS_GT511C3.h"
#include "SoftwareSerial.h"
	
FPS_GT511C3 fps(5, 4); 
Empreinte::Empreinte(unsigned long currentTime, unsigned long previousTime) {
	this->previousTime = previousTime;
	this->currentTime = currentTime;
}
void Empreinte::setup() {
	
	fps.Open();
}
void Empreinte::count(){


}