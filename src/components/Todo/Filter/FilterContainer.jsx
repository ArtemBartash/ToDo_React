import { filterCompletedTaskActionCreator, filterCurrentTaskActionCreator, filterDeletedTaskActionCreator } from "../../../redux/filter-reducer"
import Filter from "./Filter";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        filterState: state.filter.filterState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterDeletedTask: () => {
            dispatch(filterDeletedTaskActionCreator())
        },
        filterCurrentTask: () => {
            dispatch(filterCurrentTaskActionCreator())
        },
        filterCompletedTask: () => {
            dispatch(filterCompletedTaskActionCreator())
        }
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;