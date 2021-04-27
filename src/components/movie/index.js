// import Movie from  "../../redux/modules/movie";
import Movie from  "../../components/movie/Movie";
import { like } from "../../redux/modules/movie";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    like: state.like
});

const mapDispatchToProps = dispatch => ({
    like: () => dispatch(like())
    // like: () => {
    //     console.log('mapDispatchToProps')
    // }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);