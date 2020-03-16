import React from 'react'
import { connect } from 'react-redux'

function SongDetail() {
    return <div>SongDetail</div>
}

const mapStateToProps = state => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)
