import styled from 'styled-components'

export const Box = styled.div`
    box-shadow: 0px 0px 45px 0px rgb(0 0 0 / 10%);
    padding: 0 10px;
`

export const Header = styled.div`
    height: 50px;
    width: 100%;
    background: #fff;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9000;
`

export const MobileWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 20px);
    height: 0;
    background: #fff;
    transform: scaleY(0);  
    transition: 0.5s;
    z-index: 1000; 
    padding: 0 10px;

    transform: ${props => props.open ? 'scaleY(100%)' : ''};
    top: ${props => props.open ? '50px' : '0'}
`

export const Image = styled.img`

`

export const SearchIcon = styled.div`
  
`

export const Input = styled.input`
    width: calc(100% - 20px);
    display: block;
    padding: .375rem 10px;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
`

export const MenuItemContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
`

export const MenuItem = styled.p`
    font-size: 24px;
    color: black;
    height: 28px !important;
    width: 114px !important;
    color: #414142;
    font-family: "Helvetica Neue", Helvetica, sans-serif!important;
    font-size: 24px !important;
    letter-spacing: 0 !important;
    line-height: 29px !important;
    display: flex !important;
    width: max-content !important;
    word-spacing: -1px !important;
    align-items: center !important;
    justify-content: center !important;
    margin-bottom: 0px;
    margin-block-start: 0;
`

export const New = styled.p`
    background: #006033;
    border-radius: 20px;
    text-align: center;
    color: white;
    font-size: 12px;
    text-transform: uppercase;
    display: inline-block;
    opacity: ${props => props.new ? '1' : '0'}; 
    margin-left: 10px;
    line-height: 17px;
    padding: 2px 4px; 
` 

export const Bottom = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid green;
    padding: 15px 0;
    border-top: 1px solid rgb(222, 226, 230);
`

export const Type = styled.p`
    font-family: "Helvetica Neue", Helvetica, sans-serif!important;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #4A4A4A;
    margin: 0;
`

export const Name = styled.p`
    font-family: "Helvetica Neue", Helvetica, sans-serif!important;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #4A4A4A;
    margin: 0;
`

export const Logout = styled.p`
    color: #414142!important;
    font-family: "Helvetica Neue", Helvetica, sans-serif!important;
    font-size: 16px!important;
    letter-spacing: 0!important;
    line-height: 18px!important;
    text-decoration: underline !important;
`

export const Select = styled.select`
    width: 100%;
    font-size: 22px;    
    
    background: transparent;
    background-image: url(data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>);
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 15px;
    border: 1px solid #dfdfdf;
    border-radius: 2px;
    padding: 10px 5px; 
    margin-bottom: 20px;
` 
