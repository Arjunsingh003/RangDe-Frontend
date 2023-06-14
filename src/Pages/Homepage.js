import React from "react";
import  "../Theme/style.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DataTable from "../Components/Datatable/DataTable";
import  {useEffect} from "react";
import axios from 'axios'
import dressData from "./DressData";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Button from '@mui/material/Button';
import  { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";






function Homepage () {
  // const myDressData = dressData;

  const [selectedCategory, setSelectedCategory] = useState("");
const [randomOutfit, setRandomOutfit] = useState("");
const [buttonClicked, setButtonClicked] = useState(false);
const {getAccessTokenSilently} = useAuth0();




 

  const [colorData, setColorData] = useState([]);
  const [colorOfTheDay, setColorOfTheDay] = useState([]);
  const [colorVisibility, setColorVisibility] = useState();

  
  


  // get(`http://${process.env.REACT_APP_HOST_NAME}${process.env.REACT_APP_GET_ALL_COLORS_PATH}`)

  // useEffect(() => {
  //   async function callProtectedApi() {
  //     try {
  //       const token = await getAccessTokenSilently();
  //       const response = await axios.get(
  //         "https://backend-cap.onrender.com/colors",
  //         {
  //           headers: {
  //             authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  
  //       setColorData(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  
  //   callProtectedApi();
  // }, [getAccessTokenSilently]);

  useEffect(() => {
    const callProtectedApi = async () => {
      try {
        const token = await getAccessTokenSilently();
        console.log(token);
        const response = await axios.get(
          `https://backend-cap.onrender.com/colors`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setColorData(response.data.response);
       
      } catch (error) {
        console.log(error.message);
      }
    };

    callProtectedApi();
  }, []);
  
  
  
  
       
       
  
  
  

  
  
  
  // useEffect(() => {
  //   axios.get(`https://backend-cap.onrender.com/colors`)
  //   .then(res => {
      
  //      setColorData(res.data.response);
    
  //   })
  //   .catch(err => {
  //     console.log(err)
   
  //   });
  // },[]);


  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  

  const [mood, setMood] = React.useState('');

  const handleChange = (event) => {
    setMood(event.target.value);
  };
  const [season, setSeason] = React.useState('');

  const eventListener = (event) => {
    setSeason(event.target.value);
  };

  const [occasion, setOccasion] = React.useState('');

  const eventoccasion = (event) => {
    setOccasion(event.target.value);
  };


   

  
// my new code starts here
  const handleRandomColor = () => {
    let found = false;
    for(let i = 0; i<colorData.length; i++){
      if(colorData[i].Mood===mood && colorData[i].Season===season && colorData[i].Occasion===occasion)
       {
    const randomIndex = Math.floor(Math.random() * colorData[i].colors.length);
    const randomColor = colorData[i].colors[randomIndex];
    
    setColorOfTheDay(randomColor);
     found = true;
        break;
      }
  }
  if (found === false) {         
    setColorOfTheDay("#000000");
    setColorVisibility("visible"); 
  }
}
// console.log(myDressData);

// works fine for Occasion work

// const handleButtonClick = () => {
//   setButtonClicked(true);
//   // Filter the dressData based on the selected occasion
//   const filteredData = dressData.filter(
//     (dress) => dress[occasion] === true && dress.Work === true
//   );

//   // Generate a random index within the range of the filteredData array
//   const randomIndex = Math.floor(Math.random() * filteredData.length);

//   // Get the outfit URLs based on the random index
//   const selectedOutfit = filteredData[randomIndex];

//   // Set the selected outfit URLs in the state
//   setRandomOutfit(selectedOutfit);
// };


const handleButtonClick = () => {
  setButtonClicked(true);

  // Filter the dressData based on the selected occasion and condition
  const filteredData = dressData.filter((dress) => {
    if (occasion === "Work") {
      return dress.Work === true;
    } else if (occasion === "Party") {
      return dress.Party === true;
    } else if (occasion === "Wedding") {
      return dress.Wedding === true;
    }
    return false;
  });

  // Generate a random index within the range of the filteredData array
  const randomIndex = Math.floor(Math.random() * filteredData.length);

  // Get the outfit URLs based on the random index
  const selectedOutfit = filteredData[randomIndex];

  // Set the selected outfit URLs in the state
  setRandomOutfit(selectedOutfit);
};
































    
    



  
 

      
    return(
        <div>
        <p className="my-header-rang"><ColorLensIcon />Welcome to Rang-De App<SentimentSatisfiedAltIcon /></p>
         <div className="header-parent-container" >
         <h1 className="header-container">
            <span style={{color:"violet"}}>R</span>
            <span style={{color:"indigo"}}>a</span>
             <span style={{color:"blue"}}>n</span>
            <span style={{color:"green"}}>g</span>
            <span style={{color:"yellow"}}>-</span>
            <span style={{color:"orange"}}>D</span>
            <span style={{color:"red"}}>e</span>
        </h1>
        <h2 className="confused-text">Confused? What color to Wear! Try Me</h2>
       
              
        <div className="input-field-container">
            <div className="input-field-child-container">
            <Box sx={{ minWidth: 120 }}>
            {/* First dropdown Mood */}
          <FormControl style={{width:"200px", margin:"10px"}}  value={selectedCategory} onChange={handleCategoryChange}>
          <InputLabel id="demo-simple-select-label">Mood</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mood}
          label="Mood"
          onChange={handleChange}
        >
          <MenuItem value="Happy">Happy</MenuItem>
          <MenuItem value="Sad">Sad</MenuItem>
          <MenuItem value="Excited">Excited</MenuItem>
         

         
        </Select>
      </FormControl>
      {/* second Dropdown */}
      <FormControl style={{width:"200px", margin:"10px"}}>
          <InputLabel id="demo-simple-select-label">Season</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={season}
          label="Season"
          onChange={eventListener}
        >
          <MenuItem value="Autumn">Autumn</MenuItem>
         
          <MenuItem value="Winter">Winter</MenuItem>
          <MenuItem value="Summer">Summer</MenuItem>
        

         
        </Select>
      </FormControl>

       {/* Third Dropdown */}
       <FormControl style={{width:"200px", margin:"10px"}}>
          <InputLabel id="demo-simple-select-label">Occasion</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={occasion}
          label="Occasion"
          onChange={eventoccasion}
        >
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Wedding">Wedding</MenuItem>
          <MenuItem value="Party">Party</MenuItem>
         
        

         
        </Select>
      </FormControl>
    </Box>


          </div>

       




        
        </div>
        <div className="button-Click-Me">
     
        <Button variant="contained" color="success" 
         className="button-28"
         onClick={() => {
    handleRandomColor();
    handleButtonClick();
  }}
          >
              Click Me
       </Button>
      


        </div>

        {/* All the Colors Data starts here */}
        {/* <div className="colors-content-parent-container" id="colors-content-parent-container" style={{visible: colorVisibility, align: "center"}}> */}
       
               
                    <p className="history-header-text">Your color of the day is</p>
                          <div className="color-container-parent">
                          <div className="mycolor-div" style={{width:"200px", border:"1px dotted black", borderRadius:"10%",   height:"120px", backgroundColor: colorOfTheDay}}>

                          </div>
                          </div>
                          <p className="sample-heading-text">Your <span className="occasion-text">{occasion}</span> inspiration outfit could be:</p>

                
            

        </div>
      {/* Dress sample starts here */}

      <div className="sample-dress-parent-container">
            <div className="sample-dress-child-container">
            <div className="sample-child-1">
  {/* <div className="item-1">
    {buttonClicked && randomOutfit && (
      <div>
        <img src={randomOutfit.Outfit1} alt="Outfit 1" />
        <img src={randomOutfit.Outfit2} alt="Outfit 2" />
        <img src={randomOutfit.Outfit3} alt="Outfit 3" />
      </div>
    )}
  </div> */}
  <div className="item-1">
  {buttonClicked && randomOutfit && (
    <div>
      <img
        src={randomOutfit.Outfit1}
        alt="Outfit 1"
        style={{ marginRight: '10px', marginTop:'10px' }} // Add margin to create a gap between images
      />
      <img
        src={randomOutfit.Outfit2}
        alt="Outfit 2"
        style={{ marginRight: '10px' , marginTop:'10px' }} // Add margin to create a gap between images
      />
      <img
        src={randomOutfit.Outfit3}
        alt="Outfit 3"
        style={{ marginRight: '10px' , marginTop:'10px' }} // Add margin to create a gap between images
      />
    </div>
  )}
</div>

</div>


          






              <div className="sample-child-2">
              <div className="item-1">
                 

                </div>

              </div>
              <div className="sample-child-3">  
      
              </div>

            </div>


      </div>
         {/* Dress sample ends here */}
      
        
         </div>
       

        
    );
}




export default Homepage;

