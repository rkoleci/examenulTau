import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
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

const CheckList = ({ items }) => {
    const classes = useStyles();
    const [checked, setChecked] = useState([]);

    const onCheckChanged = item => {

    }

    return (
        <>
            {items.map(i => (
                <ItemContainer>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={classes.root}
                        >
                            <Inline>
                                <Checkbox
                                    edge="start"
                                    checked={checked.includes(i.title)}
                                    onChange={() => onCheckChanged(i.title)}
                                    tabIndex={-1}
                                    disableRipple
                                    color={'primary'}
                                />
                                <SubCategory>{i.title}</SubCategory>
                            </Inline>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FullWidth style={{ width: '100%' }}>
                                <NestedList list={i.options} />
                            </FullWidth>
                        </AccordionDetails>
                    </Accordion>
                </ItemContainer>
            ))}
        </>
    )
}

CheckList.propTypes = {
    items: PropTypes.array,
}

export default CheckList
