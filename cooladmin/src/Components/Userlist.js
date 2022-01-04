import React , {useState,useEffect}  from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Userlist = () => {



    const [Customers , setCustomers]  = useState([]);
    useEffect( () => {
           
     async function getCustomer() {
 
         const response = await axios.get('http://localhost/symfony_api/public/index.php/api/customers');
         // console.log(response.data);
         if(response.data.status == 200) {
         console.log(response.data.data);
         const customersList = response.data.data;
         setCustomers(customersList);
 
         }
     }
 
     getCustomer();


 
    } );


    function deleteCustomer(id) {
        // alert(id);
      var confirmBox =   window.confirm(
            "Do you really want to delete this User ?"
          )
          if (confirmBox === true) {
            
    
            async function delCustomer() {
    
                const response = await axios.get(`http://localhost/symfony_api/public/index.php/api/customers_delete/${id}`);
                if(response.data.status == 200) {


                    const response = await axios.get('http://localhost/symfony_api/public/index.php/api/customers');
                    // console.log(response.data);
                    if(response.data.status == 200) {
                    console.log(response.data.data);
                    const customersList = response.data.data;
                    setCustomers(customersList);
                    }
              
                }
            }
    
            delCustomer();
    
          } else {
              return false;
          }
    
    }

    return (
        <React.Fragment>

            <div className="row">
                <div className="col-lg-12">
                <div className="overview-wrap float-right">
                        <Link to="/adduser" className="btn btn-info btn-md">
                            <i className="zmdi zmdi-plus"></i>add user</Link>
                    </div>
                    <h2 className="title-1 m-b-25 text-center">All User List </h2>
                    <div className="table-responsive table--no-card m-b-40">
                        <table className="table table-borderless table-striped table-earning">
                            <thead>
                                
                            <tr>
                               <th>S.No.</th>
                               <th>Customer Name</th>
                               <th>Email</th>
                               <th className="text-right">CustomerId</th>
                               <th className="text-right">Mobile</th>
                               <th className="text-right">City</th>
                               <th>View</th>
                                <th>Edit</th>
                                 <th>Delete</th>               
                                </tr>

                            </thead>
                            <tbody>
                            {Customers.map((Customer,i) =>( 
                                <tr>
                                    <td>{(i++)+1}</td>  
                                     <td>{Customer.name}</td>
                                     <td>{Customer.email}</td>
                                     <td className="text-right">{Customer.id}</td>
                                     <td className="text-right">{Customer.mobile}</td>
                                     <td className="text-right">{Customer.city}</td>
                                    <td><button type="reset" className="btn btn-warning btn-sm">
                                    <i className="fa fa-eye"></i> view
                                        </button>
                                        </td>
                                    <td>
                                        <button type="reset" className="btn btn-info btn-sm">
                                            <i className="fa fa-pencil-square-o"></i>edit</button>
                                            </td>  
                                    <td><button type="button" className="btn btn-danger btn-sm" onClick={(e)=>deleteCustomer(Customer.id)}  >
                                            <i className="fa fa-times-circle-o"></i> delete
                                        </button></td>
                                </tr>

                               ) )}

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </React.Fragment>
    );
}
export default Userlist;
