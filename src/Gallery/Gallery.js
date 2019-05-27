import React  from "react";
import { Link } from "react-router-dom";
import styled, { css }  from 'styled-components'
import  UserGrid  from '../Profile/UserGrid'
import Posts from '../Posts'

const PhotoGrid = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 305px);
  justify-content:center;
  gap:20px;
  grid-auto-rows: 305px;
  
  ${({isCascade}) => isCascade && css`
    grid-auto-rows: 200px;
    gap:5px;
  `}
  @media (max-width: 990px) { 
      gap: 5px;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: calc(33vw - 10px);
  }

`

const LinkGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 20px;
    margin-bottom:20px;
`

const TabLink = styled(Link)`
    text-decoration: none;
    color: #ccc;
    text-transform: uppercase;
    letter-spacing: 3px;
    ${({selected}) => selected && css`
        color: black;
    `}
`

const ImageLink = styled(Link)`
  background: no-repeat center/150% url(/img/${({index}) => index}.jpeg);
  :hover {
      opacity: 0.7;
  }
  ${({isCascade}) => isCascade && css`
    background-size:cover;
    &:nth-of-type(2n) {
        grid-row-start: span 2;
    }
  `}
`

export function Gallery({match, location}) {
    const isCascade = location.search === '?type=cascade'
    return (
      <React.Fragment>
        <UserGrid/>
        <LinkGrid>
            <TabLink selected={!isCascade} to={`${match.url}`}>
                square
            </TabLink>
            <TabLink selected={isCascade} to={{pathname:`${match.url}`, search:"?type=cascade" }}>
                cascade
            </TabLink>
        </LinkGrid>
        <PhotoGrid isCascade={isCascade}>
          {Posts.map(i => (
            <ImageLink
              isCascade={isCascade}
              index={i.id}
              key={i.id}
              to={{
                pathname: `/img/${i.id}`,
                state: { modal: true }
              }}
            >
            </ImageLink>
          ))}
        </PhotoGrid>
      </React.Fragment>
    );
  }