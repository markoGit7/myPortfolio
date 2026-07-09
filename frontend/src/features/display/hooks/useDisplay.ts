import {useSelector} from 'react-redux';

export function usePages () {

    const activePage = useSelector(state => state.pages.activePage);


    return {
        activePage,
    }
};