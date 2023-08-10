import { useState } from "react";
import {
    Box,
    Circle,
    Container,
    Grid,
    Overlay,
    OverlayVariants,
    PopupCard,
    Switch,
} from "./Styles";
import { AnimatePresence } from "framer-motion";

function App() {
    const [id, setId] = useState<number>(0);
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

    function handleBoxClick(index: number) {
        console.log("handleBoxClick");
        setPopup(true);
        setId(index);
    }

    function handleOverlayClick() {
        console.log("handleOverlayClick");
        setPopup(false);
        setId(0);
    }

    return (
        <Container>
            <Grid>
                <Box onClick={() => handleBoxClick(1)} layoutId="1"></Box>
                <Box>{!flip ? <Circle layoutId="dot"></Circle> : null}</Box>
                <Box>{flip ? <Circle layoutId="dot"></Circle> : null}</Box>
                <Box onClick={() => handleBoxClick(4)} layoutId="4"></Box>
            </Grid>
            <Switch
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                isActive={switchActive}
            >
                Switch
            </Switch>

            <AnimatePresence>
                {popup && id ? (
                    <Overlay
                        onClick={handleOverlayClick}
                        variants={OverlayVariants}
                        initial="start"
                        animate="end"
                        exit="exit"
                        transition={{
                            duration: 1,
                        }}
                    >
                        <PopupCard layoutId={id + ""}></PopupCard>
                    </Overlay>
                ) : null}
            </AnimatePresence>
        </Container>
    );
}

export default App;
