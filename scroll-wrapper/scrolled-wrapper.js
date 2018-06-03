/**
 * Created by Shaobu Pan on on June/01/2018.
 */

/* eslint no-underscore-dangle: ["error", { "allow": ["_scrolledElement"] }] */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import scrollAgent from '../scroll-agent';

export default function scrolled(component) {
    class _ScrolledElement extends Component {
        static propTypes= {
            name: PropTypes.string
        };

        constructor(props) {
            super(props);
            this.registerElements = this.registerElements.bind(this);
            this.passableRef = { node: null };
        }

        componentDidMount() {
            this.registerElements(this.props.name);
        }
        componentWillReceiveProps(nextProps) {
            if (this.props.name !== nextProps.name) {
                this.registerElements(nextProps.name);
            }
        }
        componentWillUnmount() {
            scrollAgent.unregister(this.props.name);
        }
        registerElements(name) {
            scrollAgent.registerScrolledElement(name, this.realDomBindings.node);
        }
        render() {
            return React.createElement(component,
                Object.assign({}, this.props, { virtualWrapper: this.passableRef }));
        }
    }

    return _ScrolledElement;
}
