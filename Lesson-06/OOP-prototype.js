 
 function Robot(){}
 
	Robot.prototype.work = function(){
		console.log('I am Robot - I just working');
		};
	

function CoffeeRobot(){
	Robot.call(this);
	}

 CoffeeRobot.prototype = Object.create(Robot.prototype);
 CoffeeRobot.prototype.work = function(){
		console.log( 'I am CoffeeRobot - I just making coffee');
	}

	function RobotDancer (){
		Robot.call(this);
	}
	
	RobotDancer.prototype = Object.create(Robot.prototype);
	RobotDancer.prototype.work = function(){
		console.log('I am RobotDancer - I just dancing');
		}
	function RobotCoocker(){
		Robot.call(this);
	}
	RobotCoocker.prototype = Object.create(Robot.prototype);
	RobotCoocker.prototype.work =  function(){
		console.log( 'I am RobotCoocker - I just cooking');
		}

	 var robots=[ 
		new Robot(),
		new CoffeeRobot(),
		new RobotDancer(),
		new RobotCoocker()];
	 
	 robots.forEach(item => console.log(item.work()));

