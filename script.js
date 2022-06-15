window.onload = function() 
{
const testinis = [3,5,2,1];
console.log(testinis);
let sandauga = masyvoSandauga(testinis);
console.log(sandauga);


}
function masyvoSandauga(testinis){
    for (let i = 0; i < testinis.length; i++) {
       
        sandauga =  i * testinis.length ;
        
        
    }
    return sandauga
}