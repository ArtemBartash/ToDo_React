const FILTER_DELETED_TASK = 'FILTER-DELETED-TASK';
const FILTER_CURRENT_TASK = 'FILTER-CURRENT-TASK';
const FILTER_COMPLETED_TASK = 'FILTER-COMPLETED-TASK';

let initialState = {
    filterState: {
        currentTasks: true,
        deletedTasks: false,
        completedTasks: false,
    },
};
const filterReducer = (state = initialState, action) => {

    switch(action.type) {

        case FILTER_DELETED_TASK: 
            return {...state, 
                ...state.filterState,
                filterState: {
                currentTasks: false,
                deletedTasks: true,
                completedTasks: false
                }
            };
        
        case FILTER_CURRENT_TASK: 
            return {...state, 
                ...state.filterState,
                filterState: {
                currentTasks: true,
                deletedTasks: false,
                completedTasks: false
                }
            
        }
        case FILTER_COMPLETED_TASK: 
            return {...state, 
                ...state.filterState,
                filterState: {
                currentTasks: false,
                deletedTasks: false,
                completedTasks: true
                }
            
        }
        default:
            return state;
    }
}

export const filterDeletedTaskActionCreator = () => ({type: FILTER_DELETED_TASK})

export const filterCurrentTaskActionCreator = () => ({type: FILTER_CURRENT_TASK})

export const filterCompletedTaskActionCreator = () => ({type: FILTER_COMPLETED_TASK})

export default filterReducer;