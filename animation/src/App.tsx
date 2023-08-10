import { useState } from "react";
import { Box, Circle, Container, Grid, Switch } from "./Styles";

function App() {
    const [flip, setFlip] = useState<boolean>(false);
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

    return (
        <Container>
            <Grid>
                <Box></Box>
                <Box>{!flip ? <Circle layoutId="dot"></Circle> : null}</Box>
                <Box>{flip ? <Circle layoutId="dot"></Circle> : null}</Box>
                <Box></Box>
            </Grid>
            <Switch
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                isActive={switchActive}
            >
                Switch
            </Switch>
        </Container>
    );
}

export default App;
