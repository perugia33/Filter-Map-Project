import React from 'react';
import './NameAddress.css';

export default function NameAddress(props){
    return (
     <div>
         <table>
             <thead>
                <tr>
                     <th>
                     Name
                    </th>

                    <th>
                    Address
                    </th>
                    <th>
                    Occupation
                    </th>
                </tr>

            </thead>
            <tbody>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.address}</td>
                    <td>{props.occupation}</td>
                </tr>
            </tbody>
         </table>

     </div>
    )

}