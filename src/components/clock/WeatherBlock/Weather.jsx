import './Weather.scss';
import { IoPartlySunnyOutline } from "react-icons/io5";

export const Weather = () => {
    return(
        <div className='weather-block'>
           <IoPartlySunnyOutline className='weather-icon'/>
           <span className='temperature'>+ 4 °C</span>
        </div>
    )
}