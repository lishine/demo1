import React from 'common/form0/react'
import styled from 'common/form0/@emotion/styled'
import ProgressButton from 'common/form0/react-progress-button'

export const Submit = styled(props => (
    <ProgressButton {...props} {...{ type: 'submit', children: 'Submit' }} />
))`
    &.pb-container {
        display: ${props => props.display || 'inline-block'};
        text-align: center;
        width: ${props => props.width || '100px'};
    }
    &.pb-container .pb-button {
        height: ${props => props.height || '40px'};
        background-color: #5995ef;
        border: 0px solid currentColor;
        border-radius: 3px;
        color: currentColor;
        cursor: pointer;
        padding: 0.2em 1em;
        text-decoration: none;
        text-align: center;
        width: 100%;
        -webkit-tap-highlight-color: transparent;
        outline: none;
        transition: background-color 0.3s, width 0.3s, border-width 0.3s,
            border-color 0.3s, border-radius 0.3s;
    }
    &.pb-container .pb-button span {
        display: inherit;
        transition: opacity 0.3s 0.1s;
        font-size: 1.2em;
        font-weight: 100;
    }
    &.pb-container .pb-button svg {
        height: 54px;
        width: 54px;
        position: absolute;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }
    &.pb-container .pb-button svg path {
        opacity: 0;
        fill: none;
    }
    &.pb-container .pb-button svg.pb-progress-circle {
        animation: spin 0.9s infinite cubic-bezier(0.085, 0.26, 0.935, 0.71);
    }
    &.pb-container .pb-button svg.pb-progress-circle path {
        stroke: currentColor;
        stroke-width: 5;
    }
    &.pb-container .pb-button svg.pb-checkmark path,
    &.pb-container .pb-button svg.pb-cross path {
        stroke: #fff;
        stroke-linecap: round;
        stroke-width: 4;
    }
    &.pb-container.disabled .pb-button {
        cursor: not-allowed;
    }
    &.pb-container.loading .pb-button {
        width: 54px;
        border-width: 6.5px;
        border-color: #ddd;
        cursor: wait;
        background-color: transparent;
        padding: 0;
    }
    &.pb-container.loading .pb-button span {
        transition: all 0.15s;
        opacity: 0;
        display: none;
    }
    &.pb-container.loading .pb-button .pb-progress-circle > path {
        transition: opacity 0.15s 0.3s;
        opacity: 1;
    }
    &.pb-container.success &.pb-button {
        border-color: #a0d468;
        background-color: #a0d468;
    }
    &.pb-container.success &.pb-button span {
        transition: all 0.15s;
        opacity: 0;
        display: none;
    }
    &.pb-container.success &.pb-button &.pb-checkmark > path {
        opacity: 1;
    }
    &.pb-container.error &.pb-button {
        border-color: #ed5565;
        background-color: #ed5565;
    }
    &.pb-container.error &.pb-button span {
        transition: all 0.15s;
        opacity: 0;
        display: none;
    }
    &.pb-container.error &.pb-button &.pb-cross > path {
        opacity: 1;
    }
    /* @keyframes spin {
		from {
			transform: translate(-50%, -50%) rotate(0deg);
			transform-origin: center center;
		}
		to {
			transform: translate(-50%, -50%) rotate(360deg);
			transform-origin: center center;
		}
	} */
`
