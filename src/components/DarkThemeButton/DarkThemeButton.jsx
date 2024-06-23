import {React, useEffect} from "react";
import "./DarkThemeButton.css";
import {useSelector, useDispatch} from "react-redux";

import {setThemeOnOff} from "../../redux/slices/darkThemeSlice.js";
import buttonClick from "../../assets/sounds/flamenco-click.wav";

import {motion} from "framer-motion";


export const DarkThemeButton = () => {
    const lightOnOffValue = useSelector((state) => state.darkTheme.darkThemeOnOff);
    // const stopWatchStarter = useSelector( (state) => state.stopwatch.stopwatchStarter );
    const dispatch = useDispatch();
    const ButtonClick = new Audio(buttonClick);

    const darkThemeSelect = () => {
        dispatch(setThemeOnOff(!lightOnOffValue));
        ButtonClick.play();
    };

    useEffect(() => {
        const body = document.querySelector("body");
        const mainBlocks = document.querySelector(".clock-box");
        const buttons = document.querySelectorAll("button");

        //  --ON--
        if (lightOnOffValue === true) {
            body.style.backgroundColor = "rgb(29 29 30 / 92%)";
            body.style.color = "#908879fa";

            mainBlocks.style.boxShadow =
                "rgb(230, 5, 5) 1px 1px 14px, rgb(230, 5, 5) -1px -1px 14px";
            for (let i = 1; i <= 3; i++) {
                mainBlocks.children[i].style.boxShadow = "2px 2px 2px red";
                // console.log(mainBlocks.children)
            }
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.boxShadow =
                    "rgb(46 46 47) 23px 23px 46px, -1px -1px 0px red";
                buttons[i].style.backgroundColor = "#8e8678";
            }

            // -OFF-
        } else {
            body.style.backgroundColor = "rgba(196, 196, 196, 0.2)";

            body.style.color = "black";
            mainBlocks.style.boxShadow =
                "17px 17px 34px #bebebe, -17px -17px 34px #ffffff";
            for (let i = 1; i <= 3; i++) {
                // console.log(mainBlocks.children[1]);
                mainBlocks.children[i].style.boxShadow = "8px 8px 16px #bebebe,-8px -8px 16px #ffffff";
            }
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.boxShadow =
                    "4px 4px 10px #bebebe,-4px -4px 10px #ffffff";

                buttons[i].style.backgroundColor = "#f3f3f3";
            }
        }
    }, [lightOnOffValue]);

    return (

        <motion.label className="switch"
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      transition={{duration: 10}}>
        <span className="sun">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="#ffd43b">
              <circle r="5" cy="12" cx="12"></circle>
              <path
                  d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
            </g>
          </svg>
        </span>
            <span className="moon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
                d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
          </svg>
        </span>
            <input
                type="checkbox"
                className="input"
                onChange={() => darkThemeSelect()}
            />
            <span className="slider"

            ></span>
        </motion.label>

    );
};
