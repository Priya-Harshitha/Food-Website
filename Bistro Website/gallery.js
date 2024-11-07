var all=document.getElementById('all');
        var con=document.getElementById('Con');
        var asian=document.getElementById('asian');
        var italian=document.getElementById('italian');

var b1=document.getElementById('b1');
var b2=document.getElementById('b2');
var b3=document.getElementById('b3');
var b4=document.getElementById('b4');

        function gallery(para){
            if (para===1){
             all.style.display='flex';
             con.style.display='none';
             asian.style.display='none';
             italian.style.display='none';
           b1.style.backgroundColor=' rgb(99, 154, 17)';
           b1.style.color='white';
           b2.style.backgroundColor='white';
           b2.style.color='rgb(83, 131, 12)';
           b3.style.backgroundColor='white';
           b3.style.color='rgb(83, 131, 12)';
           b4.style.backgroundColor='white';
           b4.style.color='rgb(83, 131, 12)';
            
            }
         else if(para===2){
            all.style.display='none';
             con.style.display='flex';
             asian.style.display='none';
             italian.style.display='none';

            
           b1.style.backgroundColor='white';
           b1.style.color='rgb(83, 131, 12)';
           b2.style.backgroundColor='rgb(99, 154, 17)';
           b2.style.color='white';
           b3.style.backgroundColor='white';
           b3.style.color='rgb(83, 131, 12)';
           b4.style.backgroundColor='white';
           b4.style.color='rgb(83, 131, 12)';
             
         }
         else if(para===3){
            all.style.display='none';
             con.style.display='none';
             asian.style.display='flex';
             italian.style.display='none';
             
             b1.style.backgroundColor='white';
             b1.style.color='rgb(83, 131, 12)';
             b2.style.backgroundColor='white';
             b2.style.color='rgb(83, 131, 12)';
             b3.style.backgroundColor=' rgb(99, 154, 17)';
             b3.style.color='white';
             b4.style.backgroundColor='white';
             b4.style.color='rgb(83, 131, 12)';
            
         }
         else if(para===4){
            all.style.display='none';
             con.style.display='none';
             asian.style.display='none';
             italian.style.display='flex';

             b1.style.backgroundColor='white';
             b1.style.color='rgb(83, 131, 12)';
             b2.style.backgroundColor='white';
             b2.style.color='rgb(83, 131, 12)';
             b4.style.backgroundColor=' rgb(99, 154, 17)';
             b4.style.color='white';
             b3.style.backgroundColor='white';
             b3.style.color='rgb(83, 131, 12)';
             
         }
        }

    
        function toggleMenu(){
    const navMenu = document.getElementById('navlist');
    navMenu.style.display="block";
}
