import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
    ListItemIcon,
    Checkbox,
    ListItemText,
    AccordionDetails,
    Accordion,
    AccordionSummary
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
import CheckList from './CheckList'

const Group = ({ id, title, items, onChange }) => {
  
    return (
        <ItemContainer>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content" 
                >
                    <Category>{title}</Category>
                </AccordionSummary>
                <AccordionDetails>
                    <FullWidth style={{ width: '100%' }}>
                        <CheckList key={`${id}-checklist`}  items={items} onChange={data => onChange({ title, data })} />
                    </FullWidth>
                </AccordionDetails>
            </Accordion>
        </ItemContainer>
    )
}

Group.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
    onChange: PropTypes.func,
}

export default Group