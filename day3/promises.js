 const myPromise = new Promise((resolve,reject)=>{
    let age = 16;
    if(age >= 18){
        resolve("You are eligible to vote");
    }
    else{
        reject("You are not eligible to vote");
    }
})

console.log(myPromise);

// myPromise
//      .then((msg) => {
//          console.log(msg);
//      })
//      .catch((error) => {
//          console.log(error);
//      });

const resolvePromise = async ()=>{
    try{
        const msg = await myPromise;
        console.log(msg);
    }
    catch(error){
        console.log(error);
    }
}

resolvePromise();
