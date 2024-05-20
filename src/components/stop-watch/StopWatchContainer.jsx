import StopWatchTable from '../stop-watch/stopwatchTable';
import ButtonBlock from "../Button-block/button-block";

import {motion} from "framer-motion";

const StopWatchContainer = () => {

    return (
        <motion.section className="stopwatch-section"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay:1,duration: 10}}

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