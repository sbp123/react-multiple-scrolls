import PropTypes from 'prop-types';
import React from 'react';
import Builders from './scroll-builder';

class Element extends React.Component {
    static propTypes= {
        virtualWrapper: PropTypes.object,
        children: PropTypes.node
    };

    render() {
        // This will be wrapped by a 'virture Remove `parentBindings` from props
        const newProps = Object.assign({}, this.props);
        if (newProps.virtualWrapper) {
            delete newProps.virtualWrapper;
        }

        return (
            <div {...newProps} ref={(el) => { this.props.virtualWrapper.node = el; }}>
                {this.props.children}
            </div>
        );
    }
}

const NavElement = Builders.scrolled(Element);

export default NavElement;

