import PropTypes from 'prop-types';
import React from 'react';
import Builders from './scroll-builder';

class NavRight extends React.Component {
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
// Nav Arrow right is opposite to the content movtion direction, which is to Left.
export default Builders.scrolling(NavRight, { direction: 'cMoveToLeft', method: 'frame' });
