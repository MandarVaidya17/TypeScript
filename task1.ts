const arr=[1,2,3,4,5];
function square(a:number):number{
return a*a;
}

for(let i=0;i<=arr.length;i++){
    console.log(square(arr[i]));
}

const arr1=[14,54,64,32,67,88,22,19];

function checkage(ar:number[]){
    for(let j=0;j<ar.length;j++){
        if(ar[j]<18 || ar[j]>60){
            console.log(ar[j])
        }
    }
}
checkage(arr1)

const arr2=[1,24,4,6,7,8,9];

function minmax(ar:number[]){
    let min=ar[0],max=ar[0];
    for(let i=0;i<ar.length;i++){
        if(min>ar[i]){
            min=ar[i];
        }
        if(max<ar[i]){
            max=ar[i];
        }
    }
    console.log("min="+min+",max="+max);
}
minmax(arr2);
