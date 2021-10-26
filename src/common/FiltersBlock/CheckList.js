import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { 
    Checkbox, 
    AccordionDetails,
    Accordion,
    AccordionSummary
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
    ItemContainer, 
    SubCategory,
    FullWidth,
    Inline
} from './styles'
import NestedList from './NestedList'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        alignItems: 'center'
    },

}));

const CheckList = ({ id, items, onChange }) => {
    const classes = useStyles();
    const [mainChecked, setMainChecked] = useState([])
    const [checked, setChecked] = useState({});
   
    useEffect(() => {
        onChange(checked)
    }, [checked])

    const onMainChecked = (item) => {
        if (!mainChecked.includes(item)) {
            setMainChecked([...mainChecked, item])
        } else {
            setMainChecked(mainChecked.filter(i => i !== item))
        }
    }

    const onCheckChanged = (item, checkedList, fullListLength) => {
        setChecked({ ...checked, [item]: checkedList })
        if (checkedList.length == 0) setMainChecked(mainChecked.filter(i => i !== item))
        if (checkedList.length == fullListLength) {
            setMainChecked([...mainChecked, item])
        }
    } 
 
    return (
        <>
            {items.map((i, x) => { 
                return (
                    <ItemContainer>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id={i.title}
                                className={classes.root}
                            >
                                <Inline>
                                    <Checkbox
                                        edge="start"
                                        tabIndex={-1}
                                        disableRipple
                                        color={'primary'}
                                        checked={mainChecked.includes(i.title)}
                                        onChange={() => onMainChecked(i.title)}
                                    />
                                    <SubCategory>{i.title}</SubCategory>
                                </Inline>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FullWidth style={{ width: '100%' }}>
                                    <NestedList 
                                        key={`${id}-nestedlist`}
                                        list={i.options}
                                        onChange={(checkedList) => onCheckChanged(i.title, checkedList, i.options.length)}
                                        allChecked={mainChecked.includes(i.title)} />
                                </FullWidth>
                            </AccordionDetails>
                        </Accordion>
                    </ItemContainer>
                )
            })}
        </>
    )
}

CheckList.propTypes = {
    items: PropTypes.array,
    onChange: PropTypes.func,
}

export default CheckList
