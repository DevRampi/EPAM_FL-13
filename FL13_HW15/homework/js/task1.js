let assign = function(target,...sources){
  sources.forEach(function(item){
    Object.keys(item).forEach(function(key){
      target[key] = item[key];
    });
  })
return target;
}