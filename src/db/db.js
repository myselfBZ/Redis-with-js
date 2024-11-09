
export class DB {
    #data = {}

    #commands = {
        "set":this.#set.bind(this),
        "get":this.#get.bind(this),
    }         


    handleQuery(query){
        const tokens = query.split(' ');
        if(!this.#commands.hasOwnProperty(tokens[0])){
            throw new Error('command not found')
        } 

        return this.#commands[tokens[0]](tokens.slice(1))
    }

    #set(tokens){
        if(tokens.length % 2 !== 0){
            throw new Error("not enought keys or values")
        }
        for(let i = 0; i < tokens.length; i+=2){
            this.#data[tokens[i]] = tokens[i + 1] 
        }
        return "OK"
    }

    #get(tokens){
        if(tokens.length > 1){
            throw new Error("get only takes one argument")
        }

        if(!this.#data.hasOwnProperty([tokens[0]])){
            throw new Error("key not found")
        }
        
        return this.#data[tokens[0]] 

    }
}

