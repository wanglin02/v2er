
import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import TopicStyle from './Styles/Topics';
import Color from './Utils/Color';



export default class TopicsListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        const {data:{item}, onSelect, ...props} = this.props;

        return (
            <TouchableHighlight onPress={onSelect} underlayColor={Color.BORDER} {...props}>
                <View style={TopicStyle.cell}>
                    <View style={TopicStyle.cellWrapper}>
                        <View style={TopicStyle.titleWrapper}>
                            <Text style={TopicStyle.cellTitle}>
                                {item.title}
                            </Text>
                            <View style={TopicStyle.cellCategory}>
                                <View style={TopicStyle.cellCategoryText}>
                                    <Text style={TopicStyle.cellCategoryTextColor}>{item.node.title}</Text>
                                </View>
                                <Text style={TopicStyle.cellOtherInfoText}>{item.member.username}</Text>
                            </View>
                        </View>
                        <View style={TopicStyle.cellOtherWrapper}>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
};