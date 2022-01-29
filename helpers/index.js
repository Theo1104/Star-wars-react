export const random = () =>{
    const number = 0
    if(number === 17){
        return number = 18
    }else{
        return number + Math.floor(Math.random() * 83) + 1
    } 
}

export const deleteSpace = (name = "") =>{
    return name.replace(/ /g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''); 
}