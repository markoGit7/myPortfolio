import {useSelector} from 'react-redux';
import type { RootState } from "../../../app/store";

export function usePages () {

    const activePage = useSelector(
        (state: RootState) => state.pages.activePage
    );

    return { activePage };
};