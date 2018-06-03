/**
 * Created by Shaobu Pan on June/01/2018.
 */

// import $ from 'jquery';

/* eslint no-underscore-dangle: ["error", { "allow": ["__scrollingInfoMapped", "__scrolledEleMapped",
"__getScrollingInfo", "__getScrolledElement"] }] */

// __ declared it as private variable, not accessable by outside:
let __scrollingInfoMapped = {};
let __scrolledEleMapped = {};

function __getScrollingInfo(key) {
    return __scrollingInfoMapped[key];
}

function __getScrolledElement(name) {
    return __scrolledEleMapped[name] || window.document.getElementById(name);
}


const scrollAgent = {

    clearupScrollingInfo() {
        __scrollingInfoMapped = {};
    },

    registerScrollingInfo(names, container, config, scrollFeedback) {
    },

    attachindowResize(callback) {
        window.on('resize', callback);
    },

    dettachWindowResize() {
        window.off('resize');
    },

    widnowResizeHandlerInFrame() {
        function adjustScrolledPositionInFrame(key) {

        }

        for (const keyAsContainer in __scrollingInfoMapped) {
            if (__scrollingInfoMapped[keyAsContainer].type === 1) {
                adjustScrolledPositionInFrame(keyAsContainer);
            }
        }
    },

    unregisterScrollingInfo(key) {
        delete __scrollingInfoMapped[key];
        this.dettachWindowResize();
    },

    getScrollingInfo(key) {
        return __scrollingInfoMapped[key];
    },

    clearupScrolledElement() {
        __scrolledEleMapped = {};
    },

    registerScrolledElement(name, element) {
        __scrolledEleMapped[name] = element;
    },

    unregisterScrolledElement(name) {
        delete __scrolledEleMapped[name];
    },

    getScrolledElement(name) {
        return __scrolledEleMapped[name] || window.document.getElementById(name);
    },

    scrollTo(to, container, config) {
        if (container && config.method === 'frame') {
            this.scrollingInFrame(container, config.direction);
        } else {
            this.tbd(to, config);
        }
    },

    scrollingInFrame(container, direction) {
    },

    tbd(to, config) {
        window.testConfigAvoidAnnoying = { to, config };
    }
};

export default scrollAgent;
