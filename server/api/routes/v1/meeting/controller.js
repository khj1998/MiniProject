const {Reservation} = require('../../../../models');

const createMeeting = async(req,res,next)=>{
    try {
        req.body.room = roomLists[parseInt(req.body.room)]
        await Reservation.create(req.body);
        return res.json('ok');    
    } catch (error) {
        console.error(error);
        next(error);
    }
}

const getAllMeetings = async(req,res,next)=>{
    try {
        const meetings = await Reservation.findAll(); // 모든 미팅들 조회합니다
        meetings.forEach((e) => {        // String으로된 학생들 목록을 Array 타입으로 파싱합니다
            const parsedStudent = e.dataValues.student.split('&');
            delete e.dataValues.student;
            e.dataValues.student = parsedStudent;
        })
        return res.json({meetings});
    } catch (error) {
        console.error(error);
        next(error);
    }
}
    
module.exports = {getAllMeetings, createMeeting};