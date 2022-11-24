import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  if (props.items.length === 0) {
    if (props.alert) {
      return (
        <div
          className="d-flex justify-content-center mt-3"
          style={{ height: "200px" }}
          id="empty"
        >
          <div
            className="d-flex justify-content-center align-items-center w-75"
            style={{ height: "200px", background: "#521A71" }}
          >
            <span>
              No items found for{" "}
              <span className="font-weight-bold">"{props.alert.text}"</span>
            </span>
          </div>
        </div>
      );
    } else {
      return <div className="py-4 no-items">No items are here... yet.</div>;
    }
  }

  return (
    <div className="container py-2">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
