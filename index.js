function utils(){
    this.example = function(){
        return 'hello world';
    }
    this.stripPrivateProperties = function(properties, array){
        let mapped = array.map((value) => {
            return omit(properties,value)
        })
        function omit(keys, obj) {
            const {[keys[0]]:omitted, [keys[1]]:omitteds, ...rest} = obj
            return rest;
          }
        return mapped;
    }
    this.excludeByProperty= function(property, array){
        let filtered = array.filter((value) =>{
            return !value.hasOwnProperty(property)
        })
        return filtered;
    }
    this.sumDeep = function(array){
        let mapped = array.map((value) => {
            let  c = value.objects.map((value) => {
                return value.val
            })
            return {objects: c.reduce((a, b) => a + b, 0)}
        })
        return mapped;
    }
    this.applyStatusColor = function(colors, statuses){
        let mapped = statuses.map((value) => {
            let color
            for(let key in colors){
               if (colors[key].includes(value.status)) color = key ; 
            }
            value.color = color
            if(!color) return null;
           return value
        })
      mapped =  mapped.filter(value => value !== null )
        return mapped
    }
    this.createGreeting = function(greet, say){
        function helper(name) {
            return`${say} ${name}`    
        }
        return helper;
    }
    this.setDefaults = function(props) {
        function helper(user) {
            let firstKey = Object.keys(props)[0];
            let value = props[firstKey]
            if(user[firstKey] === undefined){
                user[firstKey] = value
            }
            return user
        }
        return helper;
    }
    this.sanitizeUser = function(user) {
        const {num, street, suburb} = user.address;
        user.monthJoined = user.monthJoined +1;
        user.fullAddress = `${num} ${street}, ${suburb}`;
        let firstName = user.name.split(" ")[0];
        user.firstName = firstName;
        return user
    }
}

module.exports = new utils;