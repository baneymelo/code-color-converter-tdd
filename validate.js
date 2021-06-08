const validate = {}

validate.length = code => {
    let flag = true
    if(Array.isArray(code)){
        code.length !== 3 ? flag = false : flag = true
    }else if(typeof code === "string"){
        code.length !== 6 ? flag = false : flag = true
    }
    return flag;
}

validate.format = code => {
    let flag = true
    if(Array.isArray(code)){
        code.forEach(e => {
            if(e < 0 || e > 255 ) flag = false;
        })
        return flag
    }else if(typeof code === "string"){
        code.split('').forEach(e => {
            if(isNaN(parseInt(e,16))) flag = false;
        })
        return flag
    }
}

module.exports = validate;