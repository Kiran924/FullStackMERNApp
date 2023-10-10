if(process.env.NODE_ENV == 'production'){
    module.exports = require('./prod');
}else {
    module.exports = require('./dev');
}


/*module.exports = {
    googleClientID : '899934433266-9uveue40n48g1sfhhc8eec87s09f9smn.apps.googleusercontent.com',
    googleClientSecret : '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',
    mongoURI : 'mongodb+srv://Kiran924:Wrg2MPrFGdy8kGnn@cluster0.znuyhva.mongodb.net/emailydb?retryWrites=true&w=majority',
    cookieKey : 'jsdjckndcjnjsendcsaklm'
};*/