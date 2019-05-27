import styled, { css } from 'styled-components'

const ProfileImage = styled.div`
    width: 200px;
    height: 200px;
    background: no-repeat center/170% url(/img/5.jpeg);
    border-radius: 100px;
    margin: 40px;

    ${({mini}) => mini && css`
        width: 50px;
        height: 50px;
        margin: 5px;
    `}
    @media (max-width: 990px) {
        margin: 20px;
        width: 120px;
        height: 120px;
        ${({mini}) => mini && css`
            width: 50px;
            height: 50px;
            margin: 5px;
        `}
    }
`

export default ProfileImage
