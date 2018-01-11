import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './styles.css';

class TabPanelC extends React.PureComponent {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Tabs className={cx('slider__tabs tab-panel')}>
                <TabList className="tab-panel__header">
                    {this.props.tabs.map((tab, i) => (
                        <Tab key={i} className="tab-panel__title">
                            {tab.title}
                        </Tab>
                    ))}
                </TabList>

                {this.props.tabs.map((tab, i) => (
                    <TabPanel key={i} className="tab-panel__text">
                        <p>{tab.text}</p>
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
