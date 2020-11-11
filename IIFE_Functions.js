//Print odd numbers in an array 
(function() {
    var a = [1,2,3,4,5,6,7,8,9,10]
var Odd = a.filter(function(n){ return n%2 !== 0; })
console.log(Odd)
})()


//Convert all the strings to title caps in a string array
(function() {
    var s = 'hello world this is likhitha ryali'.split(' ')
    var res = []
    for(var n=0 ; n<s.length ; n++) {
    var letter = s[n].charAt(0).toUpperCase()
    res.push(letter + s[n].slice(1))
    } console.log(res.join(' '))
    })
    ()


//Sum of all numbers in an array 
(function() {
    var a = [2,4,6,8].map(Number)
    var s = 0
    for(var n=0 ; n<a.length ; n++)
    {
        s = s + a[n]
    }
    console.log(s)
    })()


//Return all the prime numbers in an array 
(function() {
    var a = [1,2,3,4,5,6,7,8,9,10].map(Number)
    var b = []
    for(var n=0 ; n<a.length ; n++)
    {
       if (a[n] !==1)
       {
          if((a[n] == 2 || a[n] == 3 || a[n] == 5 || a[n] == 7) || (a[n]%2 !== 0 && a[n]%3 !== 0 && a[n]%5 !== 0 && a[n]%7 !==0))
              {
                  b.push(a[n])
              }
       }
    }
    console.log(b)
    })()


//Return all the palindromes in an array
//IIFE
(function() {
    var a = [121,245,50,333].map(Number)
    var p = []
    for(var i = 0 ; a[i] > 0 ; i++)
    {
        var sum = 0
        var b = a[i]
        while(b > 0)
        {
            var c  = b % 10;
            sum = sum * 10 + c;
            b = parseInt(b / 10);
        }
        if(sum == a[i])
        {
            p.push(sum)
        }
    } console.log(p)
    })()


//Return median of two sorted arrays of same size
(function() {
    var a = [1,2,3,4,5]   
    var b = [6,7,8,9,10]
    var m1 = a[(a.length - 1)/2]
    var m2 = b[(b.length - 1)/2]
    var m = (m1 + m2)/2
    console.log(m)
   })()


//Remove duplicates from an array
(function() {
    var y = [1,2,3,4,3,5,3].map(Number);
    var l = y.length;
    var a = [];
    for(var i = 0 ; i<l ; i++)
    {
        for(var j = 0 ; j<l ; j++)
        if(i != j && y[j] == y[i])
            break;
            if(j == l)
            a.push(y[i]);
    }
    var text = '';
    for(i = 0 ; i<a.length ; i++)
    {
        text = text + a[i] + ' '
    }
    console.log(text.trim(' '))
    })()


//Rotate an array by k times and return the rotated array
(function() {
    var a = [1,2,3,4,5]
    var l = a.length
    for(var k = 1 ; k<=3 ; k++)
    {
        var first = a[0]
        for(var i = 0 ; i<l ; i++)
        {  
            a[i] = a[i+1]
        }
        a[l-1] = first
    } 
    console.log(a)
    }
    )()