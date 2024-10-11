import profilepic from './assets/R.png'
function Card() {


    return(

        <div className="card">
            <img className='profilepic'  src={profilepic} alt="profile picture"/>
            <h2 className='card-title'>Levent</h2>
            <p className='card-text'> Im a Student who codes alot in his freetime</p>
        </div>
    )
}

export default Card