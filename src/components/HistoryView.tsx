import React from 'react'
function addHistory(name:String){
    var sessionData = sessionStorage.data
    
    if(sessionData){
        console.log(sessionData)
        sessionData = JSON.parse(sessionData)
        sessionData.push({"name":name})
        sessionStorage.data = JSON.stringify(sessionData)
    }
    else{
        sessionStorage.data =  JSON.stringify([{"name":name}])
        console.log(sessionData.data)
    }
    
}


const data = JSON.parse(sessionStorage.data)
const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);



export const HistoryView : React.FC = () => {
  return(
    <div>
      {listItems}
    </div>
  );
};