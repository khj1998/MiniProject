<script>
   import { beforeUpdate, onMount,onDestroy } from 'svelte';
   import axios from 'axios';
   let jsondatad;
   onMount(async ()=>{
const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
jsondata = await res.json();

});

  
		// let jsondata = (async() => { return await fetch('https://swmteam64.herokuapp.com/v1/meeting').then(x => x.json())})
   
   
    const url = new URL(window.location.href)
    let month = url.searchParams.get('month');
    let day = url.searchParams.get('day');
    let jsondata={
    "meetings": [
        {
            "id": 1,
            "room": 1,
            "date": "2022-05-02",
            "purpose": "멘토특강",
            "start": "1899-12-31T00:32:08.000Z",
            "end": "1899-12-31T10:32:08.000Z",
            "mento": "mento1",
            "subject": "기획",
            "student": [
                "test1",
                "test2",
                "test3"
            ]
        },
        {
            "id": 2,
            "room": 6,
            "date": "2022-04-29",
            "purpose": "멘토특강",
            "start": "1899-12-31T10:32:08.000Z",
            "end": "1899-12-31T13:32:08.000Z",
            "mento": "mento12",
            "subject": "인프라",
            "student": [
                "test1",
                "test2"
            ]
        }
]
}
// async function f(){
//       let response=await fetch('https://swmteam64.herokuapp.com/v1/meeting'); 
//       jsondata = await response.json();
//       alert(jsondata);
// };
//f().then(alert(234));
let cns=0;
// while(jsondata.length==0 && cns<1000000){
//   cns+=1
//   continue;
// }

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
if(jsondata.length>0){
  for (const key in jsondata['meetings']){
    if(jsondata['meetings'][key]['date']==now){
        jsondata['meetings'][key]['start'] = jsondata['meetings'][key]['start'].substring(11,16)
        jsondata['meetings'][key]['end'] = jsondata['meetings'][key]['end'].substring(11,16)
      if(jsondata['meetings'][key]['room']==1){
        arrdata1[cnt[0]]=jsondata['meetings'][key];
        cnt[0]+=1
      }
      else if(jsondata['meetings'][key]['room']==2){
        arrdata2[cnt[1]]=jsondata['meetings'][key];
        cnt[1]+=1
      }
      else if(jsondata['meetings'][key]['room']==3){
        arrdata3[cnt[2]]=jsondata['meetings'][key];
        cnt[2]+=1
      }
      else if(jsondata['meetings'][key]['room']==4){
        arrdata4[cnt[3]]=jsondata['meetings'][key];
        cnt[3]+=1
      }
      else if(jsondata['meetings'][key]['room']==5){
        arrdata5[cnt[4]]=jsondata['meetings'][key];
        cnt[4]+=1
      }
      else if(jsondata['meetings'][key]['room']==6){
        arrdata6[cnt[5]]=jsondata['meetings'][key];
        cnt[5]+=1
      }
      else if(jsondata['meetings'][key]['room']==7){
        arrdata7[cnt[6]]=jsondata['meetings'][key];
        cnt[6]+=1
      }
      else if(jsondata['meetings'][key]['room']==8){
        arrdata8[cnt[7]]=jsondata['meetings'][key];
        cnt[7]+=1
      }
      else if(jsondata['meetings'][key]['room']==9){
        arrdata9[cnt[8]]=jsondata['meetings'][key];
        cnt[8]+=1
      }
      else if(jsondata['meetings'][key]['room']==10){
        arrdata10[cnt[9]]=jsondata['meetings'][key];
        cnt[9]+=1
      }
      else if(jsondata['meetings'][key]['room']==11){
        arrdata11[cnt[10]]=jsondata['meetings'][key];
        cnt[10]+=1
      }
      else if(jsondata['meetings'][key]['room']==12){
        arrdata12[cnt[11]]=jsondata['meetings'][key];
        cnt[11]+=1
      }
      else if(jsondata['meetings'][key]['room']==13){
        arrdata13[cnt[12]]=jsondata['meetings'][key];
        cnt[12]+=1
      }
     
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
alert(arrdata1);
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