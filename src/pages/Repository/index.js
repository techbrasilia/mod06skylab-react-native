import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Browser } from './styles';

export default class Repository extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('repo').name,
    });
    static propTypes = {
        navigation: PropTypes.shape({
            getParam: PropTypes.func,
        }).isRequired
    }

    state = {
        repo: '',
    }

   
    
    render() {
        const { navigation } = this.props;
        const repo = navigation.getParam('repo');
    
        console.tron.log(`url: ${repo.html_url}`);

        return <Browser source={{ uri: repo.html_url }} />;
    }
}
