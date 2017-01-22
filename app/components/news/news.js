import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
	View,
	ListView,
	Text,
} from 'react-native'
import {
	setNavigator,
	pushRoute,
	popRoute,
} from '../../redux/actions'

import Http from '../../http/client';
import PostList from './post_list';

class News extends Component {

	constructor(props) {
		super(props)
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.url !== r2.url});
    // this.state = {
    //   dataSource: ds.cloneWithRows([
    //     'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
    //   ])
    // };
		this.state = {
			posts: this.ds.cloneWithRows([])
		}
	}

	componentDidMount() {
		Http.get('posts/')
			.then((r) => r.json())
			.then((r) => {
				this.setState({posts: this.ds.cloneWithRows(r)})
			})
			.catch((err) => {
			console.log('err')
			console.log(err)
		})
	}

	render () {
		return (
			<View>
				<ListView
          dataSource={this.state.posts}
					enableEmptySections={true}
          renderRow={(p) => <PostList
						key={p.url || 0}
						onClick={() => this.props.pushRoute({ title: 'Post', index: 2, post: p})}
						post={p}/>}
        />
			</View>
		)
	}
}


const mapStateToProps = (state, props) => {
	return {}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		pushRoute: (route) => {
			dispatch(pushRoute(route))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(News)
