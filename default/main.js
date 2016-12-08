var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleTransporter = require('role.transporter');
var roleMiner = require('role.miner');
var roleTower = require('role.tower');


var upgraderCount = 10;
var builderCount = 10;
var transporterCount = 8;
var minerCount = 5;

// var activeCreepsTypes = {
//     upgrader: 3,
//     builder: 0,
//     transporter: 0,
//     miner: 0
// }

module.exports.loop = function () {
    cleanMemory();
    displayStatus();

    // for (creepType in activeCreepsTypes){
    //     var unit = _.filter(Game.creeps, (creep) => creep.memory.role == creepType);
    //     console.log(creepType + ': ' + unit.length + '/' + activeCreepsTypes[creepType]);

    // }   

    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length + '/' + upgraderCount);
    if(upgraders.length < upgraderCount) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);
    }  
    
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Builders: ' + builders.length + '/' + builderCount);
    if(builders.length < builderCount) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], undefined, {role: 'builder'});
        console.log('Spawning new builder: ' + newName);
    }
    
    var transporters = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter');
    console.log('Transporters: ' + transporters.length + '/' + transporterCount);
    if(transporters.length < transporterCount) {
        var newName = Game.spawns['Spawn1'].createCreep([CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'transporter'});
        console.log('Spawning new transporter: ' + newName);
    }

    var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
    console.log('Miners: ' + miners.length + '/' + minerCount);
    if(miners.length < minerCount) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,MOVE], undefined, {role: 'miner'});
        console.log('Spawning new miner: ' + newName);
    }
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];

        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }

        if(creep.memory.role == 'transporter') {
            roleTransporter.run(creep);
        }

        if(creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
        
    }
    
    roleTower.defendMyRoom('W51N71');
    
}

function displayStatus() {
    console.log();
    console.log('========================================================');
    console.log('Time: ' + Game.time);
    console.log('--------------------------------------------------------');
    
}

function cleanMemory() {
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }    
}


