var protoCreep = {

	function MyCreep(creep){
	    this.creep = creep;
	    this.memoryProp = creep.memory;
	}

	MyCreep.prototype.memoryFunc = function(){
	    return this.creep.memory;
	};

	MyCreep.prototype.moveTo = function(target){
	    this.creep.moveTo(target);
	}

	MyCreep.prototype.myFunction = function(target){
	    //TODO something
	}

	MyCreep.prototype.getEnergy = funciton(target){
		
	}

}; 

module.exports = protoCreep;
