import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const balance = useSelector((state) => state.amount);
  return (
    <>
      <h1>Deposit / Withdraw Money</h1>
      {/* <button
        className="btn btn-primary mx-2"
        onClick={() => {
          dispatch(actionCreators.withdrawMoney(100));
        }}
      >
        -
      </button>
      Update Money
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          dispatch(actionCreators.depositMoney(100));
        }}
      >
        +
      </button> */}
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        -
      </button>
      Update Money ({balance})
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          depositMoney(100);
        }}
      >
        +
      </button>
    </>
  );
};

export default Shop;
