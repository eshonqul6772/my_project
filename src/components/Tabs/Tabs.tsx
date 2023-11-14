import React from 'react';
import TabsBase from 'antd/lib/tabs';

import './Tabs.scss';

interface IProps {
  props: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Tabs: React.FC<IProps> = props => <TabsBase {...props} />;

export default Tabs;
