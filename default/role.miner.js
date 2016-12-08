var roleMiner = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var sources = creep.room.find(FIND_SOURCES, {
        	filter: (structure) => {
        		return(structure.energy > 0);
        	}
        });
		if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
			creep.moveTo(sources[0]);
  		}
    }
};

module.exports = roleMiner;
