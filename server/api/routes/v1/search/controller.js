const {Reservation} = require('../../../../models');

const searchReservations = async(req,res,next)=>{
    const {body:{startDate, endDate, startTime, endTime}} = req;
    try {
        let emptyRoom = [];         // 빈 강의실을 담을 배열
        let reservedRoom = new Set();      // 예약된 강의실을 담을 set 배열
        
        const convertedStartTime = returnNumberValue(startTime);
        const convertedEndTime = returnNumberValue(endTime);

        const reservation = await Reservation.findAll()
        
        await reservation.forEach(async(e) => {

            const convertedReservationStartTime = returnNumberValue(e.dataValues.start.getHours() + ":" +e.dataValues.start.getMinutes());
            const convertedReservationEndTime = returnNumberValue(e.dataValues.end.getHours() + ":" +e.dataValues.end.getMinutes()); 
            
            if(
            Date.parse(e.dataValues.date) >= Date.parse(startDate) 
            && Date.parse(e.dataValues.date) <= Date.parse(endDate)
            && (convertedStartTime <= convertedReservationStartTime || convertedEndTime >= convertedReservationEndTime)  
            ) await reservedRoom.add(e.dataValues.room);
        })

        console.log(reservedRoom);
        await roomLists.forEach(e => {
            if(!reservedRoom.has(e)) emptyRoom.push(e);
        });
        console.log(emptyRoom);
        return res.json({emptyRoom});
    } catch (error) {
        console.error(error);
        next(error);
    }
}


function returnNumberValue(str){
    let stringToNumber = str.split(':');
    return parseInt(stringToNumber[0]) * 100 + parseInt(stringToNumber[1])
}
module.exports = {searchReservations};