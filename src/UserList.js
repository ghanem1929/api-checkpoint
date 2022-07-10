import axios from "axios";
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [loading, setLoading] = useState(true);
  const [listOfUSer, setListOfUSer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUSer(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          {listOfUSer.map((item) => (
            /* <div style={{ flex: "1 1 350px" }} key={item.id}>
              {item.name}
            </div> */

            <div className="col-md-4 animated fadeIn" key={item.id}>
              {" "}
              <a href={item.website} style={{ all: "unset" }}>
                <div className="card">
                  <div className="card-body">
                    <div className="avatar">
                      <img className="card-img-top" alt="" />
                    </div>
                    <h5 className="card-title">{item.name.toUpperCase()}</h5>
                    <p className="card-text">
                      {item.address.city +
                        ", " +
                        item.address.street.toUpperCase()}
                      <br />
                      <span className="phone">{item.phone}</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
