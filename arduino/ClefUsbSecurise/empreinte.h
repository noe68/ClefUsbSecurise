
#ifndef EMPREINTE_H 
#define EMPREINTE_H 

class Empreinte
{
private:
	unsigned long currentTime, previousTime;
public:
	Empreinte(unsigned long currentTime, unsigned long previousTime);
	void setup();
	void count();
};

#endif