import { Search } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'

import { searchRequest } from '../core/actions/exams'

const Exams = ({ searchRequest }) => {
    useEffect(() => {
        searchRequest()
    }, [])

    return (
        <div>
            <h4>Exams</h4>
            <Link to='/auth'>Auth</Link>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchRequest: p => dispatch(searchRequest(p)),
    }
}

export default connect(null, mapDispatchToProps)(Exams)