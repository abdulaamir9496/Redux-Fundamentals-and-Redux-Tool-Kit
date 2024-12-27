//TOPIC1: Coping with Objects and how it works.

// var obj = {
//     name: 'Aamir',
//     age: 28
// }

// var obj2 = obj;

// console.log(obj);
// console.log(obj2);

// //TOPIC2: Here obj2 is reference type. Don't do real copy it does reference copy
// obj2.name = 'Muhammad';  //obj2 is not a real thing. this is the problem with objects

// console.log(obj);
// console.log(obj2);  //It's just pointing to obj

//TOPIC3: Shallow copy vs Deep copy
//Here we will learn about how we make real copy.

// var obj1 = {
//     name: 'Aamir',
//     age: 28,
//     address: {
//         city: 'Hyderabad',
//         country: 'Bharat'
//     } 
// }

// console.log(obj1)

// var obj2 = obj1;
// console.log(obj2);

//copying using spread operator{...obj}. Now here obj3 is the actual copy of the object {obj}. It's not pointing but it's a real copy.
// var obj3 = {...obj1} 
// console.log(obj3);

// obj3.name = 'Muhammad';
// console.log(obj1);  //name: Aamir
// console.log(obj3);  //name: Muhammad

//TOPIC4:  There is one problem with this function while copying using spread operators.
// This issue we will face when we do nested objects. Lets see how?:
//What is nested objects ?
var obj = {
    name: 'Aamir',
    age: 28,
    social: {
        facebook: {
            ac1: 'somefacebook1@gmail.com',
            ac2: 'somefacebook2@gmail.com'
        },
        twitter: {
            free: {
                ac1: 'somefreetwitter@gmail.com'
            },
            paid: {
                ac1: 'somepaidtwitter@gmail.com'
            }
        }
    }
}

// console.log(obj);

//Lets copy the above obj and see is it really copied everything ?
// var obj1 = {...obj};
// console.log(obj);
// console.log(obj1);

// obj1.social.facebook.ac1 = 'changed@gmail.com'

// console.log(obj.social.facebook.ac1);
// console.log(obj1.social.facebook.ac1);

//This is a problem when I change obj1 it's changing for obj also. 
//This is the problem with spread operator in nested Objects & this is called shallow copy.

//TOPIC: Shallow Copy:
// When we copy any object with Object.assign or spread operator, 
//it only copies the first level/ top level props of the object.
//Instead of copying any other level of props/ nested objects it again starts referring to the original object.
//That is why we got same answer for shallow copy in above examples.

//TOPIC: Deep Copy (Exact copy of the object)
//How to do Deep Copy ?
// There are two ways to do Deep copy in this example without logic and with logic.

//Firstly we will see without logic : In interview it won't work.
//We can use JSON.parse(JSON.stringify(obj)) to do Deep copy of the object.
//This is the only way to do Deep copy of the object without logic.

// var a = JSON.stringify(obj);  //Now we have stringified object
// console.log("Stringified Object: ", a);

// var b = JSON.parse(a);  //Now we have parsed object
// console.log("Parsed Object: ", b);

// var a = JSON.parse(JSON.stringify(obj));   //Now we have Stringified + Parsed Object
// console.log("Stringified + Parsed Object: ", a);

// var obj1 = JSON.parse(JSON.stringify(obj));  //Actual Deep copy of an object without logic, It did not referenced to the original object.

// obj1.social.facebook.ac1 = 'Changed@gmail.com'

// console.log(obj.social.facebook.ac1);
// console.log(obj1.social.facebook.ac1);


//Secondly we will see with logic: In interview it will work.
//We can use recursion to do Deep copy of the object.

//Example: 1
// function makeDeepCopy() {
//     if(typeof obj === 'object'){

//     }
// }

// makeDeepCopy(null);  //It will work as null is also an object. We don't want like this.

//Example: 2 continuation of the following example 1
// function makeDeepCopy() {
//     if(typeof obj !== 'object' || obj === null){   //Either we get 'Array' or 'Object'
//         return obj;
//     }
//     var copiedVal = Array.isArray(obj) ? [] : {};  
//     //From the below console.log whatever values we give either Array or object that will be stored here in copiedVal.
// }
// console.log(makeDeepCopy({name: 'Aamir', age: 28}));  //It will return the object.
// console.log(makeDeepCopy([1,2,3,4])); //It will return the Array.

// Example: 3 continuation of the following examples 1 & 2
function makeDeepCopy(obj) {
    if(typeof obj !== 'object' || obj === null) {  //Either we get 'Array' or 'Object' 
        return obj;
    }

    //From the below lines of code here what it does it 'Deep Copy'
    var copiedVal = Array.isArray(obj) ? [] : {};    //Here we are checking whether the object is Array or Object.
    var keys = Object.keys(obj);    //Here we are getting the keys(props{name, age} or indexes[0,1,2,3]) of the object.
    for(i = 0; i < keys.length; i++) {    //Here we are iterating the keys of the object.
        copiedVal[keys[i]] = makeDeepCopy(obj[keys[i]]);    //copiedVal : keys = makeDeepCopy: values
    }
    return copiedVal;
}

var copy = makeDeepCopy(obj);

copy.social.facebook.ac1 = 'ChangedUsingDeepCopy';
console.log(copy.social.facebook.ac1);    //It should change the copied object.
console.log(obj.social.facebook.ac1);    //It should not change the original object. 


// function obj() {
//     if(typeof obj !== 'object' || obj === null)
//         return obj;

//     let copiedVal = Array.isArray(obj) ? [] : {};
//     let keys = Object.keys(obj);

//     for(let i = 0; i < keys.length; i++) {
//         copiedVal[keys[i]] = obj[keys[i]];
//     }

//     return copiedVal;
// }