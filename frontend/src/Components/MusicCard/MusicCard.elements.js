import styled from "styled-components";
import { nearWhite } from "../../Colors";

export const MusicWrapper = styled.section`
  width: 40%;
  display: flex;
  justify-content: center;
  margin-left: 55%;
  margin-right: 10%;
`;

export const MusicCover = styled.img`
  width: 50%;

  margin: auto;

  filter: drop-shadow(3psx 3px 3px #000);
`;

export const MusicInfo = styled.div`
  margin-right: 5%;
`;

export const MusicTitle = styled.p`
  margin: auto;

  text-align: right;
`;

export const MusicArtist = styled.p`
  margin: 0.5rem auto;

  font-size: 0.8rem;
  text-align: right;
`;
