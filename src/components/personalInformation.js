/**
 * Created by ralphbousamra on 2016-12-17.
 */
import React from 'react';

export default class PersonalInformation extends React.Component{
    render(){
        return (
            <div className="container">
                <table className="table">
                    <tbody>
                    <tr className="success">
                        <td>Email</td>
                        <td>ralph.bousamra@mail.mcgill.ca</td>
                    </tr>
                    <tr className="danger">
                        <td>Location</td>
                        <td>TBD</td>
                    </tr>
                    <tr className="info">
                        <td>Date</td>
                        <td>Post Saturday 4 March 2017</td>
                    </tr>
                    <tr className="warning">
                        <td>Time</td>
                        <td>13h00-19h00</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
