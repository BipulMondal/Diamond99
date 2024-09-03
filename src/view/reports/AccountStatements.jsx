import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";
import { requestHandler } from "../../utils/requestHandler";
import moment from "moment";
import { toast } from "react-toastify";

const AccountStatements = () => {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState([]);
  console.log("transaction", transaction?.transactions);

  const fatchAccountStatement = async () => {
    try {
      let token = localStorage.getItem("token");
      let res = await requestHandler({
        endpoint: "/transaction?page=1&limit=10",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res && res?.success) {
        setTransaction(res?.data);
        toast.success(res?.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    fatchAccountStatement();
  }, []);

  const tableData = {
    columns: [
      {
        label: "S.No",
        field: "S_No",
        sort: "asc",
        width: 50,
      },
      {
        label: "Date",
        field: "Date",
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
        label: "Closing",
        field: "closing",
        sort: "asc",
        width: 100,
        height: 100,
      },
      {
        label: "Description",
        field: "Description",
        sort: "asc",
        width: 100,
        height: 100,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
        height: 100,
      },
    ],
    rows:
      transaction?.transactions?.length > 0
        ? transaction?.transactions?.map((item, idx) => {
            console.log("iitteemm", item);
            return {
              S_No: (
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div
                      className="widget-content-left flex2"
                      style={{ textAlign: "center" }}
                    >
                      <div className="zwidget-heading" style={{ opacity: 1 }}>
                        {idx + 1}
                      </div>
                    </div>
                  </div>
                </div>
              ),
              Date: (
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div
                      className="widget-content-left flex2"
                      style={{ textAlign: "center" }}
                    >
                      <div className="zwidget-heading" style={{ opacity: 1 }}>
                        {moment(item.createdAt).format("YYYY/MM/DD")}
                      </div>
                    </div>
                  </div>
                </div>
              ),
              Credit: (
                <div
                  className="widget-content p-0"
                  key={idx}
                  style={{ textAlign: "center" }}
                >
                  <div className="widget-content-wrapper">
                    <div
                      className="widget-content-left flex2"
                      style={{ textAlign: "center" }}
                    >
                      <div className="zwidget-heading" style={{ opacity: 1 }}>
                        {item.amount}
                      </div>
                    </div>
                  </div>
                </div>
              ),
              Debit: (
                <div
                  className="widget-content p-0"
                  key={idx}
                  style={{ textAlign: "center" }}
                >
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
              closing: (
                <div
                  className="widget-content p-0"
                  key={idx}
                  style={{ textAlign: "center" }}
                >
                  <div className="widget-content-wrapper">
                    <div
                      className="widget-content-left flex2"
                      style={{ textAlign: "center" }}
                    >
                      <div className="zwidget-heading" style={{ opacity: 1 }}>
                        {item.closingBalance}
                      </div>
                    </div>
                  </div>
                </div>
              ),
              Description: (
                <div
                  className="widget-content p-0"
                  key={idx}
                  style={{ textAlign: "center" }}
                >
                  <div className="widget-content-wrapper">
                    <div
                      className="widget-content-left flex2"
                      style={{ textAlign: "center" }}
                    >
                      <div className="zwidget-heading" style={{ opacity: 1 }}>
                        FROM {item.fromUser.username} TO {item.toUser.username}
                      </div>
                    </div>
                  </div>
                </div>
              ),
              action: (
                <div>
                  <button
                    className="ml-2 btn-icon btn-icon-only btn btn-outline-success"
                    // onClick={() => navigate(`/edit-city/${item?._id}`)}
                  >
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>

                  <button className="ml-2 btn-icon btn-icon-only btn btn-outline-danger ">
                    <i className="fa-solid fa-trash-can" />
                  </button>
                </div>
              ),
            };
          })
        : [],
  };
  return (
    <>
      <div className="statement_main">
        <h5> Account Statement</h5>
        <form>
          <div className="container-fluid">
            <div className="row gx-2">
              <div class="form-group col-md-2">
                <label for="inputPassword" class="col-form-label">
                  Search By Client Name
                </label>
                <div class="">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option selected>Search...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              {/* From */}
              <div class="form-group col-md-2">
                <label for="inputPassword" class="col-form-label">
                  From
                </label>
                <div class="">
                  <input type="date" class="form-control" id="inputPassword" />
                </div>
              </div>
              {/* To */}
              <div class="form-group col-md-2">
                <label for="inputPassword" class="col-form-label">
                  To
                </label>
                <div class="">
                  <input type="date" class="form-control" id="inputPassword" />
                </div>
              </div>
              <div class="form-group col-md-1 load_button">
                <button class="btn btn-warning">load</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="table_div">
        <Table data={tableData} />
      </div>
    </>
  );
};

export default AccountStatements;
