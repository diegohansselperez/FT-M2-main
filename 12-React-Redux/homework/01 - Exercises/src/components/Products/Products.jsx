import { connect } from "react-redux";
import React from "react";
import { getStoreName } from "../../redux/actions/actions";
import "./products.css";
import Card from "../Card/Card";

export function Products(props) {
  const { list, storeName, getStoreName } = props;

  React.useEffect(() => {
    getStoreName();
  },[]);

  return (
    <>
      <div className="productsBg">
        <h1 className="productsTl">{storeName}</h1>
        <div className="productsList">
          {list?.map(({ name, price, id }) => (
            <Card name={name} price={price} id={id} key={id} />
          ))}
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    list: state.list,
    storeName: state.storeName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getStoreName: () => dispatch(getStoreName()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
