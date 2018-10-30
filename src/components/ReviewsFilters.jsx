import React from 'react';
import styled from 'styled-components';

const Filters = styled.div`
  font-size: medium;
  color: #2c2c2c;
  margin: 0 -12px;
  // position: static;
  // overflow: inherit;
`;

const FilterColumn = styled.div`
  font-size: 12px;
  display: inline-block;
  padding: 12px;
  padding-bottom: 6px;
  box-sizing: border-box;
  // max-height: 98%;
`;

const FilterColumn1 = styled(FilterColumn)`
  width: 41%;
  // flex: none;
`;

const FilterColumn2 = styled(FilterColumn)`
  width: 17%;
  // flex: none;
`;

const FilterColumn3 = styled(FilterColumn)`
  width: 25%;
  // flex: none;
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
  // padding-bottom: 12px;
  // position: relative;
`;

const FilterCell = styled.div`
  display: table-cell;
  white-space: nowrap;
`;

const FilterCheckbox = styled.input`
  display: none;
`;

const FilterLabel = styled.label`
  display: inline-block;
  white-space: nowrap;
  // overflow: hidden;
  // padding-left: 35px;
  // margin-bottom: 12px;
  // font-size: 12px;
  position: relative;
  padding-right: 12px;
  padding-left: 24px;
  box-sizing: content-box;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 1em;
    height: 1em;
    background-color: #fff;
    border: 1px solid #767676;
    border-radius: 2px;
    box-shadow: inset 0 0 2px rgba(0,0,0,0.1);
    font: normal bold normal 1em/1 "TripAdvisor_Regular";
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: "";
    &:checked {
      background-color: #000
    }
  };
`;

const FilterBar = styled(FilterCell)`
  background: #e5e5e5 none repeat scroll 0 0;
  width: 100%;
  position: relative;
  border-radius: 2px;
  cursor: pointer;
  // display: inline-block;
  // height: 12px;
`;

const FilterBarFill = styled.span`
  display: inline-block;
  width: 80%;
  background: #00a680 none repeat scroll 0 0;
  // height: 100%;
  white-space: pre;
  border-radius: 2px;
`;

const FilterCellValue = styled(FilterCell)`
  padding-left: 8px;
`;




let ReviewsFilters = (props) => {

  return (
    props === undefined ?
      <div>No Data</div>
    :
      <Filters>

        <FilterColumn1>

          <FilterHeader> Traveler Rating </FilterHeader>

          <FilterTable>

            <FilterRow className="rating5">
              <FilterCheckbox type="checkbox" value="5" />
              <FilterLabel> Excellent </FilterLabel>
              <FilterBar>
                <FilterBarFill style={{width: '65%'}}> </FilterBarFill>
              </FilterBar>
              <FilterCellValue> {props.total5 || '1,310'} </FilterCellValue>
            </FilterRow>

            <FilterRow className="rating4">
              <FilterCheckbox type="checkbox" value="4" />
              <FilterLabel> Very good </FilterLabel>
              <FilterBar>
                <FilterBarFill style={{width: '18%'}}> </FilterBarFill>
              </FilterBar>
              <FilterCellValue> {props.total4 || '222'} </FilterCellValue>
            </FilterRow>

            <FilterRow className="rating3">
              <FilterCheckbox type="checkbox" value="3" />
              <FilterLabel> Average </FilterLabel>
              <FilterBar>
                <FilterBarFill style={{width: '10%'}}> </FilterBarFill>
              </FilterBar>
              <FilterCellValue> {props.total3 || '44'} </FilterCellValue>
            </FilterRow>

            <FilterRow className="rating2">
              <FilterCheckbox type="checkbox" value="2" />
              <FilterLabel> Poor </FilterLabel>
              <FilterBar>
                <FilterBarFill style={{width: '5%'}}> </FilterBarFill>
              </FilterBar>
              <FilterCellValue> {props.total2 || '14'} </FilterCellValue>
            </FilterRow>

            <FilterRow className="rating1">
              <FilterCheckbox type="checkbox" value="1" />
              <FilterLabel> Terrible </FilterLabel>
              <FilterBar>
                <FilterBarFill style={{width: '2%'}}> </FilterBarFill>
              </FilterBar>
              <FilterCellValue> {props.total1 || '8'} </FilterCellValue>
            </FilterRow>

          </FilterTable>
        </FilterColumn1>

        <FilterColumn2>

          <FilterHeader> Traveler type </FilterHeader>

          <FilterTable>

            <FilterRow>
              <FilterCheckbox type="checkbox" value="Families" />
              <FilterLabel> Families </FilterLabel>
            </FilterRow>

            <FilterRow>
              <FilterCheckbox type="checkbox" value="Couples" />
              <FilterLabel> Couples </FilterLabel>
            </FilterRow>

            <FilterRow>
              <FilterCheckbox type="checkbox" value="Solo" />
              <FilterLabel> Solo </FilterLabel>
            </FilterRow>

            <FilterRow>
              <FilterCheckbox type="checkbox" value="Business" />
              <FilterLabel> Business </FilterLabel>
            </FilterRow>

            <FilterRow>
              <FilterCheckbox type="checkbox" value="Friends" />
              <FilterLabel> Friends </FilterLabel>
            </FilterRow>

          </FilterTable>
        </FilterColumn2>

        <FilterColumn2>

          <FilterHeader> Time of year </FilterHeader>

          <FilterTable>

            <FilterRow>
              <FilterCheckbox type="checkbox" value="Mar-May" />
              <FilterLabel> Mar-May </FilterLabel>
            </FilterRow>

            <FilterRow>
              <FilterCheckbox type="checkbox" value="Jun-Aug" />
              <FilterLabel> Jun-Aug </FilterLabel>
            </FilterRow>

            <FilterRow>
              <FilterCheckbox type="checkbox" value="Sep-Nov" />
              <FilterLabel> Sep-Nov </FilterLabel>
            </FilterRow>

            <FilterRow>
              <FilterCheckbox type="checkbox" value="Dec-Feb" />
              <FilterLabel> Dec-Feb </FilterLabel>
            </FilterRow>

          </FilterTable>
        </FilterColumn2>

        <FilterColumn3>

          <FilterHeader> Language </FilterHeader>

          <FilterTable>

            <FilterRow>
              <FilterCheckbox type="radio" value="All languages" />
              <FilterLabel> All languages </FilterLabel>
            </FilterRow>

            <FilterRow>
              <FilterCheckbox type="radio" value="English" />
              <FilterLabel> English </FilterLabel>
            </FilterRow>

            <FilterRow>
              <FilterCheckbox type="radio" value="German" />
              <FilterLabel> German </FilterLabel>
            </FilterRow>

            <FilterRow>
              <FilterCheckbox type="radio" value="Korean" />
              <FilterLabel> Korean </FilterLabel>
            </FilterRow>

          </FilterTable>
        </FilterColumn3>

      </Filters>
  )
};

export default ReviewsFilters;