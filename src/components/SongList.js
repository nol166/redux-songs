import React, { Component } from 'react'
import { connect } from 'react-redux' // always going to import connect
import { selectSong } from '../actions'

class SongList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    // this.props === { songs: state.songs}
    render() {
        return <div className="ui divided list">{this.renderList()}</div>
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
export default connect(mapStateToProps, { selectSong })(SongList)
