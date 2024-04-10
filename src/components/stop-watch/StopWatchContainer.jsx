import StopWatchTable from '../stop-watch/stopwatchTable';
import ButtonBlock from "../Button-block/button-block";

import {motion} from "framer-motion";

const StopWatchContainer = () => {

    return (
        <motion.section className="stopwatch-section"
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition={{delay:0.3}}
        >
            <div className="stopwatch-block">
                <h2 className="stopwatch-block-title">Stopwatch</h2>
                <ButtonBlock/>
                <StopWatchTable/>
            </div>
        </motion.section>
    )
}

export default StopWatchContainer