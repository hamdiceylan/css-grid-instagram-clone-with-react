import React from "react";
import Posts from '../Posts'
import styled, { createGlobalStyle, css } from 'styled-components'
import { PostGrid, InfoGrid } from './PostGrid'
import { MiniUserGrid } from '../Profile/UserGrid'
import ProfileImage from '../Profile/ProfileImage'

const Image = styled.div`
  width: 305px;
  height: 305px;
  @media (max-width: 990px) {
    width: 100%;
  }
  background: no-repeat center/150% url(/img/${({index}) => index}.jpeg);
  ${({inModal}) => !inModal && css `
    :hover {
      opacity: .7;
    }
  `}
`

const OverFlowHidden = createGlobalStyle`
    body {
        overflow: hidden;
    }
`

const ModalStyled = styled.div`
    position: absolute;
    background: #fff;
    top: ${({top}) => top}px;
    left: 25%;
    right: 25%;
    width: 600px;
    border: 2px solid #444;
    @media (max-width: 990px) {
        left: 0;
        right: 0;
        top: ${({top}) => top}px;
        width: auto;
    }
`

export function Modal({ match, history }) {
    let image = Posts[parseInt(match.params.id, 10) - 1];
  
    if (!image) return null;
  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div
        onClick={back}
        style={{
          position: "absolute",
          top: 0,
          left: 25,
          bottom: 0,
          right: 25,
          height: 5000,
          background: "rgba(0, 0, 0, 0.8)",

        }}
      >
        <ModalStyled
          top={window.scrollY + (window.innerHeight/2) - 250}
        >
          <OverFlowHidden/>
          <PostGrid>
            <Image inModal index={image.id} />
            <InfoGrid>
                <MiniUserGrid>
                    <ProfileImage mini/>
                    <h3>Grid Galery</h3>
                </MiniUserGrid>
                <div>                
                    <h2>Image number {image.title}</h2>
                </div>
                <div>45 Likes</div>
            </InfoGrid>
          </PostGrid>
        </ModalStyled>
      </div>
    );
  }