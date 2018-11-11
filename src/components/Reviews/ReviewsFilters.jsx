import React from 'react';
import styled from 'styled-components';


const Filters = styled.div`
  font-size: medium;
  color: #2c2c2c;
  margin: 0 -12px;
`;

const FilterColumn = styled.div`
  font-size: 12px;
  display: inline-block;
  padding: 12px;
  padding-bottom: 6px;
  box-sizing: border-box;
`;

const FilterColumn1 = styled(FilterColumn)`
  width: 41%;
`;

const FilterColumn2 = styled(FilterColumn)`
  width: 17%;
`;

const FilterColumn3 = styled(FilterColumn)`
  width: 25%;
`;

const FilterHeader = styled.div`
  padding: 16px 0 10px;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  position: relative;
`;

const FilterTable = styled.div`
  display: table;
  width: 100%;
  border-spacing: 0 12px;
`;

const FilterRow = styled.div`
  display: table-row;
  width: 100%;
`;

const FilterCell = styled.div`
  display: table-cell;
  white-space: nowrap;
`;

const FilterCheckbox = styled.input`
  display: none;
  &:checked + label:before {
    background-color: #00a680;
    padding-left: 0.7px;
    content: "✓";
  };
`;

const FilterCheckboxLabel = styled.label`
  display: inline-block;
  white-space: nowrap;
  position: relative;
  padding-right: 12px;
  padding-left: 24px;
  box-sizing: content-box;
  cursor: pointer;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 1em;
    height: 1em;
    border: 1px solid #767676;
    border-radius: 2px;
    box-shadow: inset 0 0 2px rgba(0,0,0,0.1);
    font: normal bold normal 1em/1 "TripAdvisor_Regular";
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: "";
  };
`;

const FilterBar = styled(FilterCell)`
  background: #e5e5e5 none repeat scroll 0 0;
  width: 100%;
  position: relative;
  border-radius: 2px;
  cursor: pointer;
`;

const FilterBarFill = styled.span`
  display: inline-block;
  width: 0;
  background: #00a680 none repeat scroll 0 0;
  white-space: pre;
  border-radius: 2px;
`;

const FilterCellValue = styled(FilterCell)`
  padding-left: 8px;
`;

const FilterRadio = styled.input`
  display: none;
  &:checked + label:before {
    color: #00a680;
    font-size: 1.6em;
    content: "●";
  };
`;

const FilterRadioLabel = styled(FilterCheckboxLabel)`
  &:before {
    top: -1px;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    line-height: 15px;
    text-indent: 2px;
  };
`;


