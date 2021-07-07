import React from "react";
import { Link } from "react-router-dom";
import { TiDocumentText, TiMessages } from "react-icons/ti";
import { BsSearch, BsFileText } from "react-icons/bs";
import "./MainSideNav.css";
function MainSideNav() {
  return (
    <>
      <div className="sidenav-container">
        <div className="cafe-info-action">
          <div className="info-action-tab">
            <p className="info-tab-link">
              <Link to="">카페 정보</Link>
            </p>
            <p className="info-tab-link">
              <Link to="">나의 활동</Link>
            </p>
          </div>

          <div className="cafe-info-data">
            <div className="cafe-thumb"></div>
            <div className="manager">
              <div className="ico-manager">매니저</div>
              <div className="bold">
                <Link to="">매니저 닉네임</Link>
              </div>
              <p className="data-list">
                <Link to="">since 2021.07.06</Link>
              </p>
              <p className="data-list">카페소개</p>
            </div>
          </div>

          <div className="member-info-data">
            <div className="my-info">
              <div className="mask"></div>
              <div className="my-info-block">
                <p className="bold">Nickname</p>
                <p className="data-list">가입 2021.07.07</p>
              </div>
            </div>
            <div className="my-info-grade">
              <div clsssName="data-list">열심회원</div>
              <Link to="">맴버등급 안내</Link>
            </div>
            <div className="info-data">
              <div className="my-ex">
                <div className="flex">
                  <TiDocumentText size="20" />
                  <p className="data-list">
                    <Link to="">내가 쓴글 보기</Link>
                  </p>
                </div>
                <div className="data-count"> xxx개</div>
              </div>
              <div className="my-ex">
                <div className="flex">
                  <TiMessages size="20" />
                  <div className="data-list">
                    <Link to="">내가 쓴 댓글 보기</Link>
                  </div>
                </div>
                <p className="data-count"> xxx개</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cafe-write-btn blk">
          <Link to="">카페 글쓰기</Link>
        </div>
        <div className="cafe-chat-btn">
          <Link to="">채팅</Link>
        </div>
        <div className="search-bar">
          <input type="text" />
          <BsSearch size="18" />
        </div>
        <div className="post-list">
          <div className="post-object">
            <BsFileText size="18" />
            <Link to="">전체게시판</Link>
          </div>
          <div className="post-object">
            <BsFileText size="18" />
            <Link to="">잡담게시판</Link>
          </div>
          <div className="post-object">
            <BsFileText size="18" />
            <Link to="">공지게시판</Link>
          </div>
          <div className="post-object">
            <BsFileText size="18" />
            <Link to="">영화게시판</Link>
          </div>
          <div className="post-object">
            <BsFileText size="18" />
            <Link to="">고민게시판</Link>
          </div>
          <div className="post-object">
            <BsFileText size="18" />
            <Link to="">포토게시판</Link>
          </div>
          <div className="post-object">
            <BsFileText size="18" />
            <Link to="">유머게시판</Link>
          </div>
          <div className="post-object">
            <BsFileText size="18" />
            <Link to="">뉴스게시판</Link>
          </div>
          <div className="post-object">
            <BsFileText size="18" />
            <Link to="">패션게시판</Link>
          </div>
          <div className="post-object">
            <BsFileText size="18" />
            <Link to="">근황게시판</Link>
          </div>
          <div className="post-object">
            <BsFileText size="18" />
            <Link to="">게임게시판</Link>
          </div>
          <div className="post-object">
            <BsFileText size="18" />
            <Link to="">영화 추천 게시판</Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default MainSideNav;
