class Manager{
    #callback

    constructor(){

    }

    addCallback(callback){
        this.#callback = callback;
    };

    add(array){
        this.#callback(array)
    }
}