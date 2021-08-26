const DemoController = require("./post.controller");
module.exports=app=>{

    app.get('/',DemoController.index);
    app.get('/query',DemoController.findAll);
};