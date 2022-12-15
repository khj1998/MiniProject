<script>
   import { beforeUpdate, onMount,onDestroy } from 'svelte';
   import axios from 'axios';
  

  
		// let jsondata = (async() => { return await fetch('https://swmteam64.herokuapp.com/v1/meeting').then(x => x.json())})
   
   
    const url = new URL(window.location.href)
    let month = url.searchParams.get('month');
    let day = url.searchParams.get('day');
    let jsondata={"meetings":
    [
{
"id":4,
"room":"6층 6회의실",
"date":"2022-05-04",
"purpose":"멘토특강",
"start":"1899-12-31T19:00:00.000Z",
"end":"1899-12-31T22:00:00.000Z",
"mento":"mento12",
"subject":"인프라",
"student":[
"test1",
"test2"
]
},
{
"id":14,
"room":"7층 대강의장",
"date":"2022-05-28",
"purpose":"멘토특강",
"start":"1899-12-31T09:00:00.000Z",
"end":"1899-12-31T19:00:00.000Z",
"mento":"mento1",
"subject":"기획",
"student":[
"test1",
"test2",
"test3"
]
},
{
"id":24,
"room":"6층 7회의실",
"date":"2022-05-27",
"purpose":"멘토특강",
"start":"1899-12-31T19:00:00.000Z",
"end":"1899-12-31T21:00:00.000Z",
"mento":"mento1",
"subject":"인프라",
"student":[
"test1",
"test3"
]
},
{
"id":34,
"room":"7층 대강의장",
"date":"2022-05-26",
"purpose":"멘토특강",
"start":"1899-12-31T20:00:00.000Z",
"end":"1899-12-31T23:00:00.000Z",
"mento":"mento7",
"subject":"기획",
"student":[
"test1",
"test2",
"test3"
]
},
{
"id":44,
"room":"6층 10회의실",
"date":"2022-05-27",
"purpose":"자유멘토링",
"start":"1899-12-31T15:00:00.000Z",
"end":"1899-12-31T18:00:00.000Z",
"mento":"mento11",
"subject":"백엔드",
"student":[
"test1",
"test2",
"test3",
"test4"
]
},
{
"id":54,
"room":"7층 오픈미팅룸",
"date":"2022-05-02",
"purpose":"자유멘토링",
"start":"1899-12-31T18:00:00.000Z",
"end":"1899-12-31T21:00:00.000Z",
"mento":"mento1",
"subject":"기획",
"student":[
"test2",
"test3"
]
},
{
"id":64,
"room":"7층 미팅룸",
"date":"2022-05-28",
"purpose":"멘토특강",
"start":"1899-12-31T19:00:00.000Z",
"end":"1899-12-31T22:00:00.000Z",
"mento":"mento9",
"subject":"프론트엔드",
"student":[
"test1",
"test2"
]
},
{
"id":74,
"room":"6층 10회의실",
"date":"2022-05-09",
"purpose":"멘토특강",
"start":"1899-12-31T18:00:00.000Z",
"end":"1899-12-31T21:00:00.000Z",
"mento":"mento3",
"subject":"임베디드",
"student":[
"test1",
"test2",
"test3"
]
},
{
"id":84,
"room":"7층 12회의실",
"date":"2022-05-10",
"purpose":"멘토특강",
"start":"1899-12-31T19:00:00.000Z",
"end":"1899-12-31T22:00:00.000Z",
"mento":"mento3",
"subject":"기획",
"student":[
"test1",
"test3"
]
},
{
"id":94,
"room":"6층 7회의실",
"date":"2022-05-19",
"purpose":"자유멘토링",
"start":"1899-12-31T17:00:00.000Z",
"end":"1899-12-31T20:00:00.000Z",
"mento":"mento5",
"subject":"프론트엔드",
"student":[
"test2",
"test3"
]
},
{
"id":104,
"room":"6층 2회의실",
"date":"2022-05-08",
"purpose":"멘토특강",
"start":"1899-12-31T13:00:00.000Z",
"end":"1899-12-31T17:00:00.000Z",
"mento":"mento2",
"subject":"인프라",
"student":[
"test1",
"test2",
"test3"
]
},
{
"id":114,
"room":"7층 미팅룸",
"date":"2022-05-11",
"purpose":"자유멘토링",
"start":"1899-12-31T09:00:00.000Z",
"end":"1899-12-31T10:00:00.000Z",
"mento":"mento4",
"subject":"백엔드",
"student":[
"test3"
]
},
{
"id":1,
"room":"7층 12회의실",
"date":"2022-05-12",
"purpose":"멘토특강",
"start":"1899-12-31T18:00:00.000Z",
"end":"1899-12-31T21:00:00.000Z",
"mento":"강진범",
"subject":"주제 예시",
"student":[
"최민준",
"박유라",
"박유라",
"박유라"
]
},
{
"id":1,
"room":"6층 10회의실",
"date":"2022-05-13",
"purpose":"자유멘토링",
"start":"1899-12-31T19:00:00.000Z",
"end":"1899-12-31T22:00:00.000Z",
"mento":"강성재",
"subject":"주제 예시",
"student":[
"최민준",
"박유라",
"박유라",
"박유라"
]
},
{
"id":1,
"room":"7층 13회의실",
"date":"2022-05-29",
"purpose":"멘토특강",
"start":"1899-12-31T11:00:00.000Z",
"end":"1899-12-31T15:00:00.000Z",
"mento":"이광헌",
"subject":"프로젝트 협업하기",
"student":[
"박범근",
"엄호용",
"한강민",
"구본준"
]
},
{
"id":1,
"room":"6층 10회의실",
"date":"2022-05-28",
"purpose":"자유멘토링",
"start":"1899-12-31T14:00:00.000Z",
"end":"1899-12-31T17:00:00.000Z",
"mento":"강성재",
"subject":"주제 예시",
"student":[
"박정근",
"이수민",
"남윤건",
"이정훈/정예원/김건희"
]
},
{
"id":1,
"room":"6층 10회의실",
"date":"2022-05-27",
"purpose":"자유멘토링",
"start":"1899-12-31T18:00:00.000Z",
"end":"1899-12-31T21:00:00.000Z",
"mento":"김동현",
"subject":"주제 예시",
"student":[
]
},
{
"id":1,
"room":"6층 5회의실",
"date":"2022-05-26",
"purpose":"자유멘토링",
"start":"1899-12-31T19:00:00.000Z",
"end":"1899-12-31T22:00:00.000Z",
"mento":"황대민",
"subject":"주제 예시",
"student":[
"이준혁",
"이인환"
]
},
{
"id":1,
"room":"7층 13회의실",
"date":"2022-05-25",
"purpose":"자유멘토링",
"start":"1899-12-31T19:00:00.000Z",
"end":"1899-12-31T22:00:00.000Z",
"mento":"박수현",
"subject":"기획 멘토링",
"student":[
]
},
{
"id":1,
"room":"7층 13회의실",
"date":"2022-05-22",
"purpose":"자유멘토링",
"start":"1899-12-31T11:00:00.000Z",
"end":"1899-12-31T15:00:00.000Z",
"mento":"이광헌",
"subject":"기획 멘토링",
"student":[
"이동언",
"송영민",
"황주원",
"최승용"
]
},
{
"id":1,
"room":"7층 13회의실",
"date":"2022-05-22",
"purpose":"자유멘토링",
"start":"1899-12-31T11:00:00.000Z",
"end":"1899-12-31T15:00:00.000Z",
"mento":"이광헌",
"subject":"기획 멘토링",
"student":[
"이동언",
"송영민",
"황주원",
"최승용"
]
},
{
"id":1,
"room":"6층 10회의실",
"date":"2022-05-20",
"purpose":"자유멘토링",
"start":"1899-12-31T19:00:00.000Z",
"end":"1899-12-31T22:00:00.000Z",
"mento":"박주형",
"subject":"기획 멘토링",
"student":[
"조용재",
"박찬솔",
"백진수",
"장선규"
]
},
{
"id":1,
"room":"6층 6회의실",
"date":"2022-05-18",
"purpose":"자유멘토링",
"start":"1899-12-31T19:00:00.000Z",
"end":"1899-12-31T22:00:00.000Z",
"mento":"최광선",
"subject":"아이디어 구체화",
"student":[
"이형창",
"손민우",
"심준용",
"조용제"
]
},
{
"id":1,
"room":"7층 13회의실",
"date":"2022-05-16",
"purpose":"자유멘토링",
"start":"1899-12-31T19:00:00.000Z",
"end":"1899-12-31T22:00:00.000Z",
"mento":"장철웅",
"subject":"AWS 중급 특강",
"student":[
"천수환"
]
},
{
"id":1,
"room":"6층 8회의실",
"date":"2022-05-14",
"purpose":"자유멘토링",
"start":"1899-12-31T10:00:00.000Z",
"end":"1899-12-31T13:00:00.000Z",
"mento":"이하늘",
"subject":"기획 멘토링",
"student":[
"이창엽",
"이주원",
"김민준"
]
},
{
"id":1,
"room":"7층 12회의실",
"date":"2022-05-12",
"purpose":"자유멘토링",
"start":"1899-12-31T17:00:00.000Z",
"end":"1899-12-31T21:00:00.000Z",
"mento":"이한솔",
"subject":"2022 프론트엔드 트렌드",
"student":[
"전민규",
"오재석",
"박정근",
"백남주"
]
}
]
}

