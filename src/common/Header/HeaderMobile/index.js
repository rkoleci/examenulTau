import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import { useTranslatedStrings } from 'config/hooks'

import {
    Box,
    MobileWrapper,
    Header,
    Image,
    Input,
    MenuItemContainer,
    MenuItem,
    Bottom,
    Type,
    Name,
    Logout,
    Select,
    New, 
} from './styles'
import logo from '../../../assets/logo.png' 

const HeaderMobile = () => {
    const [open, setOpen] = useState(false);
    const [expand, setExpand] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

    const { t } = useTranslation();
    const menuList = useTranslatedStrings('menuList')

    useEffect(() => {
        if (open) {
            setExpand(false)
        }
    }, [open])

    const onLogout = () => {

    }

    return (
        <div>
            <Box>
                <Header>
                    <i class="fa fa-bars" style={{ color: '#00000080' }} onClick={() => setOpen(!open)} />
                    <Image src={logo} />
                    <i class="fa fa-search" onClick={() => setExpand(!expand)} />
                </Header>
                {!open && expand && (
                    <div>
                        <Input onChange={e => setSearchTerm(e.target.value)} placeholder={'Cauta'} />
                    </div>
                )}
            </Box>
            <MobileWrapper open={open}>
                {open && expand && (
                    <div>
                        <Input onChange={e => setSearchTerm(e.target.value)} placeholder={'Cauta'} />
                    </div>
                )}
                <Select name="lang" id="lang">
                    <option value="Matematica">Matematica</option>
                    <option value="Romana">Romana</option>
                </Select>
                {menuList.map(m => (
                    <MenuItemContainer>
                        <MenuItem>{m}</MenuItem>
                        <New new>New</New>
                    </MenuItemContainer>
                ))}
                <Bottom>
                    <div>
                      
                    </div>
                    <div>
                        <Type>Cont Profesor:</Type>
                        <Name>koleci rei</Name>
                        <Logout onClick={() => onLogout()}>Log out</Logout>
                    </div>
                </Bottom>
            </MobileWrapper>
        </div>
    )
}

export default HeaderMobile