import {connect} from 'react-redux';

import Link from '../../components/atoms/link/Link';

export const mapStateToProps = state => {
    return {
        profDetails: state.prof,
        persDetails:state.pers
    }
};

export const LinkContainer = connect(mapStateToProps) (Link);