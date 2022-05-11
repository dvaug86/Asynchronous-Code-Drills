/*
function myMessage(message){
    console.log(message)
}

myMessage('I hope this is what I\'m supposed to be doing');

setTimeout(()=>{
    myMessage('Hopefully this is also right')
},2000);

function getWords(words){
    console.log(words)
};

setTimeout(()=>{
    getWords('timer check:')
},0);
setTimeout(()=>{
    getWords('Three')
},3000);
setTimeout(()=>{
    getWords('Two')
},2000);
setTimeout(()=>{
    getWords('One')
},1000);


console.log('Part 2 Callbacks and Recursion')
//callbacks and recursion


const countDown = (num, callback) =>{
    
    setTimeout(() =>{
    if(num > 0 ){
        console.log(num);
        countDown(num - 1, callback)
    }else{
        callback();
    }
}, 1000);
};

const Done = ()=>{
    console.log(' Job is done');
}
countDown(5, Done);
*/

console.log('Part 3 Promises, Promises')

var lunchtime = false;

const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
      if (lunchtime == true){
          let lunch ={
               food: 'BBQ', 
               drink: 'lemonade'
      };
      resolve(lunch);
    } else{
        let err = new Error ('not lunch time');
        reject(err);
    }
    });
}

  orderMeSomeFood()
    .then((lunch)=>{
        console.log(lunch);
    }).catch((err)=>{
        console.log(err);
    });