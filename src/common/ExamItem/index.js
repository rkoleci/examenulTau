import React from 'react'
import {
    Grid,
    Card,
    Typography,
    CardContent,
    CardActionArea,
    CardActions,
    Button,
    IconButton
} from '@material-ui/core'
import AccessibleIcon from '@material-ui/icons/Accessible';
import ImageIcon from '@material-ui/icons/Image';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

import {
    Category,
    ReportError,
    Description,
    Index,
    AddButton,
    RemoveButton,
} from './styles'

const ExamItem = ({ id, curriculum, body: { content }, selected, onSelect }) => {
    return (
        <Grid key={id} container xs={12}>
            <Card>
                <CardContent>
                    <div style={styles.inlineSpaced}>
                        <Category>{curriculum}</Category>
                        <ReportError>Error?</ReportError>
                    </div>
                    {/* <BlockMath
                        math={content}
                        errorColor={'#cc0000'}
                    /> */}
                    <Description>{content}</Description>
                </CardContent>
                <div style={styles.inlineSpaced}>
                    <div style={styles.inlineSpaced}>
                        <AccessibleIcon />
                        <Index>a 8-a</Index>
                    </div>
                    <div style={styles.inlineSpaced}>
                        <IconButton aria-label="delete">
                            <ImageIcon />
                        </IconButton>
                        {!selected ?
                            <AddButton onClick={() => onSelect(id)} variant="contained">Add to the test</AddButton>
                            :
                            <RemoveButton onClick={() => onSelect(id)} variant="contained">Remove</RemoveButton>}
                    </div>
                </div>
            </Card>
        </Grid>
    )
}

const styles = {
    inlineSpaced: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px 10px 10px'
    }
}

export default ExamItem;