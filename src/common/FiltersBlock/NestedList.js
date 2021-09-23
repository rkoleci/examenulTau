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

const NestedList = ({ list }) => {
    const [checked, setChecked] = useState([]);

    const onCheckChanged = item => {

    }

    return (
        <>
            {list.map(f => (
                <ListItemContainer role={undefined} dense button onClick={() => onCheckChanged(f)} style={{ paddingTop: 0, paddingBottom: 0 }}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.includes(f)}
                            onChange={() => onCheckChanged(f)}
                            tabIndex={-1}
                            disableRipple
                            color={'primary'}
                        />
                    </ListItemIcon>
                    <ListItemText id={f} primary={f} />
                </ListItemContainer>
            ))}
        </>
    )
}

NestedList.propTypes = {
    list: PropTypes.array,
}

export default NestedList