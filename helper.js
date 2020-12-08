const debounce=(func,delay)=>{
    let id;
    return(...args)=>{
        if(id){
            clearTimeout(id);
        }
        id=setTimeout(() => {
            func.apply(null,args);
        },delay);
    };
};