import React from 'react'
import PropTypes from 'prop-types'
import {
    AccordionDetails,
    Accordion,
    AccordionSummary
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
    ItemContainer,
    Category, 
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