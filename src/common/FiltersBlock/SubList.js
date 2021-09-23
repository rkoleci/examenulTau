import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ListItemIcon, Checkbox, ListItemText } from '@material-ui/core'

import {
    ItemContainer,
    Category,
    SubCategory,
    ListItemContainer,
    Item,
    SeeLess,
    SeeMoreContainer,
    SeeMore,
    Another,
    Chapters,
    FullWidth
} from './styles'
import NestedList from './NestedList'

const SubList = ({ options }) => {
    const [checked, setChecked] = useState([]);

    const onCheckChanged = (f, g, t) => {
        !checked.includes(f) ? setChecked([...checked, f]) : setChecked(checked.filter(i => i !== f))
    }

    return (
        <>
            {options.map(i => (
                <NestedList list={i.options} />
            ))}
        </>
    )
}

SubList.propTypes = {
    options: PropTypes.array,
}

export default SubList