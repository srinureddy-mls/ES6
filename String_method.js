let str = "GeeksforGeeks";
  
console.log(str.startsWith("Geeks"));
  
// Here specified position is 5, that means
// searching will start from 'f' whose index
// in string str is 5
console.log(str.startsWith("for", 5));
  
console.log(str.startsWith("geeks")); 

//Example2:

let stri = "GeeksforGeeks";
  
console.log(stri.endsWith("Geeks"));
  
// Here specified length is 8, that means
// length of str will be considered as 8
// and rest will be omitted
console.log(stri.endsWith("for", 8));
  
console.log(stri.endsWith("geeks"));
