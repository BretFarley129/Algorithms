function climbing(steps){
    var combos = []
    if (steps == 1){        
        return [1];
    }
    else if(steps == 2){
        return [[1,1],2]
    }
    else if(steps < 1){
        console.log("you're not supposed to be here. no one's supposed to be here")
    }
    else{
        var a = climbing(steps - 1)
        for(var i =0; i < a.length; i++){
            combos.push([1].concat( a[i]))
        }
        var b = climbing(steps - 2)
        for(var i =0; i < b.length; i++){
            combos.push([2].concat( b[i]))
        }
        return combos
    }
    
}

var aaaa = climbing(4)
console.log(aaaa)
