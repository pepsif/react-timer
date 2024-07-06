import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {DarkThemeButton} from "../components/DarkThemeButton/DarkThemeButton";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/DarkThemeButton">
                <DarkThemeButton/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews