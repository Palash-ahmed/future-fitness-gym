const addToDataBase=id=>{

    localStorage.setItem('id',id);
}


const storedList=()=>{
    let savedList={};
    const storedList=localStorage.getItem('id');
    if(storedList){
        savedList=storedList;
    }
    return savedList;
   
}


export {
    addToDataBase, storedList
}