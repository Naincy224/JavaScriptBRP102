//program to check whether two strings are anagram or not

function checkStringsAnagram(str1, str2) {
    let length1 = str1.length;
    let length2 = str2.length;
    if(length1 !== length2){
       console.log('not an anagram');
       return
    }
    let string1 = str1.split('').sort().join('').toLowerCase();
    let string2 = str2.split('').sort().join('').toLowerCase();
    if(string1 === string2){
       console.log("given strings are anagram");
    } else { 
       console.log("given strings are not an anagram");
    }
 }
 checkStringsAnagram("aman","nama");
