
// const alartBox = ()=>{
//     const response =confirm ('are you sure you want to go with us ?')
    
    
// }

const alartBox = ()=>{
    const response =confirm ('are you sure you want to go with us ?')
    console.log(response)
    if (response == true){
        alert('please send money ')
    }else{
        alert('Its ok No problem')
    }
}

const nameOfstudent = ()=>{
    const name = prompt('whats your name ???')
    if(name){
        console.log(name)
    }
}