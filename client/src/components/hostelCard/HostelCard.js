import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectHostel from "../../actions/selectHostel";

const HostelCard = props => {
  const { hostel, loading, selectHostel } = props;
  const hostelData = hostel.hostels.map(hos => (
    <Link
      to='/hosteldetail'
      onClick={() => {
        const temp = hos._id;
        let clickedHostel = hostel.hostels.filter(hos => {
          return hos._id === temp;
        });
        selectHostel(clickedHostel);
      }}
    >
      <div className='card-deck' style={{ width: "30rem" }} key={hos._id}>
        <div className='card-body'>
          <h5 className='card-title'>{hos.name}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>{hos.location}</h6>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </Link>
  ));

  return (
    <Fragment>
      <div>{hostelData}</div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  hostel: state.retriever,
  loading: state.retriever.loading
});

export default connect(mapStateToProps, { selectHostel })(HostelCard);
