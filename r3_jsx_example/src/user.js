import react from 'react'
import './App.css';
function User(){
    const name = "Me";
    const pic = "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    return (
        <section>
            <img className='user-profile-pic' src={pic} alt={name} ></img>
            <h2 className='user-name' > 🥦🥦🥦Hello, {name}🌽🌽🌽</h2>
        </section>
    )
}
export default User