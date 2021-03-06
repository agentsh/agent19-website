import React from 'react';

import ContentPage from '../components/ContentPage';
import config from '../config';

import fetch from 'isomorphic-fetch';

export default class CodeOfConduct extends React.Component {
    static async getInitialProps() {
        const response = await fetch(config.baseUrl + '/2019/dornbirn.json');
        const json = await response.json();
        return json;
    }
    render() {
        return <ContentPage {...this.props} />;
    }
}
