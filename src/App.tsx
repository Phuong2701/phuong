import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Test1 from './demo1104/demo1104';
function App() {
  //   const [ketqua1,setKetqua1]=useState(0);
  //   const [ketqua2,setKetqua2]=useState(0);
  //   const [inputValue,setInputValue]=useState(0);
  //   function CC()
  //   {
  //     let luyThua:number=0;
  //     for(let i=1;i<=inputValue;i++)
  //     {
  //       luyThua=Math.pow(inputValue,i)
  //     }
  //     setKetqua1(luyThua);


  //     let sum:number=inputValue;
  //     let d:number;
  //     let i:number=1;
  //     let binary:number=0;
  //     while(sum>0){
  //        d = sum % 2;
  //        sum = Math.floor(sum / 2);
  //        i=i*10;

  //      }
  //     setKetqua2(binary);

  //   }




  //  return(
  //   <div>
  //     <h1>Bài tập React ngày 14-03</h1>
  //     Nhập vào số tự nhiên thứ nhất:&nbsp;&nbsp; <input type="number" value={inputValue}

  //     onChange={(e)=>{setInputValue(Number(e.currentTarget.value));
  //     }}
  //     /> 
  //     <button onClick={CC}>Xử lý</button>  <br/>


  //     Kết quả: <br/>
  //     <p style={{marginLeft:'20px'}}>a.{ketqua1}</p>
  //     <p style={{marginLeft:'20px'}}>b.{ketqua2}</p>
  //   </div>


  //  );
  return (
    <div>
      <Test1 />
    </div>
  )


}

export default App;
