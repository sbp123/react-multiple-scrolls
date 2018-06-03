import PropTypes from 'prop-types';
import React from 'react';
import Builders from './scroll-builder';

let scrollConfig = {};
class NavLeft extends React.Component {
    static propTypes= {
        children: PropTypes.node
        // onClick: PropTypes.func
    };

    componentDidMount() { this.ignoreAnnoying = 'ignore'; }

    componentWillUpdate() { this.ignoreAnnoying = 'ignore'; }

    render() {
        const newProps = Object.assign({}, this.props);
        scrollConfig = { ...newProps.scrollConfig };

        if (newProps.scrollConfig) {
            delete newProps.scrollConfig;
        }

        return (
            <div {...newProps}>
                {this.props.children}
            </div>
        );
    }
}

// Nav Arrow Left is opposite to the content movtion direction, which is to right.
const NavLeftScroller = Builders.scrolling(NavLeft, scrollConfig);

export default NavLeftScroller;
