import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Checkbox,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector } from 'react-redux'

import {
    ItemContainer,
    Category,
    Item,
    SeeLess,
    SeeMoreContainer,
    SeeMore,
    Another,
    Chapters,
    ViewLess
} from './styles'

const LIST_SIZE = 4

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

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
                    <div>
                        {filters.map((f, x) => {
                            if (!expanded && x > LIST_SIZE) return null

                            return (
                                <div
                                    onClick={() => onCheckChanged(f)}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        marginBottom: -20,
                                    }}
                                >
                                    <Checkbox
                                        style={{
                                            color: "#006C33",
                                        }}
                                        checked={checked.includes(f)}
                                        onChange={() => onCheckChanged(f)}
                                    />
                                    <Item>{f}</Item>
                                </div>
                            )
                        })}
                    </div>
                </AccordionDetails>
            </Accordion>
        </ItemContainer>
    )

    return (
        <ItemContainer>
            <Category>{title}:</Category>
            {filters.map((f, x) => {
                if (!expanded && x > LIST_SIZE) return null

                return (
                    <div
                        onClick={() => onCheckChanged(f)}
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginBottom: -20,
                        }}
                    >
                        <Checkbox
                            style={{
                                color: "#006C33",
                            }}
                            checked={checked.includes(f)}
                            onChange={() => onCheckChanged(f)}
                        />
                        <Item>{f}</Item>
                    </div>
                )
            })}

            {filters.length > LIST_SIZE && expanded && <SeeLess onClick={() => setExpanded(!expanded)}>{`See less`}</SeeLess>}
            {filters.length > LIST_SIZE && !expanded &&
                <SeeMoreContainer onClick={() => setExpanded(!expanded)}>
                    <Another>Another </Another>
                    <Chapters>{` ${filters.length - LIST_SIZE} chapters. `}</Chapters>
                    <SeeMore>View more</SeeMore>
                </SeeMoreContainer>
            }

        </ItemContainer>
    )
}

export default FiltersBlock;