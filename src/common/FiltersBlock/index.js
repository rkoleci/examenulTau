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
import Group from './Group'

const FiltersBlock = ({ title, type, filters, onFilterChanged, filtered }) => {
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState(false);

    const clearFilters = useSelector(state => state.EXAMS.clearFilters)

    useEffect(() => {
        onFilterChanged(checked)
    }, [checked])

    useEffect(() => {
        const { clear } = clearFilters

        if (clear) setChecked([])
    }, [clearFilters])

    const onCheckChanged = (f, g, t) => {
        !checked.includes(f) ? setChecked([...checked, f]) : setChecked(checked.filter(i => i !== f))
    }

    if (type == 'chapter') {
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
                        <FullWidth style={{ width: '100%' }}>
                            {filters,filters.map(f => (
                                <Group {...f} />
                            ))} 
                        </FullWidth>
                    </AccordionDetails>
                </Accordion>
            </ItemContainer>
        )
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
                    <FullWidth style={{ width: '100%' }}>
                        {filters.map((f, x) => {

                            return (
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