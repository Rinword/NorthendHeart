import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './styles.css';

class TabPanelC extends React.PureComponent {

    render() {
        return (
            <Tabs className={cx('slider__tabs tab-panel', { 'tab-panel_hidden': !this.props.tabs[0].title })}>
                <TabList className="tab-panel__header" defaultIndex={0}>
                    {this.props.tabs.map((tab, i) => (
                        <Tab key={i} className="tab-panel__title">
                            {tab.title}
                        </Tab>
                    ))}
                </TabList>

                {this.props.tabs.map((tab, i) => (
                    <TabPanel key={i} className="tab-panel__text">
                        <p dangerouslySetInnerHTML={{ __html: tab.text }} />
                    </TabPanel>
                ))}
            </Tabs>
        );
    }
}

TabPanelC.displayName = 'TabPanel';

TabPanelC.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
};

TabPanelC.defaultProps = {
    tabs: [],
};

export default TabPanelC;
