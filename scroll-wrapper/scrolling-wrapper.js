/**
 * Created by Shaobu Pan on June/01/2018.
 */

/* eslint no-underscore-dangle: ["error", { "allow": ["_ScrollingElement"] }] */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["scrollTo", "registerScrollingInfo"] }] */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import scrollAgent from '../scroll-agent';

export default function scrolling(component, config) {
    class _ScrollingElement extends Component {
        static propTypes= {
            to: PropTypes.array,
            container: PropTypes.string,
            className: PropTypes.string
        };

        constructor(props) {
            super(props);
            this.cleanupPropsList = { container: '', to: '' };
            this.registerScrollingInfo = this.registerScrollingInfo.bind(this);
            this.scrollTo = this.scrollTo.bind(this);
            this.clickHandler = this.clickHandler.bind(this);
            this.scrollFeedback = this.scrollFeedback.bind(this);
        }

        scrollTo(to, container) {
            scrollAgent.scrollTo(to, container, config);
        }

        scrollFeedback(status) {
            if (!status) {
                this.setState({ disable: status });
            }
        }

        clickHandler(event) {
            const { to, container } = this.props;

            // dont bubble the navigation
            if (event.stopPropagation) event.stopPropagation();
            if (event.preventDefault) event.preventDefault();

            // actually to do scrolling
            this.scrollTo(to, container);
        }

        componentDidMount() {
            const { to, container } = this.props;

            this.registerScrollingInfo(to, container);
        }

        componentWillUnmount() { this.ignoreAnnoying = 'ignore'; }

        registerScrollingInfo(name, container) {
            scrollAgent.registerScrollingInfo(name, container, config, this.scrollFeedback);
        }

        render() {
            const className = this.props.className;

            const myProps = Object.assign({}, this.props);

            for (const prop in this.cleanupPropsList) {
                if (Object.prototype.hasOwnProperty.call(myProps, prop)) {
                    delete myProps[prop];
                }
            }

            myProps.className = className;
            myProps.onClick = this.clickHandler;

            const jsxEl = React.createElement(component, myProps);

            return jsxEl;
        }
    }

    return _ScrollingElement;
}
