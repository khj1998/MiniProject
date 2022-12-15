const express = require('express');
const router = express.Router();
const {readdirSync} = require('fs');
const {join} = require('path');

// 파일 이름으로 자동으로 주소를 만들어주는 코드입니다
readdirSync(join(__dirname))
    .filter((file)=>{if(file.search(/\.js/)==-1) return true})
    .forEach((file)=>{
        const route = require(join(__dirname, file));
        router.use(`/${file}`, route);
    });

const roomLists = [     // 전체 강의실 목록입니다, 전역 변수처럼 사용할 예정입니다
    "7층 대강의장", "7층 대강의장", "7층 오픈미팅룸","7층 오픈미팅룸",
    "6층 6회의실",  "6층 1회의실",  "7층 12회의실", "7층 13회의실",
    "6층 9회의실",  "6층 10회의실", "7층 미팅룸",   "6층 5회의실",
    "6층 2회의실",  "6층 8회의실",  "7층 12회의실", "6층 2회의실",
    "6층 2회의실",  "6층 4회의실",  "7층 미팅룸",   "6층 7회의실",
    "6층 7회의실"
]

global.roomLists = roomLists;

module.exports = {router};