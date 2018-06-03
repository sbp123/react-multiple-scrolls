import PropTypes from 'prop-types';
import React from 'react';
import Builders from './scroll-builder';

class NavLeft extends React.Component {
    static propTypes= {
        children: PropTypes.node
        // onClick: PropTypes.func
    };

    componentDidMount() { this.ignoreAnnoying = 'ignore'; }

    componentWillUpdate() { this.ignoreAnnoying = 'ignore'; }

    render() {
        return (
            <div {...this.props}>
                {this.props.children}
            </div>
        );
    }
}

// Nav Arrow Left is opposite to the content movtion direction, which is to right.
const NavLeftScroller = Builders.scrolling(NavLeft, { direction: 'cMoveToRight', method: 'frame' });

export default NavLeftScroller;
