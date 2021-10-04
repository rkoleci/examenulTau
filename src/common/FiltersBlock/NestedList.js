import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ListItemIcon, Checkbox, ListItemText } from '@material-ui/core'

import {
    ListItemContainer, 
} from './styles'

const NestedList = ({   list, allChecked, onChange }) => {
    const [checked, setChecked] = useState([]); 
   
    useEffect(() => {
        if (allChecked) {
            setChecked(list)
        } else {
            setChecked([])
        }
    }, [allChecked])

    useEffect(() => {
        onChange(checked)
    }, [checked])

    const onCheckChanged = item => {
        if (!checked.includes(item)) {
            setChecked([...checked, item])
        } else {
            setChecked(checked.filter(i => i !== item))
        }
    }

    return (
        <div  >
            {list.map(f => (
                <ListItemContainer key={f} role={undefined} dense button onClick={() => onCheckChanged(f)} style={{ paddingTop: 0, paddingBottom: 0 }}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.includes(f)}
                            onChange={() => onCheckChanged(f)}
                            tabIndex={-1}
                            disableRipple
                            color={'primary'}
                            key={`${f}-check`}
                        />
                    </ListItemIcon>
                    <ListItemText id={f} primary={f} />
                </ListItemContainer>
            ))}
        </div>
    )
}

NestedList.propTypes = {
    list: PropTypes.array,
    onChange: PropTypes.func,
    allChecked: PropTypes.bool,
}

export default NestedList