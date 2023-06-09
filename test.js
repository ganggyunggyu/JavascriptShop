const 평균계산기 = (arr, num) => {
    var total = 0;
    var result = 0;
    for(let i=0; i<arr.length; i++){
        total = total + arr[i]
    }
    result = total / arr.length - num
    if(result > 0){
        console.log('굿')
    }else{
        console.log('재수 고고')
    }
}

평균계산기([70,70,70,70],80)