let cns=0;


let arrdata1=[]
let arrdata2=[]
let arrdata3=[]
let arrdata4=[]
let arrdata5=[]
let arrdata6=[]
let arrdata7=[]
let arrdata8=[]
let arrdata9=[]
let arrdata10=[]
let arrdata11=[]
let arrdata12=[]
let arrdata13=[]  
let cnt=[0,0,0,0,0,0,0,0,0,0,0,0,0]
let now ="2022-"+month+"-"+day
  for (const key in jsondata['meetings']){
    if(jsondata['meetings'][key]['date']==now){
      
        jsondata['meetings'][key]['start'] = jsondata['meetings'][key]['start'].substring(11,16)
        jsondata['meetings'][key]['end'] = jsondata['meetings'][key]['end'].substring(11,16)
      if(jsondata['meetings'][key]['room']=="6층 1회의실"){
        arrdata1[cnt[0]]=jsondata['meetings'][key];
        cnt[0]+=1
      }
      else if(jsondata['meetings'][key]['room']=="6층 2회의실"){
        arrdata2[cnt[1]]=jsondata['meetings'][key];
        cnt[1]+=1
      }
      else if(jsondata['meetings'][key]['room']=="6층 3회의실"){
        arrdata3[cnt[2]]=jsondata['meetings'][key];
        cnt[2]+=1
      }
      else if(jsondata['meetings'][key]['room']=="6층 4회의실"){
        arrdata4[cnt[3]]=jsondata['meetings'][key];
        cnt[3]+=1
      }
      else if(jsondata['meetings'][key]['room']=="6층 5회의실"){
        arrdata5[cnt[4]]=jsondata['meetings'][key];
        cnt[4]+=1
      }
      else if(jsondata['meetings'][key]['room']=="6층 6회의실"){
        arrdata6[cnt[5]]=jsondata['meetings'][key];
        cnt[5]+=1
      }
      else if(jsondata['meetings'][key]['room']=="6층 7회의실"){
        arrdata7[cnt[6]]=jsondata['meetings'][key];
        cnt[6]+=1
      }
      else if(jsondata['meetings'][key]['room']=="6층 8회의실"){
        arrdata8[cnt[7]]=jsondata['meetings'][key];
        cnt[7]+=1
      }
      else if(jsondata['meetings'][key]['room']=="6층 9회의실"){
        arrdata9[cnt[8]]=jsondata['meetings'][key];
        cnt[8]+=1
      }
      else if(jsondata['meetings'][key]['room']=="6층 10회의실"){
        arrdata10[cnt[9]]=jsondata['meetings'][key];
        cnt[9]+=1
      }
      else if(jsondata['meetings'][key]['room']=="6층 11회의실"){
        arrdata11[cnt[10]]=jsondata['meetings'][key];
        cnt[10]+=1
      }
      else if(jsondata['meetings'][key]['room']=="7층 12회의실"){
        arrdata12[cnt[11]]=jsondata['meetings'][key];
        cnt[11]+=1
      }
      else if(jsondata['meetings'][key]['room']=="7층 13회의실"){
        arrdata13[cnt[12]]=jsondata['meetings'][key];
        cnt[12]+=1
      }
     
    }
  }

