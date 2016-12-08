module.exports = {
    
    /** @param {Room} room **/
    scout_sources: function(room) {
        if(typeof room.memory.sources === 'undefined') {
            mem_store = []
            
            var sources = room.find(FIND_SOURCES);
            for(var index in sources) {
                var source = sources[index];
                var top = source.pos.y - 1;
                var left = source.pos.x - 1;
                var bottom = source.pos.y + 1;
                var right = source.pos.x + 1;
                
                var objects_in_area = room.lookAtArea(top, left, bottom, right, true);
                console.log(objects_in_area.length);
                for(var index in objects_in_area) {
                    var obj = objects_in_area[index];
                    if(obj.type == 'terrain') {
                        if(obj.terrain != 'wall') {
                            console.log(`${obj.terrain} found at (${obj.x},${obj.y})`);
                            mem_store.push(room.getPositionAt(obj.x, obj.y));
                        }
                    }
                }
            }
            
            room.memory.sources = mem_store;
        }
    }
};

