window.onload = function() 
{
const testinis = [3,5,2,1];
console.log(testinis);
let sandauga = masyvoSandauga(testinis);
console.log(sandauga);


}
function masyvoSandauga(testinis){
    let sandauga = 1;
    for (let i = 0; i < testinis.length; i++) {
      
        sandauga = sandauga * testinis[i];
        
          
    }
    return sandauga;
}