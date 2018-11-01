import React from 'react';
import styled from 'styled-components';

const Search = styled.div`
`;

const KeywordFilter = styled.div`
  margin-top: 12px;
  font-size: 12px;
  color: #000a12;
  font-weight: bold;
`;

const SearchInput = styled.div`
  position: relative;
  margin-top: 8px;
  z-index: 1;
  height: 30px;
  background: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
  box-sizing: border-box;
  box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
`;

const SearchIcon = styled.span`
  font-size: 15px;
  padding-left: 12px;
  cursor: pointer;
  &:before {
    pdisplay: inline-block;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    font-size: inherit;
    line-height: 1;
    font-family: "TripAdvisor_Regular"!important;
    // -ms-transform: rotate(-0.001deg);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    speak: none;
  };
`;

const SearchBar = styled.input`
  width: 100%;
  font-family: inherit;
  text-align: left;
  font-size: 12px;
  padding: 8px;
  border: none;
  box-sizing: border-box;
  background: transparent;
`;




let ReviewsSearch = (props) => {

  return (
    <Search>

      <KeywordFilter> Show reviews that mention </KeywordFilter>

      <SearchInput>
        <SearchIcon> 🔍 </SearchIcon>
        <SearchBar type="text" placeholder="Search reviews" />
      </SearchInput>

    </Search>
  )
};

export default ReviewsSearch;