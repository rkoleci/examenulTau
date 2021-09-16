import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect, useSelector } from 'react-redux'
import { useMediaQuery, Button } from '@material-ui/core'

import { Slider, Exercises, Image, CreateBtn, Container } from './styles.js'
import { changeExamsPage } from '../../core/actions/exams'
import ExerciseAddSVG from '../../assets/exerciseAdd.svg';

const BottomSheet = ({ changeExamsPage }) => {
    const [open, setOpen] = useState(false)
    const [length, setLength] = useState('')

    const isMobile = useMediaQuery('(max-width:450px)');

    const bottomSheet = useSelector(state => state.bottomSheet);

    useEffect(() => {
        const { open, length } = bottomSheet;

        setOpen(open)
        if (length >= 0) {
            setLength(length)
        }
    }, [bottomSheet])

    return (
        <Slider open={open} isMobile={isMobile} >
            <Image src={ExerciseAddSVG} />
            {isMobile ? (
                <Container>
                    <Exercises>{`${length} exercises added`}</Exercises>
                    <CreateBtn onClick={() => changeExamsPage({ menu: 1 })} fullWidth>Create the test</CreateBtn>
                </Container>
            ) :
                <>
                    <Exercises>{`${length} exercises added`}</Exercises>
                    <CreateBtn onClick={() => changeExamsPage({ menu: 1 })}>Create the test</CreateBtn>
                </>}
        </Slider >
    );


}

BottomSheet.propTypes = {
    changeExamsPage: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeExamsPage: p => dispatch(changeExamsPage(p)),
    }
}

export default connect(null, mapDispatchToProps)(BottomSheet)