import profile_empty_icon from '../../assets/images/Profile-Empty__icon.svg' 

interface ProfileButtonProps {
  image?: string;
}

export default function ProfileButton(props: ProfileButtonProps) {
  return(
  <button className="btn-profile">
    
    {/* делают ли так вообще ? */}
    <img src= {props.image || profile_empty_icon}  alt="profile image" className="btn-profile__img" /> 
  </button>)
}
