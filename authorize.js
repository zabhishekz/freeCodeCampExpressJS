const auhtorize = (req,res,next) =>{
    console.log("auhtorize middleware");
    next();
}

module.exports = auhtorize