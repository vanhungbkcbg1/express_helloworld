module.exports.index = (req, res) => {
    res.send('index');
};

module.exports.findAll = (req, res) => {
    const Post = require('./post.model');
    Post.getAll().then(result => {
        res.send(result);
    }).catch(err => {
        res.send('error');
    })

}