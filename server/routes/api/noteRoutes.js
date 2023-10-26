const router = require('express').Router();
const {
 deleteNote,
 postNote
} = require('../../controllers/noteController');


router.route('/').post(postNote)
router.route('/delete').post(deleteNote)




module.exports = router;
