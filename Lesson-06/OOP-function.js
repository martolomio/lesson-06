function Robot(){
	var self = this;
	
	self.work = function(){
		self.work = 'I am Robot - I just working';
		return self.work;
	}
}

function CoffeRobot(){
	Robot.call(this);
	
	var self = this;
	
	self.work = function(){
		self.work = 'I am CoffeeRobot - I just making coffee';
		return self.work;
	}
}

function RobotDancer (){
	Robot.call(this);
	
	var self = this;
	
	self.work = function(){
		self.work = 'I am RobotDancer - I just dancing';
		return self.work;
	}
}
function RobotCoocker(){
	Robot.call(this);
	
	var self = this;
	
	self.work = function(){
		self.work = 'I am RobotCoocker - I just cooking';
		return self.work;
	}
}

 var coot= new Robot();
 console.log(coot.work());

 var coot= new CoffeRobot();
 console.log(coot.work());
 
 var coot= new RobotDancer();
 console.log(coot.work());
 
 var coot= new RobotCoocker();
 console.log(coot.work());