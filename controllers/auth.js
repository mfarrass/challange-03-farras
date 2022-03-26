module.exports = {
    login: (req,res) => res.render('auth/login'),
    register: (req,res) => res.render('auth/register'),
    post: {
        login: (req,res) => res.render('auth/login'),
        register: (req,res) => res.render('auth/register'),
        }