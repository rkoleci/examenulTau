import React from 'react'
import PropTypes from 'prop-types'
import {
    Grid,
    Card,
    CardContent,
    IconButton
} from '@material-ui/core'
import AccessibleIcon from '@material-ui/icons/Accessible';
import ImageIcon from '@material-ui/icons/Image';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

import {
    Category,
    ReportError,
    Description,
    Index,
    AddButton,
    RemoveButton,
    Image,
    InlineSpaced,
} from './styles'
import difficultyEasy from '../../assets/difficultyEasy.svg'
import difficultyMedium from '../../assets/difficultyMedium.svg'
import difficultyHard from '../../assets/difficultyHard.svg'
import difficultyVHard from '../../assets/difficultyVHard.svg'

const ExamItem = ({ id, curriculum, body: { content }, selected, onSelect, onPreviewOpen, onErrorDialog }) => {
    return (
        <Grid key={id} container xs={12}>
            <Card>
                <CardContent>
                    <InlineSpaced   >
                        <Category>{curriculum}</Category>
                        <ReportError onClick={() => onErrorDialog(id)}>Error?</ReportError>
                    </InlineSpaced>
                    {/* <BlockMath
                        math={content}
                        errorColor={'#cc0000'}
                    /> */}
                    <Description>{content}</Description>
                </CardContent>
                <InlineSpaced padding>
                    <InlineSpaced   >
                        <Image src={difficultyVHard} />
                        <Index>a 8-a</Index>
                    </InlineSpaced>
                    <InlineSpaced   >
                        <IconButton aria-label="delete" onClick={() => onPreviewOpen('img')}>
                            <ImageIcon />
                        </IconButton>
                        {!selected ?
                            <AddButton startIcon={<AddIcon />} onClick={() => onSelect(id)} variant="contained">ADD</AddButton>
                            :
                            <RemoveButton startIcon={<DeleteIcon />} onClick={() => onSelect(id)} variant="contained">Remove</RemoveButton>}
                    </InlineSpaced>
                </InlineSpaced>
            </Card>
        </Grid>
    )
}

ExamItem.propTypes = {
    id: PropTypes.string,
    curriculum: PropTypes.string,
    body: PropTypes.object,
    selected: PropTypes.bool,
    onSelect: PropTypes.func,
    onPreviewOpen: PropTypes.func,
    onErrorDialog: PropTypes.func,
}

export default ExamItem;