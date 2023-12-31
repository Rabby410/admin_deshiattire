import React from "react";
import Breadcrumb from "../partoals/Breadcrumb";

export default function Dashboard() {
  return (
    <>
    <Breadcrumb title={'Dashboard'} />
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-black mb-4">
            <div className="card-body">Primary Card</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-black stretched-link" href="#">
                View Details
              </a>
              <div className="small text-black">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-warning text-black mb-4">
            <div className="card-body">Warning Card</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-black stretched-link" href="#">
                View Details
              </a>
              <div className="small text-black">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-success text-black mb-4">
            <div className="card-body">Success Card</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-black stretched-link" href="#">
                View Details
              </a>
              <div className="small text-black">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-danger text-black mb-4">
            <div className="card-body">Danger Card</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-black stretched-link" href="#">
                View Details
              </a>
              <div className="small text-black">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
