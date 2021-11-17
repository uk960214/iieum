import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./Home.elements";
import * as g from "../../globalStyles";

import {
  TodayQuestion,
  MusicCard,
  CreateCard,
  QuestionCardGrid,
  MusicCardGrid,
  MusicCardOpened,
} from "../../Components";

const Home = ({ currUser, token, userId }) => {
  const [loaded, setLoad] = useState(false);
  const [placeholder, setPlaceholder] = useState("Loading Content");
  const [pageQuestion, setPageQuestion] = useState();

  return (
    <>
      <S.Background>
        {/* 1.Question Page */}
        <S.TodayQuestionSection>
          <TodayQuestion
            currUser={currUser}
            token={token}
            userId={userId}
            setPageQuestion={setPageQuestion}
          />
        </S.TodayQuestionSection>

        {/* 2.Create Page */}
        <S.CreatePageSection>
          <S.CreateCardLeft>
            <S.HelperLeft>
              <br />
              <br />
              <br />
              당신의 이야기를 들려주세요. 어떤 내용이든 좋아요. 아주 사소한
              것부터 깊은 속마음까지, 떠오르는 대로 적어볼까요?
            </S.HelperLeft>
          </S.CreateCardLeft>
          <CreateCard
            currUser={currUser}
            token={token}
            userId={userId}
            questionId={pageQuestion}
            type="post"
          />
          <S.CreateCardRight>
            <S.HelperQuestionArea>
              <S.HelperRight>
                질문을 듣고,
                <br />
                떠오르는 음악이나 이야기가 있나요?
                <br />
                <br />
                당신의 이야기에 어울리는 음악을
                <br />
                직접 골라주세요.
              </S.HelperRight>
            </S.HelperQuestionArea>
            <S.DoneButtonArea>
              <S.HelperRight>
                이제 당신의 이야기를
                <br />
                다른 사람들과 나눠보세요!
                <br />
                <br />
              </S.HelperRight>
              {/* <g.ButtonWrapper>
                <g.DefaultButton>
                  <g.ButtonIconArea>
                    <g.ButtonIcon className="fa fa-check" />
                  </g.ButtonIconArea>
                  다 썼어요
                </g.DefaultButton>
              </g.ButtonWrapper> */}
            </S.DoneButtonArea>
          </S.CreateCardRight>
        </S.CreatePageSection>

        {/* 3.Question List Page */}
        <S.QuestionListPageSection>
          <S.PageHeaderContainer>
            <S.PageHeader>다른 질문 둘러보기</S.PageHeader>
            <S.ToQuestionListButton>모든 질문 보기 &gt;</S.ToQuestionListButton>
          </S.PageHeaderContainer>
          <QuestionCardGrid currUser={currUser} token={token} userId={userId} />
        </S.QuestionListPageSection>

        {/* 4. Music List Page*/}
        <S.MusicListPageSection>
          <S.PageHeaderContainer>
            <S.PageHeader>최근에 선택된 음악</S.PageHeader>
          </S.PageHeaderContainer>
            <MusicCardGrid
              currUser={currUser} 
              token={token} 
              userId={userId}
            />
        </S.MusicListPageSection>
      </S.Background>
    </>
  );
};

export default Home;
