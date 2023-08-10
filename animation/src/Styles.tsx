import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 50%;
    gap: 10px;

    div:nth-child(1) {
        transform-origin: bottom right;
    }
    div:nth-child(2) {
        transform-origin: bottom left;
    }
    div:nth-child(3) {
        transform-origin: top right;
    }
    div:nth-child(4) {
        transform-origin: top left;
    }
`;

export const Box = styled(motion.div)`
    height: 200px;
    background-color: rgba(245, 245, 245, 0.6);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        scale: 1.1;
        transition: scale 0.1s linear;
    }
`;

export const Switch = styled.div<{ isActive: boolean }>`
    background-color: whitesmoke;
    width: 60px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    color: ${(props) => (props.isActive ? "orange" : "blue")};
    scale: ${(props) => (props.isActive ? 1.2 : 1)};
    transition: scale 0.2s linear;

    &:hover {
        cursor: pointer;
    }
`;

export const Circle = styled(motion.div)`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: whitesmoke;
`;

export const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(154, 205, 50, 0.7);
`;
