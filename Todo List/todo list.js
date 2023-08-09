 let button = document.getElementById('push')
 let input = document.getElementById("input").value
 let task = document.getElementById('task')

  button.addEventListener('click', PushingData )
     function PushingData(){
    if(input.length ==0){
        alert('please Enter a Task')
    }
    else{
        // alert('not allowes')
        document.querySelector('#task').innerHTML += 
        ` <div class = 'task'>
        <span id = "taskname">
        ${document.querySelector('#newtask input').value} </span>
        <button class = "delete">
         <i class="far fa-trash-all"></i>
         </button>
        </div> 
       `
    }
  }
 

    
 