const ReviewsFilters = (props) => {

  return (
    <Filters>

      <FilterColumn1>

        <FilterHeader> Traveler Rating </FilterHeader>

        <FilterTable>

          <FilterRow>
            <FilterCheckbox id="excellent" type="checkbox" value="excellent" onClick={props.filterReviews} />
            <FilterCheckboxLabel htmlFor="excellent"> Excellent </FilterCheckboxLabel>
            <FilterBar>
              <FilterBarFill style={{width: (props.reviewTotals.total5star / props.reviewTotals.totalAll * 100) + '%'}}> </FilterBarFill>
            </FilterBar>
            <FilterCellValue> {props.reviewTotals.total5star} </FilterCellValue>
          </FilterRow>

          <FilterRow>
            <FilterCheckbox id="verygood" type="checkbox" value="verygood" onClick={props.filterReviews} />
            <FilterCheckboxLabel htmlFor="verygood"> Very good </FilterCheckboxLabel>
            <FilterBar>
              <FilterBarFill style={{width: (props.reviewTotals.total4star / props.reviewTotals.totalAll * 100) + '%'}}> </FilterBarFill>
            </FilterBar>
            <FilterCellValue> {props.reviewTotals.total4star} </FilterCellValue>
          </FilterRow>

          <FilterRow>
            <FilterCheckbox id="average" type="checkbox" value="average" onClick={props.filterReviews} />
            <FilterCheckboxLabel htmlFor="average"> Average </FilterCheckboxLabel>
            <FilterBar>
              <FilterBarFill style={{width: (props.reviewTotals.total3star / props.reviewTotals.totalAll * 100) + '%'}}> </FilterBarFill>
            </FilterBar>
            <FilterCellValue> {props.reviewTotals.total3star} </FilterCellValue>
          </FilterRow>

          <FilterRow>
            <FilterCheckbox id="poor" type="checkbox" value="poor" onClick={props.filterReviews} />
            <FilterCheckboxLabel htmlFor="poor"> Poor </FilterCheckboxLabel>
            <FilterBar>
              <FilterBarFill style={{width: (props.reviewTotals.total2star / props.reviewTotals.totalAll * 100) + '%'}}> </FilterBarFill>
            </FilterBar>
            <FilterCellValue> {props.reviewTotals.total2star} </FilterCellValue>
          </FilterRow>

          <FilterRow>
            <FilterCheckbox id="terrible" type="checkbox" value="terrible" onClick={props.filterReviews} />
            <FilterCheckboxLabel htmlFor="terrible"> Terrible </FilterCheckboxLabel>
            <FilterBar>
              <FilterBarFill style={{width: (props.reviewTotals.total1star / props.reviewTotals.totalAll * 100) + '%'}}> </FilterBarFill>
            </FilterBar>
            <FilterCellValue> {props.reviewTotals.total1star} </FilterCellValue>
          </FilterRow>

        </FilterTable>
      </FilterColumn1>

      <FilterColumn2>

        <FilterHeader> Traveler type </FilterHeader>

        <FilterTable>

          <FilterRow>
            <FilterCheckbox id="families" type="checkbox" value="families" onClick={props.filterReviews} />
            <FilterCheckboxLabel htmlFor="families"> Families </FilterCheckboxLabel>
          </FilterRow>

          <FilterRow>
            <FilterCheckbox id="couples" type="checkbox" value="couples" onClick={props.filterReviews} />
            <FilterCheckboxLabel htmlFor="couples"> Couples </FilterCheckboxLabel>
          </FilterRow>

          <FilterRow>
            <FilterCheckbox id="solo" type="checkbox" value="solo" onClick={props.filterReviews} />
            <FilterCheckboxLabel htmlFor="solo"> Solo </FilterCheckboxLabel>
          </FilterRow>

          <FilterRow>
            <FilterCheckbox id="business" type="checkbox" value="business" onClick={props.filterReviews} />
            <FilterCheckboxLabel htmlFor="business"> Business </FilterCheckboxLabel>
          </FilterRow>

          <FilterRow>
            <FilterCheckbox id="friends" type="checkbox" value="friends" onClick={props.filterReviews} />
            <FilterCheckboxLabel htmlFor="friends"> Friends </FilterCheckboxLabel>
          </FilterRow>

        </FilterTable>
      </FilterColumn2>

      <FilterColumn2>

        <FilterHeader> Time of year </FilterHeader>

        <FilterTable>

          <FilterRow>
            <FilterCheckbox id="quarter1" type="checkbox" value="quarter1" onClick={props.filterReviews} />
            <FilterCheckboxLabel htmlFor="quarter1"> Mar-May </FilterCheckboxLabel>
          </FilterRow>

          <FilterRow>
            <FilterCheckbox id="quarter2" type="checkbox" value="quarter2" onClick={props.filterReviews} />
            <FilterCheckboxLabel htmlFor="quarter2"> Jun-Aug </FilterCheckboxLabel>
          </FilterRow>

          <FilterRow>
            <FilterCheckbox id="quarter3" type="checkbox" value="quarter3" onClick={props.filterReviews} />
            <FilterCheckboxLabel htmlFor="quarter3"> Sep-Nov </FilterCheckboxLabel>
          </FilterRow>

          <FilterRow>
            <FilterCheckbox id="quarter4" type="checkbox" value="quarter4" onClick={props.filterReviews} />
            <FilterCheckboxLabel htmlFor="quarter4"> Dec-Feb </FilterCheckboxLabel>
          </FilterRow>

        </FilterTable>
      </FilterColumn2>

      <FilterColumn3>

        <FilterHeader> Language </FilterHeader>

        <FilterTable>

          <FilterRow>
            <FilterRadio id="all" type="radio" name="radio" value="all" />
            <FilterRadioLabel htmlFor="all"> All languages </FilterRadioLabel>
          </FilterRow>

          <FilterRow>
            <FilterRadio id="english" type="radio" name="radio" value="english" defaultChecked="true" />
            <FilterRadioLabel htmlFor="english"> English </FilterRadioLabel>
          </FilterRow>

          <FilterRow>
            <FilterRadio id="german" type="radio" name="radio" value="german" />
            <FilterRadioLabel htmlFor="german"> German </FilterRadioLabel>
          </FilterRow>

          <FilterRow>
            <FilterRadio id="korean" type="radio" name="radio" value="korean" />
            <FilterRadioLabel htmlFor="korean"> Korean </FilterRadioLabel>
          </FilterRow>

        </FilterTable>
      </FilterColumn3>

    </Filters>
  );
};

export default ReviewsFilters;