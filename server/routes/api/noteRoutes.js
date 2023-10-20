const router = require('express').Router();
const {
 deleteNote,
 postNote
} = require('../../controllers/noteController');


router.route('/:userId').post(postNote)
router.route('/delete').post(deleteNote)




module.exports = router;
