
#ifndef EMPREINTE_H 
#define EMPREINTE_H 

class Empreinte
{
  //methode
 public:
	Empreinte(unsigned long currentTime, unsigned long previousTime);
	void Setup();
	void Count(); 
  //propriété
 private:
	unsigned long currentTime, previousTime;


};

#endif