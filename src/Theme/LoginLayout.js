import React from 'react';
import DiamondIcon from '@mui/icons-material/Diamond';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';



export default function LoginLayout() {

return(
    <div>
         <h1 className="welcome-text">Welcome to Rang De Application</h1>
         <p className="guidance-msg">Please login/Sign up to continue using the Rang-De Application</p>
          {/* <div className="picture-div">
          <img id="leaves-pic" src="https://th.bing.com/th/id/OIP.Dn2FK3OxUy9T2trJXP_4aQHaHR?pid=ImgDet&w=208&h=204&c=7&dpr=1.5"
         alt="leaves" />
          </div> */}

          <div className="flex-container">
  <div className="flex-item">
    <h2><DiamondIcon />Fashion</h2>
    <p>A fashion should be confortable and it should reflect our trueself.</p>
  </div>
  <div className="flex-item">
    <h2><InvertColorsIcon />Color</h2>
    <p>Life without colors is like a life without music.</p>
  </div>
  <div className="flex-item">
    <h2><CheckroomIcon />Dress</h2>
    <p>We should held our head high and be confortable in what ever we are wearing.</p>
  </div>
  <div className="flex-item">
    <h2><LocalFireDepartmentIcon />Confidence</h2>
    <p>Beauty comes in all shape and sizes but the expensive ornament you can ever wear is confidence.</p>
  </div>
</div>

        
        
         
        
    

    </div>
);
}