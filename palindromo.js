let data = new Date();
let dia = String(data.getDate());
let mes = String(data.getMonth() + 1);
let ano = String(data.getFullYear());
let dt = String(0+dia+0+mes+ano)
console.log(dt)


function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse(dt))
let td = reverse(dt)
for (let i=0; i>dt; i++){
    if (i == reverse(i)){break;}
    console.log(i)
} 
