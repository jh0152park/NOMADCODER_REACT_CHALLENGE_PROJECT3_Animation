import { useState } from "react";
import { Box, Circle, Container, Grid, Switch } from "./Styles";

function App() {
    const [switchActive, setSwitchActive] = useState<boolean>(false);

    function handleMouseDown() {
        console.log("handleMouseDown");
        setSwitchActive(true);
    }

    function handleMouseUp() {
        console.log("handleMouseUp");
        setSwitchActive(false);
    }

    return (
        <Container>
            <Grid>
                <Box></Box>
                <Box>
                    <Circle layoutId="dot"></Circle>
                </Box>
                <Box></Box>
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
