import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    tabs: {
        height: 45,
        flexDirection: 'row',
        paddingTop: 5,
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
});

class FacebookTabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIcons: [],
        };
    }

    static propTypes = {
        goToPage: PropTypes.func,
        activeTab: PropTypes.number,
        tabs: PropTypes.array,
    };

    render() {
        const tabUnderlineStyle = {
            position: 'absolute',
            left: 0,
            right: 0,
            height: 2,
            backgroundColor: '#007aff',
            bottom: 0,
        };
        const tabLineStyle = {
            position: 'absolute',
            left: 0,
            right: 0,
            height: 2,
            backgroundColor: 'rgba(0,0,0,0.05)',
            bottom: 0,
        };
        const { style, tabs, goToPage, activeTab } = this.props;
        return (
            <View style={[styles.tabs, style]}>
                {
                    tabs.map((tab, i) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={tab}
                                onPress={() => goToPage(i)}
                                style={styles.tab}
                            >
                                <Text style={styles.text}>{tab}</Text>
                                {
                                    activeTab === i ?
                                        <View style={tabUnderlineStyle} /> :
                                        <View style={tabLineStyle} />
                                }
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        );
    }
}

export default FacebookTabBar;
