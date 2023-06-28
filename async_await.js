function hello(){ 
    return new Promise (resolve => {
    setTimeout(() =>{
    resolve ('Hello World');
    },2000);
    });
    }
    const msg = async function(){
    const msg =await hello();
    console.log('Message:',msg);
    } 
    
    msg();
   
    