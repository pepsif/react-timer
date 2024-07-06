import StopWatchTable from '../stop-watch/stopwatchTable';
import ButtonBlock from "../Button-block/button-block";

import {motion} from "framer-motion";
import {useSelector} from "react-redux";

const StopWatchContainer = ({ lightStyle, darkStyle }) => {
    const lightOnOffValue = useSelector((state) => state.darkTheme.darkThemeOnOff);

    return (
        <motion.section className="stopwatch-section"
                        style={ lightOnOffValue ? darkStyle.stopwachSection : lightStyle.stopwachSection }
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay:1,duration: 10}}

        >
            <div className="stopwatch-block">
                <h2 className="stopwatch-block-title">Stopwatch</h2>
                <ButtonBlock darkStyle={darkStyle} lightStyle={lightStyle} />
                <StopWatchTable/>
            </div>
        </motion.section>
    )
}

export default StopWatchContainer