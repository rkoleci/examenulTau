import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { 
    Checkbox, 
    Accordion,
    AccordionSummary,
    AccordionDetails,
    ListItemText,
    ListItemIcon
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector } from 'react-redux'

import {
    ItemContainer,
    Category,
    ListItemContainer,
    Item,
    SeeLess,
    SeeMoreContainer,
    SeeMore,
    Another,
    Chapters, 
    FullWidth
} from './styles'
import difficultyEasy from '../../assets/difficultyEasy.svg'
import difficultyMedium from '../../assets/difficultyMedium.svg'
import difficultyHard from '../../assets/difficultyHard.svg'
import difficultyVHard from '../../assets/difficultyVHard.svg'

const LIST_SIZE = 4

const FiltersBlock = ({ title, type, filters, onFilterChanged, filtered }) => {
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState(false);

    const clearFilters = useSelector(state => state.clearFilters)

    useEffect(() => {
        onFilterChanged(checked)
    }, [checked])

    useEffect(() => {
        const { clear } = clearFilters

        if (clear) setChecked([])
    }, [clearFilters])

    const onCheckChanged = (f) => {
        !checked.includes(f) ? setChecked([...checked, f]) : setChecked(checked.filter(i => i !== f))
    }

    return (
        <ItemContainer>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Category>{title}</Category>
                </AccordionSummary>
                <AccordionDetails>
                    <FullWidth style={{ width: '100%'}}>
                        {filters.map((f, x) => {
                            if (!expanded && x > LIST_SIZE) return null

                            return (
                                <ListItemContainer role={undefined} dense button onClick={() => onCheckChanged(f)}  style={{ paddingTop: 0, paddingBottom: 0 }}>
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
                            )
                        })}
                    </FullWidth>
                </AccordionDetails>
            </Accordion>
        </ItemContainer>
    )
}

FiltersBlock.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    filters: PropTypes.object,
    onFilterChanged: PropTypes.func,
    filtered: PropTypes.array,
}

export default FiltersBlock;