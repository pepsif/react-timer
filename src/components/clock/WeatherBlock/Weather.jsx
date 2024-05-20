import './Weather.scss';
import { IoPartlySunnyOutline } from "react-icons/io5";

export const Weather = ({day}) => {
    return(
        <div className='weather-block'>
            <div style={{ display: "flex", alignItems: "center",marginRight:20, }}>
                <IoPartlySunnyOutline className='weather-icon'/>
                <span className='temperature'>+ 4 °C</span>
            </div>

            <span className='day'>{day}</span>
        </div>
    )
}