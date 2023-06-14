import axios from 'axios';





 export  function getAllData() {
 
    axios.get(`http://${process.env.REACT_APP_HOST_NAME}${process.env.REACT_APP_GET_ALL_COLORS_PATH}`)
      .then(res => {
       
     
        alert(res.data.response[0]);
      
      })
      .catch(err => {
        console.log(err);
        
     
      });
  }

 

  


  







 





