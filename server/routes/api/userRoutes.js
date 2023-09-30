const router = require('express').Router();
const {
  postUser,
  authCheck,
  loginUser,
} = require('../../controllers/userController');


router.route('/').post(postUser)
router.route('/login').post(loginUser)
router.route('/auth').get(authCheck)



module.exports = router;
