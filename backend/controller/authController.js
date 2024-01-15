// const User = require('../model/user');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const passwordone = "dinesh123";
// //register
// exports.authRegister = async (req, res) => {
//     try {
//         const isexisting = await User.findOne({ email: req.body.email })
//         if (isexisting) {
//             throw new error("already such an email registered")
//         }
//         const hashpassword = await bcrypt.hash(req.body.password, 10)
//         const newuser = await User.create({ ...req.body, password: hashpassword })
//         const { password, ...others } = newuser._doc;
//         const token = jwt.sign({ id: newuser._id }, passwordone)
//         return res.status(201).json({ others, token })
//     } catch (error) {
//         return res.status(500).json(error.message)
//     }
// }

