import React from 'react';
import { VISIBILITY_FILTERS } from "../constants";
import { connect } from "react-redux";
import { setFilter } from "../redux/actionCreators";

const VisibilityFilters = ({ activeFilter, setFilter  }) => {
  return (
    <ul className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <li
            key={`visibility-filter-${currentFilter}`}
            className={(activeFilter === currentFilter) ? "filter filter_active" : "filter"}
            onClick={() => setFilter(currentFilter)}
          >
            {currentFilter}
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};

export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
