var roleTansporter = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.carry.energy < creep.carryCapacity) {
            //creep.say("Recharging!")
            var targets = creep.room.find(FIND_DROPPED_ENERGY);
            if(targets.length > 0) {
                if(creep.pickup(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }

        } else {
            //creep.say('Delivering')
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return ((structure.structureType == STRUCTURE_SPAWN && structure.energy < structure.energyCapacity)
                            || (structure.structureType == STRUCTURE_EXTENSION && structure.energy < structure.energyCapacity)
                            || (structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] < structure.storeCapacity) 
                            || (structure.structureType == STRUCTURE_TOWER && structure.energy < structure.energyCapacity)                            
                            );
                }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);                    
                }
            }
        }
    }
};

module.exports = roleTansporter;