arrdata1.sort(function(a,b){ return a.start-b.start; });
arrdata2.sort(function(a,b){ return a.start-b.start; });
arrdata3.sort(function(a,b){ return a.start-b.start; });
arrdata4.sort(function(a,b){ return a.start-b.start; });
arrdata5.sort(function(a,b){ return a.start-b.start; });
arrdata6.sort(function(a,b){ return a.start-b.start; });
arrdata7.sort(function(a,b){ return a.start-b.start; });
arrdata8.sort(function(a,b){ return a.start-b.start; });
arrdata9.sort(function(a,b){ return a.start-b.start; });
arrdata10.sort(function(a,b){ return a.start-b.start; });
arrdata11.sort(function(a,b){ return a.start-b.start; });
arrdata12.sort(function(a,b){ return a.start-b.start; });
arrdata13.sort(function(a,b){ return a.start-b.start; });

</script>
<link href="reservation.css" rel="stylesheet" type="text/css" />

<h1>{month}월 {day}일 예약 시스템 현황 </h1> 



<div style="display: flex" width="100%" height="750px">
  <div style="width: 45%">
    <img style="width: 100%" src="https://www.swmaestro.org/static/sw/images/img_facility2.png" alt="6층"/>
    <img style="width: 100%" src="https://www.swmaestro.org/static/sw/images/img_facility1.png" alt="7층"/>
  </div>
  <div>
    <h3>1번 룸</h3>
    <form action ="" method="post" id="room1">
    <table style="margin-bottom: 5px">
      <thead>
        <tr>
          <th width="50">NO</th>
          <th width="130">사용목적</th>
          <th width="80">시작시간</th>
          <th width="80">종료시간</th>
          <th width="80">멘토명</th>
          <th width="80">연수생1</th>
          <th width="80">연수생2</th>
          <th width="80">연수생3</th>
          <th width="80">연수생4</th>
          <th width="300">주제</th>
        </tr>
      </thead>
      <tbody>
        {#each arrdata1 as {id,purpose,start,end,mento,subject,student},i}
        <tr>
          <td width="50">{id}</td>
          <td width="110">{purpose}</td>
          <td width="70">{start}</td>
          <td width="70">{end}</td>
          <td width="70">{mento}</td>
          <td width="70">{student[0] ? student[0] : ''}</td>
          <td width="70">{student[1] ? student[1] : ''}</td>
          <td width="70">{student[2] ? student[2] : ''}</td>
          <td width="70">{student[3] ? student[3] : ''}</td>
          <td width="300">{subject}</td>	
          <td>
            <input type="button" value="예약취소" style="float: right" />
          </td>
        </tr>
        {/each}
        
        <tr>
          <td><input type = "text" name = "id" style="width:20px;"/></td>
          <td><input type = "text" name = "purpose" style="width:100px;"/></td>
          <td><input type = "text" name = "start" style="width:60px;" value="00:00형식"/></td>
          <td><input type = "text" name = "end" style="width:60px;" value="24:00형식"></td>
          <td><input type = "text" name = "mento" style="width:50px;"/></td>
          <td><input type = "text" name = "student1" style="width:50px;"/></td>
          <td><input type = "text" name = "student2" style="width:50px;"/></td>
          <td><input type = "text" name = "student3" style="width:50px;"/></td>
          <td><input type = "text" name = "student4" style="width:50px;"/></td>
          <td>
           <input type = "text" name = "subject" style="width:210px;"/>
         </td>
          <td><button type="submit" style="float: right">예약하기</button></td>
         
     
        </tr>
     
      </tbody>
    </table>
  </form>



    <h3>2번 룸</h3>
    <form action ="" method="post" id="room2">
    <table style="margin-bottom: 5px">
      <thead>
        <tr>
          <th width="50">NO</th>
          <th width="130">사용목적</th>
          <th width="80">시작시간</th>
          <th width="80">종료시간</th>
          <th width="80">멘토명</th>
          <th width="80">연수생1</th>
          <th width="80">연수생2</th>
          <th width="80">연수생3</th>
          <th width="80">연수생4</th>
          <th width="300">주제</th>
        </tr>
      </thead>
      <tbody>
        {#each arrdata2 as {id,purpose,start,end,mento,subject,student},i}
        <tr>
          <td width="50">{id}</td>
          <td width="110">{purpose}</td>
          <td width="70">{start}</td>
          <td width="70">{end}</td>
          <td width="70">{mento}</td>
          <td width="70">{student[0] ? student[0] : ''}</td>
          <td width="70">{student[1] ? student[1] : ''}</td>
          <td width="70">{student[2] ? student[2] : ''}</td>
          <td width="70">{student[3] ? student[3] : ''}</td>
          <td width="300">{subject}</td>	
          <td>
            <input type="button" value="예약취소" style="float: right" />
          </td>
        </tr>
        {/each}
        
        <tr>
          <td><input type = "text" name = "id" style="width:20px;"/></td>
          <td><input type = "text" name = "purpose" style="width:100px;"/></td>
          <td><input type = "text" name = "start" style="width:60px;" value="00:00형식"/></td>
          <td><input type = "text" name = "end" style="width:60px;" value="24:00형식"></td>
          <td><input type = "text" name = "mento" style="width:50px;"/></td>
          <td><input type = "text" name = "student1" style="width:50px;"/></td>
          <td><input type = "text" name = "student2" style="width:50px;"/></td>
          <td><input type = "text" name = "student3" style="width:50px;"/></td>
          <td><input type = "text" name = "student4" style="width:50px;"/></td>
          <td>
           <input type = "text" name = "subject" style="width:210px;"/>
         </td>
          <td><button type="submit" style="float: right">예약하기</button></td>
         
     
        </tr>
     
      </tbody>
    </table>
  </form>
    
  <h3>3번 룸</h3>
  <form action ="" method="post" id="room3">
    <table style="margin-bottom: 5px">
      <thead>
        <tr>
          <th width="50">NO</th>
          <th width="130">사용목적</th>
          <th width="80">시작시간</th>
          <th width="80">종료시간</th>
          <th width="80">멘토명</th>
          <th width="80">연수생1</th>
          <th width="80">연수생2</th>
          <th width="80">연수생3</th>
          <th width="80">연수생4</th>
          <th width="300">주제</th>
        </tr>
      </thead>
      <tbody>
        {#each arrdata3 as {id,purpose,start,end,mento,subject,student},i}
        <tr>
          <td width="50">{id}</td>
          <td width="110">{purpose}</td>
          <td width="70">{start}</td>
          <td width="70">{end}</td>
          <td width="70">{mento}</td>
          <td width="70">{student[0] ? student[0] : ''}</td>
          <td width="70">{student[1] ? student[1] : ''}</td>
          <td width="70">{student[2] ? student[2] : ''}</td>
          <td width="70">{student[3] ? student[3] : ''}</td>
          <td width="300">{subject}</td>	
          <td>
            <input type="button" value="예약취소" style="float: right" />
          </td>
        </tr>
        {/each}
        
        <tr>
          <td><input type = "text" name = "id" style="width:20px;"/></td>
          <td><input type = "text" name = "purpose" style="width:100px;"/></td>
          <td><input type = "text" name = "start" style="width:60px;" value="00:00형식"/></td>
          <td><input type = "text" name = "end" style="width:60px;" value="24:00형식"></td>
          <td><input type = "text" name = "mento" style="width:50px;"/></td>
          <td><input type = "text" name = "student1" style="width:50px;"/></td>
          <td><input type = "text" name = "student2" style="width:50px;"/></td>
          <td><input type = "text" name = "student3" style="width:50px;"/></td>
          <td><input type = "text" name = "student4" style="width:50px;"/></td>
          <td>
           <input type = "text" name = "subject" style="width:210px;"/>
         </td>
          <td><button type="submit" style="float: right">예약하기</button></td>
         
     
        </tr>
     
      </tbody>
    </table>
  </form>
  <h3>4번 룸</h3>
  <form action ="" method="post" id="room4">
    <table style="margin-bottom: 5px">
      <thead>
        <tr>
          <th width="50">NO</th>
          <th width="130">사용목적</th>
          <th width="80">시작시간</th>
          <th width="80">종료시간</th>
          <th width="80">멘토명</th>
          <th width="80">연수생1</th>
          <th width="80">연수생2</th>
          <th width="80">연수생3</th>
          <th width="80">연수생4</th>
          <th width="300">주제</th>
        </tr>
      </thead>
      <tbody>
        {#each arrdata4 as {id,purpose,start,end,mento,subject,student},i}
        <tr>
          <td width="50">{id}</td>
          <td width="110">{purpose}</td>
          <td width="70">{start}</td>
          <td width="70">{end}</td>
          <td width="70">{mento}</td>
          <td width="70">{student[0] ? student[0] : ''}</td>
          <td width="70">{student[1] ? student[1] : ''}</td>
          <td width="70">{student[2] ? student[2] : ''}</td>
          <td width="70">{student[3] ? student[3] : ''}</td>
          <td width="300">{subject}</td>	
          <td>
            <input type="button" value="예약취소" style="float: right" />
          </td>
        </tr>
        {/each}
        
        <tr>
          <td><input type = "text" name = "id" style="width:20px;"/></td>
          <td><input type = "text" name = "purpose" style="width:100px;"/></td>
          <td><input type = "text" name = "start" style="width:60px;" value="00:00형식"/></td>
          <td><input type = "text" name = "end" style="width:60px;" value="24:00형식"></td>
          <td><input type = "text" name = "mento" style="width:50px;"/></td>
          <td><input type = "text" name = "student1" style="width:50px;"/></td>
          <td><input type = "text" name = "student2" style="width:50px;"/></td>
          <td><input type = "text" name = "student3" style="width:50px;"/></td>
          <td><input type = "text" name = "student4" style="width:50px;"/></td>
          <td>
           <input type = "text" name = "subject" style="width:210px;"/>
         </td>
          <td><button type="submit" style="float: right">예약하기</button></td>
         
     
        </tr>
     
      </tbody>
    </table>
  </form>
  <h3>5번 룸</h3>
  <form action ="" method="post" id="room5">
    <table style="margin-bottom: 5px">
      <thead>
        <tr>
          <th width="50">NO</th>
          <th width="130">사용목적</th>
          <th width="80">시작시간</th>
          <th width="80">종료시간</th>
          <th width="80">멘토명</th>
          <th width="80">연수생1</th>
          <th width="80">연수생2</th>
          <th width="80">연수생3</th>
          <th width="80">연수생4</th>
          <th width="300">주제</th>
        </tr>
      </thead>
      <tbody>
        {#each arrdata5 as {id,purpose,start,end,mento,subject,student},i}
        <tr>
          <td width="50">{id}</td>
          <td width="110">{purpose}</td>
          <td width="70">{start}</td>
          <td width="70">{end}</td>
          <td width="70">{mento}</td>
          <td width="70">{student[0] ? student[0] : ''}</td>
          <td width="70">{student[1] ? student[1] : ''}</td>
          <td width="70">{student[2] ? student[2] : ''}</td>
          <td width="70">{student[3] ? student[3] : ''}</td>
          <td width="300">{subject}</td>	
          <td>
            <input type="button" value="예약취소" style="float: right" />
          </td>
        </tr>
        {/each}
        
        <tr>
          <td><input type = "text" name = "id" style="width:20px;"/></td>
          <td><input type = "text" name = "purpose" style="width:100px;"/></td>
          <td><input type = "text" name = "start" style="width:60px;" value="00:00형식"/></td>
          <td><input type = "text" name = "end" style="width:60px;" value="24:00형식"></td>
          <td><input type = "text" name = "mento" style="width:50px;"/></td>
          <td><input type = "text" name = "student1" style="width:50px;"/></td>
          <td><input type = "text" name = "student2" style="width:50px;"/></td>
          <td><input type = "text" name = "student3" style="width:50px;"/></td>
          <td><input type = "text" name = "student4" style="width:50px;"/></td>
          <td>
           <input type = "text" name = "subject" style="width:210px;"/>
         </td>
          <td><button type="submit" style="float: right">예약하기</button></td>
         
     
        </tr>
     
      </tbody>
    </table>
  </form>
  <h3>6번 룸</h3>
  <form action ="" method="post" id="room6">
    <table style="margin-bottom: 5px">
      <thead>
        <tr>
          <th width="50">NO</th>
          <th width="130">사용목적</th>
          <th width="80">시작시간</th>
          <th width="80">종료시간</th>
          <th width="80">멘토명</th>
          <th width="80">연수생1</th>
          <th width="80">연수생2</th>
          <th width="80">연수생3</th>
          <th width="80">연수생4</th>
          <th width="300">주제</th>
        </tr>
      </thead>
      <tbody>
        {#each arrdata6 as {id,purpose,start,end,mento,subject,student},i}
        <tr>
          <td width="50">{id}</td>
          <td width="110">{purpose}</td>
          <td width="70">{start}</td>
          <td width="70">{end}</td>
          <td width="70">{mento}</td>
          <td width="70">{student[0] ? student[0] : ''}</td>
          <td width="70">{student[1] ? student[1] : ''}</td>
          <td width="70">{student[2] ? student[2] : ''}</td>
          <td width="70">{student[3] ? student[3] : ''}</td>
          <td width="300">{subject}</td>	
          <td>
            <input type="button" value="예약취소" style="float: right" />
          </td>
        </tr>
        {/each}
        
        <tr>
          <td><input type = "text" name = "id" style="width:20px;"/></td>
          <td><input type = "text" name = "purpose" style="width:100px;"/></td>
          <td><input type = "text" name = "start" style="width:60px;" value="00:00형식"/></td>
          <td><input type = "text" name = "end" style="width:60px;" value="24:00형식"></td>
          <td><input type = "text" name = "mento" style="width:50px;"/></td>
          <td><input type = "text" name = "student1" style="width:50px;"/></td>
          <td><input type = "text" name = "student2" style="width:50px;"/></td>
          <td><input type = "text" name = "student3" style="width:50px;"/></td>
          <td><input type = "text" name = "student4" style="width:50px;"/></td>
          <td>
           <input type = "text" name = "subject" style="width:210px;"/>
         </td>
          <td><button type="submit" style="float: right">예약하기</button></td>
         
     
        </tr>
     
      </tbody>
    </table>
  </form>
  <h3>7번 룸</h3>
  <form action ="" method="post" id="room7">
    <table style="margin-bottom: 5px">
      <thead>
        <tr>
          <th width="50">NO</th>
          <th width="130">사용목적</th>
          <th width="80">시작시간</th>
          <th width="80">종료시간</th>
          <th width="80">멘토명</th>
          <th width="80">연수생1</th>
          <th width="80">연수생2</th>
          <th width="80">연수생3</th>
          <th width="80">연수생4</th>
          <th width="300">주제</th>
        </tr>
      </thead>
      <tbody>
        {#each arrdata7 as {id,purpose,start,end,mento,subject,student},i}
        <tr>
          <td width="50">{id}</td>
          <td width="110">{purpose}</td>
          <td width="70">{start}</td>
          <td width="70">{end}</td>
          <td width="70">{mento}</td>
          <td width="70">{student[0] ? student[0] : ''}</td>
          <td width="70">{student[1] ? student[1] : ''}</td>
          <td width="70">{student[2] ? student[2] : ''}</td>
          <td width="70">{student[3] ? student[3] : ''}</td>
          <td width="300">{subject}</td>	
          <td>
            <input type="button" value="예약취소" style="float: right" />
          </td>
        </tr>
        {/each}
        
        <tr>
          <td><input type = "text" name = "id" style="width:20px;"/></td>
          <td><input type = "text" name = "purpose" style="width:100px;"/></td>
          <td><input type = "text" name = "start" style="width:60px;" value="00:00형식"/></td>
          <td><input type = "text" name = "end" style="width:60px;" value="24:00형식"></td>
          <td><input type = "text" name = "mento" style="width:50px;"/></td>
          <td><input type = "text" name = "student1" style="width:50px;"/></td>
          <td><input type = "text" name = "student2" style="width:50px;"/></td>
          <td><input type = "text" name = "student3" style="width:50px;"/></td>
          <td><input type = "text" name = "student4" style="width:50px;"/></td>
          <td>
           <input type = "text" name = "subject" style="width:210px;"/>
         </td>
          <td><button type="submit" style="float: right">예약하기</button></td>
         
     
        </tr>
     
      </tbody>
    </table>
  </form>
  <h3>8번 룸</h3>
  <form action ="" method="post" id="room8">
    <table style="margin-bottom: 5px">
      <thead>
        <tr>
          <th width="50">NO</th>
          <th width="130">사용목적</th>
          <th width="80">시작시간</th>
          <th width="80">종료시간</th>
          <th width="80">멘토명</th>
          <th width="80">연수생1</th>
          <th width="80">연수생2</th>
          <th width="80">연수생3</th>
          <th width="80">연수생4</th>
          <th width="300">주제</th>
        </tr>
      </thead>
      <tbody>
        {#each arrdata8 as {id,purpose,start,end,mento,subject,student},i}
        <tr>
          <td width="50">{id}</td>
          <td width="110">{purpose}</td>
          <td width="70">{start}</td>
          <td width="70">{end}</td>
          <td width="70">{mento}</td>
          <td width="70">{student[0] ? student[0] : ''}</td>
          <td width="70">{student[1] ? student[1] : ''}</td>
          <td width="70">{student[2] ? student[2] : ''}</td>
          <td width="70">{student[3] ? student[3] : ''}</td>
          <td width="300">{subject}</td>	
          <td>
            <input type="button" value="예약취소" style="float: right" />
          </td>
        </tr>
        {/each}
        
        <tr>
          <td><input type = "text" name = "id" style="width:20px;"/></td>
          <td><input type = "text" name = "purpose" style="width:100px;"/></td>
          <td><input type = "text" name = "start" style="width:60px;" value="00:00형식"/></td>
          <td><input type = "text" name = "end" style="width:60px;" value="24:00형식"></td>
          <td><input type = "text" name = "mento" style="width:50px;"/></td>
          <td><input type = "text" name = "student1" style="width:50px;"/></td>
          <td><input type = "text" name = "student2" style="width:50px;"/></td>
          <td><input type = "text" name = "student3" style="width:50px;"/></td>
          <td><input type = "text" name = "student4" style="width:50px;"/></td>
          <td>
           <input type = "text" name = "subject" style="width:210px;"/>
         </td>
          <td><button type="submit" style="float: right">예약하기</button></td>
         
     
        </tr>
     
      </tbody>
    </table>
  </form>
  <h3>9번 룸</h3>
  <form action ="" method="post" id="room9">
    <table style="margin-bottom: 5px">
      <thead>
        <tr>
          <th width="50">NO</th>
          <th width="130">사용목적</th>
          <th width="80">시작시간</th>
          <th width="80">종료시간</th>
          <th width="80">멘토명</th>
          <th width="80">연수생1</th>
          <th width="80">연수생2</th>
          <th width="80">연수생3</th>
          <th width="80">연수생4</th>
          <th width="300">주제</th>
        </tr>
      </thead>
      <tbody>
        {#each arrdata9 as {id,purpose,start,end,mento,subject,student},i}
        <tr>
          <td width="50">{id}</td>
          <td width="110">{purpose}</td>
          <td width="70">{start}</td>
          <td width="70">{end}</td>
          <td width="70">{mento}</td>
          <td width="70">{student[0] ? student[0] : ''}</td>
          <td width="70">{student[1] ? student[1] : ''}</td>
          <td width="70">{student[2] ? student[2] : ''}</td>
          <td width="70">{student[3] ? student[3] : ''}</td>
          <td width="300">{subject}</td>	
          <td>
            <input type="button" value="예약취소" style="float: right" />
          </td>
        </tr>
        {/each}
        
        <tr>
          <td><input type = "text" name = "id" style="width:20px;"/></td>
          <td><input type = "text" name = "purpose" style="width:100px;"/></td>
          <td><input type = "text" name = "start" style="width:60px;" value="00:00형식"/></td>
          <td><input type = "text" name = "end" style="width:60px;" value="24:00형식"></td>
          <td><input type = "text" name = "mento" style="width:50px;"/></td>
          <td><input type = "text" name = "student1" style="width:50px;"/></td>
          <td><input type = "text" name = "student2" style="width:50px;"/></td>
          <td><input type = "text" name = "student3" style="width:50px;"/></td>
          <td><input type = "text" name = "student4" style="width:50px;"/></td>
          <td>
           <input type = "text" name = "subject" style="width:210px;"/>
         </td>
          <td><button type="submit" style="float: right">예약하기</button></td>
         
     
        </tr>
     
      </tbody>
    </table>
  </form>
  <h3>10번 룸</h3>
  <form action ="" method="post" id="room10">
    <table style="margin-bottom: 5px">
      <thead>
        <tr>
          <th width="50">NO</th>
          <th width="130">사용목적</th>
          <th width="80">시작시간</th>
          <th width="80">종료시간</th>
          <th width="80">멘토명</th>
          <th width="80">연수생1</th>
          <th width="80">연수생2</th>
          <th width="80">연수생3</th>
          <th width="80">연수생4</th>
          <th width="300">주제</th>
        </tr>
      </thead>
      <tbody>
        {#each arrdata10 as {id,purpose,start,end,mento,subject,student},i}
        <tr>
          <td width="50">{id}</td>
          <td width="110">{purpose}</td>
          <td width="70">{start}</td>
          <td width="70">{end}</td>
          <td width="70">{mento}</td>
          <td width="70">{student[0] ? student[0] : ''}</td>
          <td width="70">{student[1] ? student[1] : ''}</td>
          <td width="70">{student[2] ? student[2] : ''}</td>
          <td width="70">{student[3] ? student[3] : ''}</td>
          <td width="300">{subject}</td>	
          <td>
            <input type="button" value="예약취소" style="float: right" />
          </td>
        </tr>
        {/each}
        
        <tr>
          <td><input type = "text" name = "id" style="width:20px;"/></td>
          <td><input type = "text" name = "purpose" style="width:100px;"/></td>
          <td><input type = "text" name = "start" style="width:60px;" value="00:00형식"/></td>
          <td><input type = "text" name = "end" style="width:60px;" value="24:00형식"></td>
          <td><input type = "text" name = "mento" style="width:50px;"/></td>
          <td><input type = "text" name = "student1" style="width:50px;"/></td>
          <td><input type = "text" name = "student2" style="width:50px;"/></td>
          <td><input type = "text" name = "student3" style="width:50px;"/></td>
          <td><input type = "text" name = "student4" style="width:50px;"/></td>
          <td>
           <input type = "text" name = "subject" style="width:210px;"/>
         </td>
          <td><button type="submit" style="float: right">예약하기</button></td>
         
     
        </tr>
     
      </tbody>
    </table>
  </form>
  <h3>11번 룸</h3>
  <form action ="" method="post" id="room11">
    <table style="margin-bottom: 5px">
      <thead>
        <tr>
          <th width="50">NO</th>
          <th width="130">사용목적</th>
          <th width="80">시작시간</th>
          <th width="80">종료시간</th>
          <th width="80">멘토명</th>
          <th width="80">연수생1</th>
          <th width="80">연수생2</th>
          <th width="80">연수생3</th>
          <th width="80">연수생4</th>
          <th width="300">주제</th>
        </tr>
      </thead>
      <tbody>
        {#each arrdata11 as {id,purpose,start,end,mento,subject,student},i}
        <tr>
          <td width="50">{id}</td>
          <td width="110">{purpose}</td>
          <td width="70">{start}</td>
          <td width="70">{end}</td>
          <td width="70">{mento}</td>
          <td width="70">{student[0] ? student[0] : ''}</td>
          <td width="70">{student[1] ? student[1] : ''}</td>
          <td width="70">{student[2] ? student[2] : ''}</td>
          <td width="70">{student[3] ? student[3] : ''}</td>
          <td width="300">{subject}</td>	
          <td>
            <input type="button" value="예약취소" style="float: right" />
          </td>
        </tr>
        {/each}
        
        <tr>
          <td><input type = "text" name = "id" style="width:20px;"/></td>
          <td><input type = "text" name = "purpose" style="width:100px;"/></td>
          <td><input type = "text" name = "start" style="width:60px;" value="00:00형식"/></td>
          <td><input type = "text" name = "end" style="width:60px;" value="24:00형식"></td>
          <td><input type = "text" name = "mento" style="width:50px;"/></td>
          <td><input type = "text" name = "student1" style="width:50px;"/></td>
          <td><input type = "text" name = "student2" style="width:50px;"/></td>
          <td><input type = "text" name = "student3" style="width:50px;"/></td>
          <td><input type = "text" name = "student4" style="width:50px;"/></td>
          <td>
           <input type = "text" name = "subject" style="width:210px;"/>
         </td>
          <td><button type="submit" style="float: right">예약하기</button></td>
         
     
        </tr>
     
      </tbody>
    </table>
  </form>
  <h3>12번 룸</h3>
  <form action ="" method="post" id="room12">
    <table style="margin-bottom: 5px">
      <thead>
        <tr>
          <th width="50">NO</th>
          <th width="130">사용목적</th>
          <th width="80">시작시간</th>
          <th width="80">종료시간</th>
          <th width="80">멘토명</th>
          <th width="80">연수생1</th>
          <th width="80">연수생2</th>
          <th width="80">연수생3</th>
          <th width="80">연수생4</th>
          <th width="300">주제</th>
        </tr>
      </thead>
      <tbody>
        {#each arrdata12 as {id,purpose,start,end,mento,subject,student},i}
        <tr>
          <td width="50">{id}</td>
          <td width="110">{purpose}</td>
          <td width="70">{start}</td>
          <td width="70">{end}</td>
          <td width="70">{mento}</td>
          <td width="70">{student[0] ? student[0] : ''}</td>
          <td width="70">{student[1] ? student[1] : ''}</td>
          <td width="70">{student[2] ? student[2] : ''}</td>
          <td width="70">{student[3] ? student[3] : ''}</td>
          <td width="300">{subject}</td>	
          <td>
            <input type="button" value="예약취소" style="float: right" />
          </td>
        </tr>
        {/each}
        
        <tr>
          <td><input type = "text" name = "id" style="width:20px;"/></td>
          <td><input type = "text" name = "purpose" style="width:100px;"/></td>
          <td><input type = "text" name = "start" style="width:60px;" value="00:00형식"/></td>
          <td><input type = "text" name = "end" style="width:60px;" value="24:00형식"></td>
          <td><input type = "text" name = "mento" style="width:50px;"/></td>
          <td><input type = "text" name = "student1" style="width:50px;"/></td>
          <td><input type = "text" name = "student2" style="width:50px;"/></td>
          <td><input type = "text" name = "student3" style="width:50px;"/></td>
          <td><input type = "text" name = "student4" style="width:50px;"/></td>
          <td>
           <input type = "text" name = "subject" style="width:210px;"/>
         </td>
          <td><button type="submit" style="float: right">예약하기</button></td>
         
     
        </tr>
     
      </tbody>
    </table>
  </form>
  <h3>13번 룸</h3>
  <form action ="" method="post" id="room13">
    <table style="margin-bottom: 5px">
      <thead>
        <tr>
          <th width="50">NO</th>
          <th width="130">사용목적</th>
          <th width="80">시작시간</th>
          <th width="80">종료시간</th>
          <th width="80">멘토명</th>
          <th width="80">연수생1</th>
          <th width="80">연수생2</th>
          <th width="80">연수생3</th>
          <th width="80">연수생4</th>
          <th width="300">주제</th>
        </tr>
      </thead>
      <tbody>
        {#each arrdata13 as {id,purpose,start,end,mento,subject,student},i}
        <tr>
          <td width="50">{id}</td>
          <td width="110">{purpose}</td>
          <td width="70">{start}</td>
          <td width="70">{end}</td>
          <td width="70">{mento}</td>
          <td width="70">{student[0] ? student[0] : ''}</td>
          <td width="70">{student[1] ? student[1] : ''}</td>
          <td width="70">{student[2] ? student[2] : ''}</td>
          <td width="70">{student[3] ? student[3] : ''}</td>
          <td width="300">{subject}</td>	
          <td>
            <input type="button" value="예약취소" style="float: right" />
          </td>
        </tr>
        {/each}
        
        <tr>
          <td><input type = "text" name = "id" style="width:20px;"/></td>
          <td><input type = "text" name = "purpose" style="width:100px;"/></td>
          <td><input type = "text" name = "start" style="width:60px;" value="00:00형식"/></td>
          <td><input type = "text" name = "end" style="width:60px;" value="24:00형식"></td>
          <td><input type = "text" name = "mento" style="width:50px;"/></td>
          <td><input type = "text" name = "student1" style="width:50px;"/></td>
          <td><input type = "text" name = "student2" style="width:50px;"/></td>
          <td><input type = "text" name = "student3" style="width:50px;"/></td>
          <td><input type = "text" name = "student4" style="width:50px;"/></td>
          <td>
           <input type = "text" name = "subject" style="width:210px;"/>
         </td>
          <td><button type="submit" style="float: right">예약하기</button></td>
         
     
        </tr>
     
      </tbody>
    </table>
  </form>

   
  </div>
</div> 