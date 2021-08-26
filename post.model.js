const connection = require('./mysqlconnector.js')

class Post {
    static getAll() {
        return new Promise(function(resolve,reject){
            connection.query('select * from posts',function (err,result) {
                if(err) {
                    reject(new Error("error"));
                }

                resolve(result);
            })
        });

    }
}

module.exports = Post;