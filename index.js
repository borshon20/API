/* const user = {id:12,
    name:"Borshon chakma",
    job:"worker"}

 */

 /* const company = {
         name: 'backend for website',
         CEO: {
             name:"borshon",
             id:1,
    
         },
         web:{
             work:"backend developer",
             employee: 15,
             framework: 'react js',
             tech: {
                 first: 'html',
                 second: 'Css',
                 third: 'js',
                 
       }
         }
     } 
    
     const largeObject = JSON.stringify(company);
     const convert = JSON.parse(largeObject);   
     console.log(convert);   */
    
    
    function loadData(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')  
        .then(response => response.json())   
        .then(json => console.log(json))
    }
    
    function loadUser(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => displayUser(data))
    }
    
    function displayUser(users){
        const ul = document.getElementById('user');  
        for(const user of users){
            const li = document.createElement('li'); 
            li.innerText =user.name;   
            ul.appendChild(li)    
    
        }
    
    }
    
    
    
     
  