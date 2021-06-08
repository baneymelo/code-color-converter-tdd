class Converter {
    constructor(code){
        this.code = code;
    }
    toHex(){
        return this.code.map(e => {
            const temp = e.toString(16)
            return temp.length === 1 ? '0' + temp : temp    
        }).join('')
    }
    toRgb(){
        const red   = parseInt(this.code.substring(0, 2), 16);
        const green = parseInt(this.code.substring(2, 4), 16);
        const blue  = parseInt(this.code.substring(4, 6), 16);

        return [red,green,blue]
    }
}


module.exports = Converter;