const string =['a','b','c','d']
// 4*4 = 16 bytes of storage 

//push
string.push('e') // time complexity O(1)
console.log(string)

//pop
string.pop() // time complexity O(1)
console.log(string)

//unshift
string.unshift('j') // time complexity O(n)
console.log(string)

//splice
string.splice(2,0,"Jack") // time complexity O(n)
console.log(string)