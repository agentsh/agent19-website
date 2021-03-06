import React from 'react';
import fetch from 'isomorphic-fetch';

import SchedulePage from '../components/SchedulePage';
import config from '../config';

export default class CodeOfConduct extends React.Component {
    static async getInitialProps() {
        const response = await fetch(config.baseUrl + '/2019/schedule.json');
        const responseSpeakers = await fetch(config.baseUrl + '/2019/index.json');
        const indexJson = await responseSpeakers.json();
        const json = await response.json();
        json.speakers = indexJson.speakers;
        return json;
    }
    render() {
        return <SchedulePage {...this.props} />;
    }
}
