import React from "react";
import { useNavigate, useEffect } from "react-router-dom";
import Table from "../../../src/components/Table"

const Accountstatement = () => {
  const navigate = useNavigate();

  //   const fatchAccountStatement = async () => {
  //     try {
  //       let token = localStorage.getItem("token");
  //       let res = await requestHandler({
  //         endpoint: "/transaction?page=1&limit=10",
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       console.log("ddddd", res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fatchAccountStatement();
  //   }, []);

  const filterData = [];

  const tableData = {
    columns: [
      {
        label: "Date",
        field: "Date",
        sort: "asc",
        width: 50,
      },
      {
        label: "Sr No",
        field: "Sr No",
        sort: "asc",
        width: 100,
      },
      {
        label: "Credit",
        field: "Credit",
        sort: "asc",
        width: 100,
      },
      {
        label: "Debit",
        field: "Debit",
        sort: "asc",
        width: 100,
        height: 100,
      },
      {
        label: "Pts",
        field: "Pts",
        sort: "asc",
        width: 100,
        height: 100,
      },
      {
        label: "Remark",
        field: "Remark",
        sort: "asc",
        width: 100,
        height: 100,
      },
    ],
    rows:
      filterData?.length > 0
        ? filterData?.map((item, idx) => {
            return {
              username: (
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div
                      className="widget-content-left flex2"
                      style={{ textAlign: "center" }}
                    >
                      <div className="zwidget-heading" style={{ opacity: 1 }}>
                        {item.cityName}
                      </div>
                    </div>
                  </div>
                </div>
              ),
              city_name: (
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div
                      className="widget-content-left flex2"
                      style={{ textAlign: "center" }}
                    >
                      <div className="zwidget-heading" style={{ opacity: 1 }}>
                        {item.cityName}
                      </div>
                    </div>
                  </div>
                </div>
              ),
              picture: (
                <div
                  className="widget-content p-0"
                  key={idx}
                  style={{ textAlign: "center" }}
                >
                  <div className="widget-content-wrapper">
                    <img
                      src={`${item.picture}`}
                      alt=""
                      style={{
                        height: "70px",
                        width: "120px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      className="img-fluid"
                    />
                  </div>
                </div>
              ),
              action: (
                <div>
                  <button className="me-2 btn-icon btn-icon-only btn btn-outline-danger">
                    <i className="fa-solid fa-trash-can" />
                  </button>

                  <button
                    className="me-2 btn-icon btn-icon-only btn btn-outline-success"
                    onClick={() => navigate(`/edit-city/${item?._id}`)}
                  >
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                </div>
              ),
            };
          })
        : [],
  };
  return (
    <>
      <div className="account_statement">
        <div className="account_header">
        <h5> Account Statement</h5>
        </div>
    
        <form>
          <div className="container-fluid account_body">
            <div className="row gx-2">
              
              {/* From */}
              <div class="form-group col-md-2">
                <div class="">
                  <input type="date" class="form-control" id="inputPassword" />
                </div>
              </div>
              {/* To */}
              <div class="form-group col-md-2">
                <div class="">
                  <input type="date" class="form-control" id="inputPassword" />
                </div>
              </div>
              <div class="form-group col-md-3">
                <div class="">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option disabled>Select Report Type</option>
                    <option selected value="1">Deposit/Withdraw Reports</option>
                    <option value="2">Sport Report</option>
                    <option value="3">Casino Reports</option>
                    <option  value="3">Third-Party Casino Reports</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-2 load_button">
                <button class="btn btn-primary account_btn">Submit</button>
              </div>
            </div>
          </div>
        </form>
    
      <div className="table_div">
        <Table data={tableData} /> 
        </div>
        </div>
    </>
  );
};

export default Accountstatement;
