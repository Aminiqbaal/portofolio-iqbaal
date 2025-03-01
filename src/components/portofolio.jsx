import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Portofolio = () => {
    return (
        <div className='container mx-auto max-w-[1200px] p-3 overflow-hidden'>
            <div className="flex justify-between py-5 items-center">
                <div className='font-secondary text-center font-bold mb-12'>
                    {/* <h4 className='text-secondary mb-3 text-[30px] text-left'>Recent</h4> */}
                    <h4 className='text-secondary mb-3 text-[40px]'>Portofolio</h4>
                </div>
                <div className='font-secondary text-center font-bold mb-12'>
                    <h4 className='text-secondary mb-0 text-[40px] text-right'>20+</h4>
                    <h2 className='mb-3 text-[20px] text-right'>Complete Projects</h2>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", textAlign: "center" }}>
                <Tabs forceRenderTabPanel defaultIndex={1}>
                    <TabList>
                        <Tab style={{ padding: "10px", cursor: "pointer", border: "1px solid #ccc", borderRadius: "5px", margin: "5px" }}>Software Developments</Tab>
                        <Tab style={{ padding: "10px", cursor: "pointer", border: "1px solid #ccc", borderRadius: "5px", margin: "5px" }}>System Analyst & UI/UX Designs</Tab>
                    </TabList>
                    <TabPanel>
                        <Tabs forceRenderTabPanel>
                            <TabList>
                                <Tab style={{ padding: "10px", cursor: "pointer", border: "1px solid #ccc", borderRadius: "5px", margin: "5px" }}>Website</Tab>
                                <Tab style={{ padding: "10px", cursor: "pointer", border: "1px solid #ccc", borderRadius: "5px", margin: "5px" }}>Mobile</Tab>
                            </TabList>
                            {/* Web */}
                            <TabPanel>
                                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                                    <div style={{ width: "200px", margin: "10px", border: "1px solid #ddd", borderRadius: "5px", overflow: "hidden" }}>
                                        <img src="/images/read.jpeg" alt="" style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                                        <div style={{ padding: "10px" }}>
                                            <h3>Web Registration Digital</h3>
                                            <Popup
                                                trigger={
                                                    <button
                                                        style={{
                                                            padding: "5px 10px",
                                                            border: "none",
                                                            background: "#007bff",
                                                            color: "white",
                                                            borderRadius: "3px",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        Learn More
                                                    </button>
                                                }
                                                modal
                                                closeOnDocumentClick={false}
                                            >
                                                {(close) => (
                                                    <div
                                                        style={{
                                                            maxWidth: "100%",
                                                            padding: "20px",
                                                            background: "white",
                                                            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                                                            textAlign: "center",
                                                            margin: "auto",
                                                            borderRadius: "0", // Remove border radius
                                                        }}
                                                    >
                                                        {/* Close button */}
                                                        <button
                                                            onClick={close}
                                                            style={{
                                                                position: "absolute",
                                                                top: "10px",
                                                                right: "10px",
                                                                border: "none",
                                                                background: "transparent",
                                                                color: "#ff5b5b",
                                                                fontSize: "18px",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            &times;
                                                        </button>

                                                        {/* Modal content */}
                                                        <div style={{ textAlign: "left", marginTop: "20px" }}>
                                                            <table style={{ width: "100%", textAlign: "left", marginTop: "10px", borderCollapse: "collapse" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Description:</th>
                                                                        <td>READ is a website used to manage the list of guests who attend a certain event.</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Platform:</th>
                                                                        <td>Website</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Type:</th>
                                                                        <td>CMS</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>FrontEnd:</th>
                                                                        <td>HTML, CSS</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Backend:</th>
                                                                        <td>PHP</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Database:</th>
                                                                        <td>MySQL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Framework:</th>
                                                                        <td>CodeIgniter</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Link:</th>
                                                                        <td>
                                                                            <a
                                                                                href="#"
                                                                                style={{
                                                                                    color: "#007bff",
                                                                                    textDecoration: "none",
                                                                                    display: "inline-block",
                                                                                }}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                            >
                                                                                Click Here
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                )}
                                            </Popup>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            {/* Mobile */}
                            <TabPanel>
                                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                                    <div style={{ width: "200px", margin: "10px", border: "1px solid #ddd", borderRadius: "5px", overflow: "hidden" }}>
                                        <img src="/images/codestate.png" alt="" style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                                        <div style={{ padding: "10px" }}>
                                            <h3>Accounting Codestate</h3>
                                            <Popup
                                                trigger={
                                                    <button
                                                        style={{
                                                            padding: "5px 10px",
                                                            border: "none",
                                                            background: "#007bff",
                                                            color: "white",
                                                            borderRadius: "3px",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        Learn More
                                                    </button>
                                                }
                                                modal
                                                closeOnDocumentClick={false}
                                            >
                                                {(close) => (
                                                    <div
                                                        style={{
                                                            maxWidth: "100%",
                                                            padding: "20px",
                                                            background: "white",
                                                            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                                                            textAlign: "center",
                                                            margin: "auto",
                                                            borderRadius: "0", // Remove border radius
                                                        }}
                                                    >
                                                        {/* Close button */}
                                                        <button
                                                            onClick={close}
                                                            style={{
                                                                position: "absolute",
                                                                top: "10px",
                                                                right: "10px",
                                                                border: "none",
                                                                background: "transparent",
                                                                color: "#ff5b5b",
                                                                fontSize: "18px",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            &times;
                                                        </button>

                                                        {/* Modal content */}
                                                        <div style={{ textAlign: "left", marginTop: "20px" }}>
                                                            <table style={{ width: "100%", textAlign: "left", marginTop: "10px", borderCollapse: "collapse" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Description:</th>
                                                                        <td>Accounting Codestate is a platform for managing and tracking accounting-related tasks for businesses and individuals.</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Platform:</th>
                                                                        <td>Mobile</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Type:</th>
                                                                        <td>Accounting</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Technology:</th>
                                                                        <td>React Native</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Backend:</th>
                                                                        <td>Node.js</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Database:</th>
                                                                        <td>MongoDB</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Link:</th>
                                                                        <td>
                                                                            <a
                                                                                href="#"
                                                                                style={{
                                                                                    color: "#007bff",
                                                                                    textDecoration: "none",
                                                                                    display: "inline-block",
                                                                                }}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                            >
                                                                                Click Here
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                )}
                                            </Popup>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                        </Tabs>
                    </TabPanel>
                    {/* System Analyst & UI/UX Designs */}
                    <TabPanel>
                        <Tabs forceRenderTabPanel>
                            <TabList>
                                <Tab style={{ padding: "10px", cursor: "pointer", border: "1px solid #ccc", borderRadius: "5px", margin: "5px" }}>Website</Tab>
                                <Tab style={{ padding: "10px", cursor: "pointer", border: "1px solid #ccc", borderRadius: "5px", margin: "5px" }}>Mobile</Tab>
                            </TabList>
                            <TabPanel>
                                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                                    <div style={{ width: "200px", margin: "10px", border: "1px solid #ddd", borderRadius: "5px", overflow: "hidden" }}>
                                        <img src="/images/myorbit.png" alt="" style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                                        <div style={{ padding: "10px" }}>
                                            <h3>Telkomsel MyOrbit</h3>
                                            <Popup
                                                trigger={
                                                    <button
                                                        style={{
                                                            padding: "5px 10px",
                                                            border: "none",
                                                            background: "#007bff",
                                                            color: "white",
                                                            borderRadius: "3px",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        Learn More
                                                    </button>
                                                }
                                                modal
                                                closeOnDocumentClick={false}
                                            >
                                                {(close) => (
                                                    <div
                                                        style={{
                                                            maxWidth: "100%",
                                                            padding: "20px",
                                                            background: "white",
                                                            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                                                            textAlign: "center",
                                                            margin: "auto",
                                                            borderRadius: "0", // Remove border radius
                                                        }}
                                                    >
                                                        {/* Close button */}
                                                        <button
                                                            onClick={close}
                                                            style={{
                                                                position: "absolute",
                                                                top: "10px",
                                                                right: "10px",
                                                                border: "none",
                                                                background: "transparent",
                                                                color: "#ff5b5b",
                                                                fontSize: "18px",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            &times;
                                                        </button>

                                                        {/* Modal content */}
                                                        <div style={{ textAlign: "left", marginTop: "20px" }}>
                                                            <table style={{ width: "100%", textAlign: "left", marginTop: "10px", borderCollapse: "collapse" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Description:</th>
                                                                        <td>MyOrbit is an E-Commerce for purchasing modems & Telkomsel packages.</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Platform:</th>
                                                                        <td>Website</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Type:</th>
                                                                        <td>CRM</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>FrontEnd:</th>
                                                                        <td>ReactJS</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Backend:</th>
                                                                        <td>Golang</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Database:</th>
                                                                        <td>MySQL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th style={{ textAlign: "left", paddingRight: "10px", verticalAlign: "top" }}>Link:</th>
                                                                        <td>
                                                                            <a
                                                                                href="#"
                                                                                style={{
                                                                                    color: "#007bff",
                                                                                    textDecoration: "none",
                                                                                    display: "inline-block",
                                                                                }}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                            >
                                                                                Click Here
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                )}
                                            </Popup>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    )
}
export default Portofolio
