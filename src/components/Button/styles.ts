import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFF
    padding: 2 px 12px;
    min-width: 120px;
    width: 100%;

    ${({variant})=> variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;

        background: #E41050;

        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e41050;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`