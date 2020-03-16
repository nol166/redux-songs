import React, { Component } from 'react'
import { connect } from 'react-redux' // always going to import connect

class SongList extends Component {
    // this.props === { songs: state.songs}
    render() {
        console.log(this.props.songs)

        return <div>SongList</div>
    }
}

/**
 * Always going to define mapStateToProps
 * Always given a first argument of state
 * Always going to return an object that is
 * going to show up as "props" inside component
 */
const mapStateToProps = state => {
    console.log(state)

    return { songs: state.songs }
}

/**
 * always going to call connect and
 * pass in component (SongList) as the second function called
 */
export default connect(mapStateToProps)(SongList)
