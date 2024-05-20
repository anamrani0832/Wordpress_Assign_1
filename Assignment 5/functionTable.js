function table(num, till){
  for(let i=1; i<=till; i++){
    let result = num + "X" + i + "=" + num * i
    console.log(result)
  } 
}
table(2,20)