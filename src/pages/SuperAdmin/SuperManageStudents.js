import React from "react";
import CardList from "../../component/CardList/CardList";
import students from "../../model/superadmin/students.json";

const SuperManageStudents = () => {
  return (
    <section
      className="product_bo managePosts"
      style={{ backgroundColor: "#232659" }}
    >
      <div className="wrapper">
        <h1>Students</h1>
        <CardList propList={students} />
      </div>
    </section>
  );
};

export default SuperManageStudents;
