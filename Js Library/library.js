function $(selector) {
    var self = document.querySelectorAll(selector);

    self.css = function(property, value){
        if(typeof property === 'object'){
            for(let i=0; i<self.length; i++){
                for(let [key, value] of Object.entries(property)){
                    self[i].style.setProperty(key, value);
                }
            }
        }
        else{
            for(let i=0; i < self.length; i++){
                self[i].style.setProperty(property, value);                
            }
        
        }
        return self;
    }
    
    self.on = function(event, callback){
        for(let i=0; i < self.length; i++){
            self[i].addEventListener(event, callback);
        }
        return self;
    }

    self.each = function(){
        for(let i=0; i < self.length; i++){
            if(i%2 == 0){
                var a = self[i];
                a.style.setProperty('color', 'green');
            }
            else if(i%2 == 1){
                var b = self[i];
                b.style.setProperty('color', 'orange');
            }
            //console.log(self[i]);

        }
        return self;
    }
    
    return self;
}
