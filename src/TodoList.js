import React, { useState } from 'react'

function TodoList() {
    const[activity, setActivity] = useState("");
    const[listData, setlistData] = useState([]);

    function addActivity(){
       
        setlistData((listData)=>{
            const updatedList = [...listData, activity]  // setlistData([...listData, activity])      // console.log(listData);#
            console.log(updatedList)
            setActivity('');
            return updatedList 
        })
    }

    function removeActivity(i){
        const updatedListData = listData.filter((elem, id)=> {
            return i!== id;
        })
        setlistData(updatedListData);
    }

    function removeAll(){
        setlistData([]);
    }

  return (
    <>
    <div className='container'> 
    <div className='header'> TODO LIST </div>
    <input type='text'placeholder='Add Activity' value = {activity} onChange={(e) => setActivity(e.target.value)} />
 
    <button onClick={addActivity}> Add </button>


    <p className='list-heading'> Here is your list: {")"}</p>
    {listData.length > 0 && listData.map((data, i)=> {   
        return(
            <div key={i} className='list-item'>  

                <div className='listData'> 
                    {data} 
                    </div> 

                <div className='btn-position'> 
                    <button onClick={()=> removeActivity(i)}> remove(-) </button>
                </div>
                
            </div>
        )
    })}
    {listData.length >= 1 && <button onClick={removeAll}> Remove All </button>}

    </div>
    </>
  )
}

export default TodoList
