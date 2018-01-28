import cx from 'classnames';
import React from 'react';
// import PropTypes from 'prop-types';

class Layout extends React.PureComponent {
    constructor(props) {
        super(props);

        this.styleParams = [
            'direction',
            'jc',
            'ai',
            'multiStr',
            'ac',
            'width',
            'height',
            'flex',
            'flexGrow',
            'backgroundColor',
            'minWidth',
            'maxWidth',
            'minHeight',
            'maxHeight',
            'hidden',
            'margin',
            'padding',
            'overflow',
            'display',
            'tagName',
            'cls',
        ];
    }

    render() {
        let realProps = {};
        for (let key in this.props) if (!~this.styleParams.indexOf(key)) realProps[key] = this.props[key];

        let style = this.generateStyle(this.props);
        realProps = { ...realProps, style, className: cx('ux-layout', this.props.cls ? this.props.cls : '') };

        return (
            <div style={this.generateStyle(this.props)} {...realProps}>
                {this.props.children}
            </div>
        );
    }

    generateStyle(props) {
        const { direction, jc, ai, multiStr, ac, cls, width, height, flexGrow, flex } = props;

        let {
            backgroundColor,
            minWidth,
            maxWidth,
            minHeight,
            maxHeight,
            hidden,
            margin,
            padding,
            overflow,
            display,
        } = props;

        let style = {
            flexDirection: direction || 'row',
            justifyContent: jc || 'flex-start',
            alignItems: ai || 'stretch',
            // flexWrap: multiStr === 'true' ? 'wrap' : 'nowrap',
            alignContent: multiStr === 'true' && ac !== undefined ? ac : 'flex-start',
            width: width || '100%',
            height: height || '100%',
            display: hidden === 'true' ? 'none' : 'flex',
            position: 'relative',
            flexGrow: flexGrow || '1',
            className: cls || '',
        };

        if (width !== 'auto' && height !== 'auto' && flexGrow !== '0') {
            if (/px/.test(style.width) && !/calc/.test(style.width)) {
                style.flex = '0 0 ' + style.width;
            }
            if (/px/.test(style.height) && !/calc/.test(style.height)) {
                style.flex = '0 0 ' + style.height;
            }
        } else {
            style.flexGrow = 0;
        }
        console.log(overflow)

        if (display) style.display = display;
        if (minWidth) style.minWidth = minWidth;
        if (maxWidth) style.maxWidth = maxWidth;
        if (minHeight) style.minHeight = minHeight;
        if (maxHeight) style.maxHeight = maxHeight;
        if (margin) style.margin = margin;
        if (padding) style.padding = padding;
        if (overflow) style.overflow = overflow;
        else style.overflow = 'hidden';
        if (flex) style.flex = flex;
        if (backgroundColor) style.backgroundColor = backgroundColor;

        return style;
    }
}

const Row = props => (
    <Layout {...props} direction="row">
        {props.children}
    </Layout>
);
const Column = props => (
    <Layout {...props} direction="column">
        {props.children}
    </Layout>
);

// Layout.displayName = 'Layout';
// Layout.PropTypes = {
//     direction: PropTypes.string.isRequired,
//     cls: PropTypes.string,
//     style: PropTypes.object,
// };

export default { Layout, Row, Column };
