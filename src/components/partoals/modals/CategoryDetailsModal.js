import React from "react";
import Modal from "react-bootstrap/Modal";

const CategoryDetailsModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size={"props.size"}
        aria-labelledby="category_details_modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="category_details_modal">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className={"my-table table table-hover table-striped table-bordered"}>
            <tbody>
                <tr>
                    <th>Id</th>
                    <td>{props.category.id}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{props.category.name}</td>
                </tr>
                <tr>
                    <th>Slug</th>
                    <td>{props.category.slug}</td>
                </tr>
                {props.category.category_name != undefined ?

                <tr>
                    <th>Slug</th>
                    <td>{props.category.category_name}</td>
                </tr>: null
            }
                <tr>
                    <th>Description</th>
                    <td>{props.category.description}</td>
                </tr>
                <tr>
                    <th>Serial</th>
                    <td>{props.category.serial}</td>
                </tr>
                <tr>
                    <th>Status</th>
                    <td>{props.category.status}</td>
                </tr>
                <tr>
                    <th>Create By</th>
                    <td>{props.category.created_by}</td>
                </tr>
                <tr>
                    <th>Created At</th>
                    <td>{props.category.created_at}</td>
                </tr>
                <tr>
                    <th>updated At</th>
                    <td>{props.category.updated_at}</td>
                </tr>
                <tr>
                    <th>Photo</th>
                    <td><img src={props.category.photo} className="img-thumbnail" alt='deshiattire' /></td>
                </tr>
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CategoryDetailsModal;
