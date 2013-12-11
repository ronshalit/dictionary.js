(function(){
_dicId = 0;

this.Dictionary = function Dictionary(){  
  var _d = {},_id = 0, _myId = ++_dicId, _keys=[],_keysDict={};
  this.i = function(key,val){    
    var isValidKey = typeof key == 'string' || typeof key == 'number';
    if(arguments.length>1 && isValidKey){
      if(!_keysDict[key]){
        _keys.push(key);
        _keysDict[key]=true;
      }
      _d[key]=val;
    }
    if(arguments.length>1 && !isValidKey){
      _d[key["__id"+_myId] =(key["__id"+_myId]==undefined? ++_id:key["__id"+_myId])] = val;
      if(!_keysDict["__id"+_id]){
        _keys.push(key);
        _keysDict["__id"+_id]=true;
      }
    }        
    if(arguments.length==1 && isValidKey)
      return _d[key];
    if(arguments.length==1 && !isValidKey)
      return _d[key["__id"+_myId]];    
  }
  this.keys = function(){ return _keys;} 
}
})();


