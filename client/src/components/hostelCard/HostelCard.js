import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectHostel from "../../actions/selectHostel";

const HostelCard = (props) => {
  const { hostel, selectHostel } = props;
  const hostelData = hostel.hostels.map((hos) => (
    <div className='card' key={hos.slug}>
      <Link
        to={"/hostel/" + hos.slug}
        onClick={() => {
          const temp = hos.slug;
          let clickedHostel = hostel.hostels.filter((hos) => {
            return hos.slug === temp;
          });
          selectHostel(clickedHostel);
        }}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className='card-body' key={hos._id}>
          <h5 className='card-title'>{hos.name}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>{hos.location}</h6>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </Link>
    </div>
  ));

  return <Fragment>{hostelData}</Fragment>;
};

const mapStateToProps = (state) => ({
  hostel: state.retriever,
  loading: state.retriever.loading,
});

export default connect(mapStateToProps, { selectHostel })(HostelCard);
