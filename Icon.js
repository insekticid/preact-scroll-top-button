import { h, render, Component } from "preact";

const Icon = props => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className={`icon${props.type ? ' icon-' + props.type : '' }`}
        >
            <use xlinkHref={`#${props.name}`} />
        </svg>
    )
}

Icon.defaultProps = {
    type : 'small'
};

export const SVG = props => {
    const {
        strokeWidth,
        viewBox,
        icon,
    } = props;

    return (
        <svg
            className="image-gallery-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {icon}
        </svg>
    );
};

SVG.defaultProps = {
    strokeWidth: 1,
    viewBox: '0 0 24 24',
};

export default Icon;
