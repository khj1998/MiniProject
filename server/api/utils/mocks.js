const {Reservation} = require('../../models')

const lists = [     // 예시 mock 데이터 입니다
    {room:"7층 대강의장", date: new Date(2022,3,28), purpose : "멘토특강", start: new Date(0,0,0,9,0), end: new Date(0,0,0,19,0), mento : "mento1" ,student:"test1&test2&test3", subject: "기획"},
    {room:"6층 6회의실", date:new Date(2022,3,29), purpose : "멘토특강",start:new Date(0,0,0,19,0), end: new Date(0,0,0,22,0), mento : "mento12" ,student:"test1&test2", subject: "인프라"},
    {room:"6층 10회의실", date:new Date(2022,3,27), purpose : "자유멘토링",start:new Date(0,0,0,15,0), end: new Date(0,0,0,18,0), mento : "mento11" ,student:"test1&test2&test3&test4", subject: "백엔드"},
    {room:"7층 미팅룸", date:new Date(2022,3,28), purpose : "멘토특강", start:new Date(0,0,0,19,0), end: new Date(0,0,0,22,0), mento : "mento9" ,student:"test1&test2", subject: "프론트엔드"},
    {room:"6층 7회의실", date:new Date(2022,3,27), purpose : "멘토특강", start:new Date(0,0,0,19,0), end: new Date(0,0,0,21,0), mento : "mento1" ,student:"test1&test3", subject: "인프라"},
    {room:"7층 대강의장", date:new Date(2022,3,26), purpose : "멘토특강", start:new Date(0,0,0,20,0), end: new Date(0,0,0,23,0), mento : "mento7" ,student:"test1&test2&test3", subject: "기획"},
    {room:"7층 오픈미팅룸", date:new Date(2022,3,28), purpose : "자유멘토링", start:new Date(0,0,0,18,0), end: new Date(0,0,0,21,0), mento : "mento1" ,student:"test2&test3", subject: "기획"},
    {room:"6층 10회의실", date:new Date(2022,3,29), purpose : "멘토특강", start:new Date(0,0,0,18,0), end: new Date(0,0,0,21,0), mento : "mento3" ,student: "test1&test2&test3", subject: "임베디드"},
    {room:"7층 12회의실", date:new Date(2022,3,30), purpose : "멘토특강", start:new Date(0,0,0,19,0), end: new Date(0,0,0,22,0), mento : "mento3" ,student: "test1&test3", subject: "기획"},
    {room:"6층 7회의실", date:new Date(2022,3,29), purpose : "자유멘토링", start:new Date(0,0,0,17,0), end: new Date(0,0,0,20,0), mento : "mento5" ,student:"test2&test3", subject: "프론트엔드"},
    {room:"6층 2회의실", date:new Date(2022,3,28), purpose : "멘토특강", start:new Date(0,0,0,13,0), end: new Date(0,0,0,17,0), mento : "mento2" ,student:"test1&test2&test3", subject: "인프라"},
    {room:"7층 미팅룸", date:new Date(2022,3,28), purpose : "자유멘토링", start:new Date(0,0,0,9,0), end: new Date(0,0,0,10,0), mento : "mento4" ,student:"test3", subject: "백엔드"},
]

const addMocks = (async() => {
    const {doc, count} = await Reservation.findAndCountAll();
    if(count == 0)  lists.forEach(async(e) => { await Reservation.create(e)})
})

module.exports = addMocks;