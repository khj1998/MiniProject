const {Router} = require('express')
const controller = require('./controller')
const router = Router();

router.get('/', controller.getAllMeetings);
router.post('/', controller.createMeeting)

module.exports = router;