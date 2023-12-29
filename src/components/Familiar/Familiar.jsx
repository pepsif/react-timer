import './Familiar.scss';
import image from '../../images/familiar.png';
import { useSelector } from 'react-redux';

const Familiar = () => {
    const darkThemeButton = useSelector(state => state.darkTheme.darkThemeOnOff);

 const clickLink = () => {
   //  alert(darkThemeButton);
 }
 const styles = {
    root:{
   //  backdropFilter: darkThemeButton ? "transparent" : '',
    
    }
 }

    return(
        <img className='familiar' style={styles.root} src={image} alt='author link' onClick={clickLink}></img>
                   
    )
}

export default Familiar;