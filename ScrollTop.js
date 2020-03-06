import {h, Component} from "preact";

import { SVG } from "./Icon";
import "./scrollTop.scss";

const chevronUp = <polyline points="18 15 12 9 6 15" />;

export default class ScrollTop extends Component {
    state = { intervalId: 0, hide: true };

    componentDidMount()
    {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount()
    {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY === 0 || window.scrollY <= 400 ) {
            this.setState({hide: true});
        } else {
            this.setState({hide: false});
        }
    }

    scrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollTop = () =>
    {
        let intervalId = setInterval(this.scrollStep, this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    render()
    {
        return (
            <div className={`go-to${this.state.hide ? '': ' show'}`}>
                <button className="btn btn-primary rounded-circle border-0 p-3" onClick={this.scrollTop}>
                    {/*<Icon name="chevron-up" type="" />*/}
                    <SVG icon={this.props.icon} />
                </button>
            </div>
        );
    }
}

ScrollTop.defaultProps = {
    scrollStepInPx: "100",
    delayInMs: "8",
    icon: chevronUp
};
