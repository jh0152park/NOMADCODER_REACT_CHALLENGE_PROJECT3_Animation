import { useState } from "react";
import { Box, Circle, Container, Grid, Overlay, Switch } from "./Styles";
import { AnimatePresence } from "framer-motion";

function App() {
    const [flip, setFlip] = useState<boolean>(false);
    const [popup, setPopup] = useState<boolean>(false);
    const [switchActive, setSwitchActive] = useState<boolean>(false);

    function handleMouseDown() {
        console.log("handleMouseDown");
        setSwitchActive(true);
        setFlip((prev) => !prev);
    }

    function handleMouseUp() {
        console.log("handleMouseUp");
        setSwitchActive(false);
    }

    function handleBoxClick() {
        console.log("handleBoxClick");
        setPopup(true);
    }

    function handleOverlayClick() {
        console.log("handleOverlayClick");
        setPopup(false);
    }

    return (
        <Container>
            <Grid>
                <Box id="1" onClick={handleBoxClick}></Box>
                <Box id="2">
                    {!flip ? <Circle layoutId="dot"></Circle> : null}
                </Box>
                <Box id="3">
                    {flip ? <Circle layoutId="dot"></Circle> : null}
                </Box>
                <Box id="4" onClick={handleBoxClick}></Box>
            </Grid>
            <Switch
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                isActive={switchActive}
            >
                Switch
            </Switch>

            <AnimatePresence>
                {popup ? (
                    <Overlay onClick={handleOverlayClick}></Overlay>
                ) : null}
            </AnimatePresence>
        </Container>
    );
}

export default App;
