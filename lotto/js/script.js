var list = [];
var result =[];

for(var i=1;i<=45;i++){
    list.push(i);
}

for(var i=0;i<6;i++){
    var index = Math.floor(Math.random() * list.length);
    var num = list[index];

    list.splice(index, 1);
    result.push(num);
}
function compare(a, b){
    /* 비교함수 */
    if(a<b){ return -1; }
    if(a>b){ return 1; }
    return 0;

    /* 간단한 비교함수
    return a - b
    */
}
result.sort(compare);
/* 익명함수
 result.sort(function(a, b){
    return a - b;
 });
*/

for(var i=0;i<6;i++){
    document.write('<span class="ball">'+result[i]+'</span>');
}