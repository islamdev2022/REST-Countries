import "./Header.css"
const Header = () => {
  // const changeTheme =()=>{
  //   const moon = document.querySelector('.fa moon')
  // moon.addEventListener('click',()=>{
  //   document.body.classList.toggle('light-theme')
  // })
    
  //}
  
    return ( 
       
        <header>
        <h1 id="header">Where in the World ? </h1>
        <button id="mode" > <span id="mode-img"><i class="fa-regular fa-moon"></i></span> Mode</button>
         </header>
        
     );
}
 
export default Header;