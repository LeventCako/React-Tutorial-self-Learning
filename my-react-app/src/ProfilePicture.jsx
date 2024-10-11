

function ProfilePicture() {

    const imageUrl = './src/assets/R.png';
  

    const handleClick = (e) => e.target.style.display = "none" ;
    return(<img onClick={(e) => handleClick(e)} src={imageUrl} className="profilePic"></img>)
   
}

export default ProfilePicture