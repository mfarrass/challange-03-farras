

module.exports = {
    login: (req,res) => res.render('auth/login'),
    register: (req,res) => res.render('auth/register'),
    post: {
        login: (req,res) => res.send('/partials'),
        register: (req,res) => res.send('/partials'),
        //     try {
        //         users.push({
        //             id: Date.now(). toString(),
        //             username: req.body.username,
        //             password: req.body.password
        //         })
        //         res.redirect('auth/login')
        //     } catch (error) {
        //         res.redirect('auth/register')
        //     }

        //     console.log(users);
            
        //     }
        // }
    }
}