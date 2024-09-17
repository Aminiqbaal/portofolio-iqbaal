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
                    <h4 className='text-secondary mb-0 text-[40px] text-right'>22</h4>
                    <h2 className='mb-3 text-[20px] text-right'>Complete Projects</h2>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-between text-center'>
                <Tabs forceRenderTabPanel defaultIndex={1}>
                    <TabList>
                        <Tab>Software Developments</Tab>
                        <Tab>System Analyst & UI/UX Designs</Tab>
                    </TabList>
                    <TabPanel>
                        <Tabs forceRenderTabPanel>
                            <TabList>
                                <Tab>Website</Tab>
                                <Tab>Mobile</Tab>
                            </TabList>
                            {/* Web */}
                            <TabPanel>
                                <div className='flex flex-col lg:flex-row items-start justify-between'>
                                    <div className='w-full'>
                                        <div className='grid grid-cols-2 lg:grid-cols-2 gap-4 text-center'>

                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/read.jpeg' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                    <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-gradient'>
                                                                        <Popup trigger={<button>Web Registration Digital</button>} position="bottom">
                                                                            <div>
                                                                                <Tabs>
                                                                                    <TabList>
                                                                                        <Tab>Desc</Tab>
                                                                                        <Tab>Tech</Tab>
                                                                                        <Tab>Link</Tab>
                                                                                    </TabList>
                                                                                    <TabPanel>
                                                                                        <div>
                                                                                            <p>READ is a a website that is used to manage the list of guests who attend a certain event</p>
                                                                                        </div>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <table>
                                                                                            <tr>
                                                                                                <th className='text-right'>Platform :</th>
                                                                                                <td>Website</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Type :</th>
                                                                                                <td>CMS</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>FrontEnd :</th>
                                                                                                <td>HTML, CSS</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Backend :</th>
                                                                                                <td>PHP</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Database :</th>
                                                                                                <td>MySQL</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Framework :</th>
                                                                                                <td>CodeIgniter</td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <a className='text-secondary' target="_blank">
                                                                                            Click Here
                                                                                        </a>
                                                                                    </TabPanel>
                                                                                </Tabs>
                                                                            </div>
                                                                        </Popup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/port3_1.jpg' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-gradient'>
                                                                    <Popup trigger={<button>Firecek Web</button>} position="bottom">
                                                                        <div>
                                                                            <Tabs>
                                                                                <TabList>
                                                                                    <Tab>Desc</Tab>
                                                                                    <Tab>Tech</Tab>
                                                                                    <Tab>Link</Tab>
                                                                                </TabList>
                                                                                <TabPanel>
                                                                                    <div>
                                                                                        <p> Firecek is a fire extinguisher checking application that makes it easy for you to manage, monitor, and inspect the fire extinguisher you have</p>
                                                                                    </div>
                                                                                </TabPanel>
                                                                                <TabPanel>
                                                                                    <table>
                                                                                        <tr>
                                                                                            <th className='text-right'>Platform :</th>
                                                                                            <td>Website</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Type :</th>
                                                                                            <td>CRM</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Technology :</th>
                                                                                            <td>PHP</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Framework :</th>
                                                                                            <td>Laravel</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Database :</th>
                                                                                            <td>MySQL</td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </TabPanel>
                                                                                <TabPanel>
                                                                                    <a href='https://web.firecek.com/' className='text-secondary' target="_blank">
                                                                                        Click Here
                                                                                    </a>
                                                                                </TabPanel>
                                                                            </Tabs>
                                                                        </div>
                                                                    </Popup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/stickergenerator.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                    <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-gradient'>
                                                                        <Popup trigger={<button>Sticker Generator</button>} position="bottom">
                                                                            <div>
                                                                                <Tabs>
                                                                                    <TabList>
                                                                                        <Tab>Desc</Tab>
                                                                                        <Tab>Tech</Tab>
                                                                                        <Tab>Link</Tab>
                                                                                    </TabList>
                                                                                    <TabPanel>
                                                                                        <div>
                                                                                            <p>Sticker Generator is a a website to generate QR Code sticker for Fire Extinguisher Firecek</p>
                                                                                        </div>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <table>
                                                                                            <tr>
                                                                                                <th className='text-right'>Platform :</th>
                                                                                                <td>Website</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Type :</th>
                                                                                                <td>CMS</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>FrontEnd :</th>
                                                                                                <td>Android Java</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Backend :</th>
                                                                                                <td>PHP</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Database :</th>
                                                                                                <td>MySQL</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Framework :</th>
                                                                                                <td>CodeIgniter</td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <a className='text-secondary' target="_blank">
                                                                                            Click Here
                                                                                        </a>
                                                                                    </TabPanel>
                                                                                </Tabs>
                                                                            </div>
                                                                        </Popup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/rsds.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-primary'>
                                                                <Popup trigger={<button>Company Profile RSUD Dr. Soetomo</button>} position="bottom">
                                                                    <div>
                                                                        <Tabs>
                                                                            <TabList>
                                                                                <Tab>Desc</Tab>
                                                                                <Tab>Tech</Tab>
                                                                                <Tab>Link</Tab>
                                                                            </TabList>
                                                                            <TabPanel>
                                                                                <div>
                                                                                    <p>Dr. Soetomo Regional General Hospital is a hospital owned by the East Java Provincial Government located in Surabaya City, East Java. It is named after the national hero Soetomo.</p>
                                                                                </div>
                                                                            </TabPanel>
                                                                            <TabPanel>
                                                                                <table>
                                                                                    <tr>
                                                                                        <th className='text-right'>Platform :</th>
                                                                                        <td>Website</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Type :</th>
                                                                                        <td>CMS</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Technology :</th>
                                                                                        <td>VueJS</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Framework :</th>
                                                                                        <td>Laravel</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Database :</th>
                                                                                        <td>MySQL</td>
                                                                                    </tr>
                                                                                </table>
                                                                            </TabPanel>
                                                                            <TabPanel>
                                                                                <a href='https://rsudrsoetomo.jatimprov.go.id/' className='text-secondary' target="_blank">
                                                                                    Click Here
                                                                                </a>
                                                                            </TabPanel>
                                                                        </Tabs>
                                                                    </div>
                                                                </Popup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/port11.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-primary'>
                                                                <Popup trigger={<button>Helpdesk ITKI RSUD Dr. Soetomo</button>} position="bottom">
                                                                    <div>
                                                                        <Tabs>
                                                                            <TabList>
                                                                                <Tab>Desc</Tab>
                                                                                <Tab>Tech</Tab>
                                                                                <Tab>Link</Tab>
                                                                            </TabList>
                                                                            <TabPanel>
                                                                                <div>
                                                                                    <p>Dr. Soetomo Regional General Hospital is a hospital owned by the East Java Provincial Government located in Surabaya City, East Java. It is named after the national hero Soetomo.</p>
                                                                                </div>
                                                                            </TabPanel>
                                                                            <TabPanel>
                                                                                <table>
                                                                                    <tr>
                                                                                        <th className='text-right'>Platform :</th>
                                                                                        <td>Website</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Type :</th>
                                                                                        <td>CMS</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Technology :</th>
                                                                                        <td>VueJS</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Framework :</th>
                                                                                        <td>Laravel</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Database :</th>
                                                                                        <td>MySQL</td>
                                                                                    </tr>
                                                                                </table>
                                                                            </TabPanel>
                                                                            <TabPanel>
                                                                                <a href='https://rsudrsoetomo.jatimprov.go.id/' className='text-secondary' target="_blank">
                                                                                    Click Here
                                                                                </a>
                                                                            </TabPanel>
                                                                        </Tabs>
                                                                    </div>
                                                                </Popup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/pi.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-primary'>
                                                                <Popup trigger={<button>Permohonan Informasi RSUD Dr. Soetomo</button>} position="bottom">
                                                                    <div>
                                                                        <Tabs>
                                                                            <TabList>
                                                                                <Tab>Desc</Tab>
                                                                                <Tab>Tech</Tab>
                                                                                <Tab>Link</Tab>
                                                                            </TabList>
                                                                            <TabPanel>
                                                                                <div>
                                                                                    <p>Dr. Soetomo Regional General Hospital is a hospital owned by the East Java Provincial Government located in Surabaya City, East Java. It is named after the national hero Soetomo.</p>
                                                                                </div>
                                                                            </TabPanel>
                                                                            <TabPanel>
                                                                                <table>
                                                                                    <tr>
                                                                                        <th className='text-right'>Platform :</th>
                                                                                        <td>Website</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Type :</th>
                                                                                        <td>CMS</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Technology :</th>
                                                                                        <td>VueJS</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Framework :</th>
                                                                                        <td>Laravel</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Database :</th>
                                                                                        <td>MySQL</td>
                                                                                    </tr>
                                                                                </table>
                                                                            </TabPanel>
                                                                            <TabPanel>
                                                                                <a href='https://rsudrsoetomo.jatimprov.go.id/permohonan-informasi' className='text-secondary' target="_blank">
                                                                                    Click Here
                                                                                </a>
                                                                            </TabPanel>
                                                                        </Tabs>
                                                                    </div>
                                                                </Popup>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/plp.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-primary'>
                                                                <Popup trigger={<button>Permohonan Informasi RSUD Dr. Soetomo</button>} position="bottom">
                                                                    <div>
                                                                        <Tabs>
                                                                            <TabList>
                                                                                <Tab>Desc</Tab>
                                                                                <Tab>Tech</Tab>
                                                                                <Tab>Link</Tab>
                                                                            </TabList>
                                                                            <TabPanel>
                                                                                <div>
                                                                                    <p>Dr. Soetomo Regional General Hospital is a hospital owned by the East Java Provincial Government located in Surabaya City, East Java. It is named after the national hero Soetomo.</p>
                                                                                </div>
                                                                            </TabPanel>
                                                                            <TabPanel>
                                                                                <table>
                                                                                    <tr>
                                                                                        <th className='text-right'>Platform :</th>
                                                                                        <td>Website</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Type :</th>
                                                                                        <td>CMS</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Technology :</th>
                                                                                        <td>VueJS</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Framework :</th>
                                                                                        <td>Laravel</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Database :</th>
                                                                                        <td>MySQL</td>
                                                                                    </tr>
                                                                                </table>
                                                                            </TabPanel>
                                                                            <TabPanel>
                                                                                <a href='https://rsudrsoetomo.jatimprov.go.id/pengaduan-layanan-publik' className='text-secondary' target="_blank">
                                                                                    Click Here
                                                                                </a>
                                                                            </TabPanel>
                                                                        </Tabs>
                                                                    </div>
                                                                </Popup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/cv_kan.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-primary'>
                                                                <Popup trigger={<button>PT. Ketahanan Aspal Nasional</button>} position="bottom">
                                                                    <div>
                                                                        <Tabs>
                                                                            <TabList>
                                                                                <Tab>Desc</Tab>
                                                                                <Tab>Tech</Tab>
                                                                                <Tab>Link</Tab>
                                                                            </TabList>
                                                                            <TabPanel>
                                                                                <div>
                                                                                    <p>Established in 2016, we have experience in making quality products to strengthen and advance infrastructure in Indonesia, especially in the field of pavement.</p>
                                                                                </div>
                                                                            </TabPanel>
                                                                            <TabPanel>
                                                                                <table>
                                                                                    <tr>
                                                                                        <th className='text-right'>Platform :</th>
                                                                                        <td>Website</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Type :</th>
                                                                                        <td>CMS</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Technology :</th>
                                                                                        <td>VueJS</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Framework :</th>
                                                                                        <td>Laravel</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className='text-right'>Database :</th>
                                                                                        <td>MySQL</td>
                                                                                    </tr>
                                                                                </table>
                                                                            </TabPanel>
                                                                            <TabPanel>
                                                                                <a href='https://www.ptkan.co.id/' className='text-secondary' target="_blank">
                                                                                    Click Here
                                                                                </a>
                                                                            </TabPanel>
                                                                        </Tabs>
                                                                    </div>
                                                                </Popup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/infaqbm.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-primary'>
                                                                    <Popup trigger={<button>Infaq PonPes Bahrul Maghfiroh</button>} position="bottom">
                                                                        <div>
                                                                            <Tabs>
                                                                                <TabList>
                                                                                    <Tab>Desc</Tab>
                                                                                    <Tab>Tech</Tab>
                                                                                    <Tab>Link</Tab>
                                                                                </TabList>
                                                                                <TabPanel>
                                                                                    <div>
                                                                                        <p>Pondok Pesantren Bahrul Maghfiroh Malang is an Islamic Boarding School under the auspices of the Bahrul Maghfiroh Cinta Indonesia Foundation.</p>
                                                                                    </div>
                                                                                </TabPanel>
                                                                                <TabPanel>
                                                                                    <table>
                                                                                        <tr>
                                                                                            <th className='text-right'>Platform :</th>
                                                                                            <td>Website</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Type :</th>
                                                                                            <td>CMS</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Technology :</th>
                                                                                            <td>VueJS</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Framework :</th>
                                                                                            <td>Laravel</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Database :</th>
                                                                                            <td>MySQL</td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </TabPanel>
                                                                                <TabPanel>
                                                                                    <a href='https://bahrulmaghfirohmalang.or.id/' className='text-secondary' target="_blank">
                                                                                        Click Here
                                                                                    </a>
                                                                                </TabPanel>
                                                                            </Tabs>
                                                                        </div>
                                                                    </Popup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/uisi.jpg' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-primary'>
                                                                    <Popup trigger={<button>SIM Gedung UISI</button>} position="bottom">
                                                                        <div>
                                                                            <Tabs>
                                                                                <TabList>
                                                                                    <Tab>Desc</Tab>
                                                                                    <Tab>Tech</Tab>
                                                                                    <Tab>Link</Tab>
                                                                                </TabList>
                                                                                <TabPanel>
                                                                                    <div>
                                                                                        <p>UISI is a private university in Indonesia which is under the management of the Semen Indonesia Foundation or SMIF. UISI is a transformation of STiMSI which has been running for 2 years.</p>
                                                                                    </div>
                                                                                </TabPanel>
                                                                                <TabPanel>
                                                                                    <table>
                                                                                        <tr>
                                                                                            <th className='text-right'>Platform :</th>
                                                                                            <td>Website</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Type :</th>
                                                                                            <td>CMS</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Technology :</th>
                                                                                            <td>PHP</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Framework :</th>
                                                                                            <td>Laravel</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Database :</th>
                                                                                            <td>MySQL</td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </TabPanel>
                                                                                <TabPanel>
                                                                                    <a href='' className='text-secondary' target="_blank">
                                                                                        Click Here
                                                                                    </a>
                                                                                </TabPanel>
                                                                            </Tabs>
                                                                        </div>
                                                                    </Popup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/raprima.jpg' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-primary'>
                                                                    <Popup trigger={<button>E-Commerce Raprima Tempeh</button>} position="bottom">
                                                                        <div>
                                                                            <Tabs>
                                                                                <TabList>
                                                                                    <Tab>Desc</Tab>
                                                                                    <Tab>Tech</Tab>
                                                                                    <Tab>Link</Tab>
                                                                                </TabList>
                                                                                <TabPanel>
                                                                                    <div>
                                                                                        <p>Raprima is is online shopping store for specializing tempeh culture for Raprima product base in USA. We Provide you best price online ever. If you looking for the best price online ever. If you are looking for best price for your tempeh bussiness, I encourge you to shop  in big quantity so you can save more from shipping cost.</p>
                                                                                    </div>
                                                                                </TabPanel>
                                                                                <TabPanel>
                                                                                    <table>
                                                                                        <tr>
                                                                                            <th className='text-right'>Platform :</th>
                                                                                            <td>Website</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Type :</th>
                                                                                            <td>CMS</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Technology :</th>
                                                                                            <td>PHP</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Framework :</th>
                                                                                            <td>Laravel</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Database :</th>
                                                                                            <td>MySQL</td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </TabPanel>
                                                                                <TabPanel>
                                                                                    <a href='https://raprima.us/' className='text-secondary' target="_blank">
                                                                                        Click Here
                                                                                    </a>
                                                                                </TabPanel>
                                                                            </Tabs>
                                                                        </div>
                                                                    </Popup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </TabPanel>
                            {/* Mobile */}
                            <TabPanel>
                                <div className='flex flex-col lg:flex-row items-start justify-between'>
                                    <div className='w-full'>
                                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 text-center'>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/codestate.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                    <a href='https://www.figma.com/design/0kTZIgt8Z584mGcDz9SoGt/Audit-TI?node-id=8-2&t=sUbKTk2QIFCwbpeX-1' className='text-gradient' target="_blank">
                                                                        Accounting Codestate
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/readm.jpeg' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                    <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-gradient'>
                                                                        <Popup trigger={<button>Apps Registration Digital</button>} position="bottom">
                                                                            <div>
                                                                                <Tabs>
                                                                                    <TabList>
                                                                                        <Tab>Desc</Tab>
                                                                                        <Tab>Tech</Tab>
                                                                                        <Tab>Link</Tab>
                                                                                    </TabList>
                                                                                    <TabPanel>
                                                                                        <div>
                                                                                            <p>READ is a a website that is used to manage the list of guests who attend a certain event</p>
                                                                                        </div>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <table>
                                                                                            <tr>
                                                                                                <th className='text-right'>Platform :</th>
                                                                                                <td>Mobile</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Type :</th>
                                                                                                <td>CMS</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>FrontEnd :</th>
                                                                                                <td>Android Java</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Backend :</th>
                                                                                                <td>PHP</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Database :</th>
                                                                                                <td>MySQL</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Framework :</th>
                                                                                                <td>CodeIgniter</td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <a className='text-secondary' target="_blank">
                                                                                            Click Here
                                                                                        </a>
                                                                                    </TabPanel>
                                                                                </Tabs>
                                                                            </div>
                                                                        </Popup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/firecekm.jpeg' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                    <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-gradient'>
                                                                        <Popup trigger={<button>Apps Firecek</button>} position="bottom">
                                                                            <div>
                                                                                <Tabs>
                                                                                    <TabList>
                                                                                        <Tab>Desc</Tab>
                                                                                        <Tab>Tech</Tab>
                                                                                        <Tab>Link</Tab>
                                                                                    </TabList>
                                                                                    <TabPanel>
                                                                                        <div>
                                                                                            <p>Firecek is a fire extinguisher checking application that makes it easy for you to manage, monitor, and inspect the fire extinguisher you have</p>
                                                                                        </div>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <table>
                                                                                            <tr>
                                                                                                <th className='text-right'>Platform :</th>
                                                                                                <td>Mobile</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Type :</th>
                                                                                                <td>CRM</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>FrontEnd :</th>
                                                                                                <td>Flutter</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Backend :</th>
                                                                                                <td>PHP</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Database :</th>
                                                                                                <td>MySQL</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Framework :</th>
                                                                                                <td>Laravel</td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <a className='text-secondary' target="_blank">
                                                                                            Click Here
                                                                                        </a>
                                                                                    </TabPanel>
                                                                                </Tabs>
                                                                            </div>
                                                                        </Popup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel>
                        <Tabs forceRenderTabPanel>
                            <TabList>
                                <Tab>Website</Tab>
                                <Tab>Mobile</Tab>
                            </TabList>
                            <TabPanel>
                                <div className='flex flex-col lg:flex-row items-start justify-between'>
                                    <div className='w-full lg:pt-[50px] lg:ml-[50px]'>
                                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 text-center'>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/myorbit.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-gradient'>
                                                                    <Popup trigger={<button>Telkomsel MyOrbit</button>} position="bottom">
                                                                        <div>
                                                                            <Tabs>
                                                                                <TabList>
                                                                                    <Tab>Desc</Tab>
                                                                                    <Tab>Tech</Tab>
                                                                                    <Tab>Link</Tab>
                                                                                </TabList>
                                                                                <TabPanel>
                                                                                    <div>
                                                                                        <p> MyOrbit is an E-Commerce for purchasing modems & packages Telkomsel.</p>
                                                                                    </div>
                                                                                </TabPanel>
                                                                                <TabPanel>
                                                                                    <table>
                                                                                        <tr>
                                                                                            <th className='text-right'>Platform :</th>
                                                                                            <td>Website</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Type :</th>
                                                                                            <td>CRM</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>FrontEnd :</th>
                                                                                            <td>ReactJS</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Backend :</th>
                                                                                            <td>Golang</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Database :</th>
                                                                                            <td>MySQL</td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </TabPanel>
                                                                                <TabPanel>
                                                                                    <a href='https://www.figma.com/design/gtC4w1XOxnwUJgyjFD6mKn/Portofolio-1?node-id=0-1&t=xbHBOJKuLzYNnXTG-1' className='text-secondary' target="_blank">
                                                                                        Click Here
                                                                                    </a>
                                                                                </TabPanel>
                                                                            </Tabs>
                                                                        </div>
                                                                    </Popup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/gudangfresh.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-gradient'>
                                                                    <Popup trigger={<button>Gudang Fresh</button>} position="bottom">
                                                                        <div>
                                                                            <Tabs>
                                                                                <TabList>
                                                                                    <Tab>Desc</Tab>
                                                                                    <Tab>Tech</Tab>
                                                                                    <Tab>Link</Tab>
                                                                                </TabList>
                                                                                <TabPanel>
                                                                                    <div>
                                                                                        <p> Gudang Fresh is an E-Commerce for purchasing vegetables and fruits at Superindo.</p>
                                                                                    </div>
                                                                                </TabPanel>
                                                                                <TabPanel>
                                                                                    <table>
                                                                                        <tr>
                                                                                            <th className='text-right'>Platform :</th>
                                                                                            <td>Website</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Type :</th>
                                                                                            <td>CRM</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Technology :</th>
                                                                                            <td>Figma</td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </TabPanel>
                                                                                <TabPanel>
                                                                                    <a href='https://www.figma.com/design/tiqfGhQ0Q51zKK2oAs6BRW/Portofolio-2?node-id=2-35531&t=xbHBOJKuLzYNnXTG-1' className='text-secondary' target="_blank">
                                                                                        Click Here
                                                                                    </a>
                                                                                </TabPanel>
                                                                            </Tabs>
                                                                        </div>
                                                                    </Popup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/realisasi-anggaran.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-gradient'>
                                                                    <Popup trigger={<button>Budget Realization</button>} position="bottom">
                                                                        <div>
                                                                            <Tabs>
                                                                                <TabList>
                                                                                    <Tab>Desc</Tab>
                                                                                    <Tab>Tech</Tab>
                                                                                    <Tab>Link</Tab>
                                                                                </TabList>
                                                                                <TabPanel>
                                                                                    <div>
                                                                                        <p> Budget Realization to facilitate the process of control, monitoring and accelerate the process of budget realization.</p>
                                                                                    </div>
                                                                                </TabPanel>
                                                                                <TabPanel>
                                                                                    <table>
                                                                                        <tr>
                                                                                            <th className='text-right'>Platform :</th>
                                                                                            <td>Website</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Type :</th>
                                                                                            <td>CRM</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>FrontEnd :</th>
                                                                                            <td>AngularJS</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Backend :</th>
                                                                                            <td>Golang</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Database :</th>
                                                                                            <td>PostgreSQL</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>ERP :</th>
                                                                                            <td>SAP</td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </TabPanel>
                                                                                <TabPanel>
                                                                                    <a href='https://www.figma.com/design/gtC4w1XOxnwUJgyjFD6mKn/Portofolio-1?node-id=2319-3338&t=LYuAcS9SGxLD6KSS-1' className='text-secondary' target="_blank">
                                                                                        Click Here
                                                                                    </a>
                                                                                </TabPanel>
                                                                            </Tabs>
                                                                        </div>
                                                                    </Popup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/tms.jpg' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>F
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-gradient'>
                                                                    <Popup trigger={<button>Tools Management</button>} position="bottom">
                                                                        <div>
                                                                            <Tabs>
                                                                                <TabList>
                                                                                    <Tab>Desc</Tab>
                                                                                    <Tab>Tech</Tab>
                                                                                    <Tab>Link</Tab>
                                                                                </TabList>
                                                                                <TabPanel>
                                                                                    <div>
                                                                                        <p> Tools Management to facilitate the search for parts/tools and can organize all the parts needed so that they are not lost or confused with others. In addition, here you can also add, check availability, and borrow parts/tools needed by workers at GMF AeroAsia.</p>
                                                                                    </div>
                                                                                </TabPanel>
                                                                                <TabPanel>
                                                                                    <table>
                                                                                        <tr>
                                                                                            <th className='text-right'>Platform :</th>
                                                                                            <td>Website</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Type :</th>
                                                                                            <td>CRM</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>FrontEnd :</th>
                                                                                            <td>AngularJS</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Backend :</th>
                                                                                            <td>Golang</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>Database :</th>
                                                                                            <td>PostgreSQL</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className='text-right'>ERP :</th>
                                                                                            <td>SAP</td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </TabPanel>
                                                                                <TabPanel>
                                                                                    <a href='https://www.figma.com/design/gtC4w1XOxnwUJgyjFD6mKn/Portofolio-1?node-id=2319-43025&t=3NGm2n4Zed77hqcT-1' className='text-secondary' target="_blank">
                                                                                        Click Here
                                                                                    </a>
                                                                                </TabPanel>
                                                                            </Tabs>
                                                                        </div>
                                                                    </Popup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/itpmo.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                    <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-gradient'>
                                                                        <Popup trigger={<button>IT PMO</button>} position="bottom">
                                                                            <div>
                                                                                <Tabs>
                                                                                    <TabList>
                                                                                        <Tab>Desc</Tab>
                                                                                        <Tab>Tech</Tab>
                                                                                        <Tab>Link</Tab>
                                                                                    </TabList>
                                                                                    <TabPanel>
                                                                                        <div>
                                                                                            <p>Digitizing user request evidence forms, namely business requirement documents, CRF, Bizcase solution delivery documents, UAT testing documents and SRF transport documents which were previously still in the form of manual documents into digital forms in the PMO application that can be filled in directly by users and SMEs to submit project requirements as well as to minimize time, especially in structural approval activities related to IT projects which can also be done in the application.</p>
                                                                                        </div>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <table>
                                                                                            <tr>
                                                                                                <th className='text-right'>Platform :</th>
                                                                                                <td>Website</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Type :</th>
                                                                                                <td>CRM</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>FrontEnd :</th>
                                                                                                <td>AngularJS</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Backend :</th>
                                                                                                <td>Golang</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Database :</th>
                                                                                                <td>PostgreSQL</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>ERP :</th>
                                                                                                <td>SAP</td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <a href='https://www.figma.com/design/tiqfGhQ0Q51zKK2oAs6BRW/Portofolio-2?node-id=2-37889&t=Au9205G6ZzSofJcT-1F' className='text-secondary' target="_blank">
                                                                                            Click Here
                                                                                        </a>
                                                                                    </TabPanel>
                                                                                </Tabs>
                                                                            </div>
                                                                        </Popup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/arc.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                    <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-gradient'>
                                                                        <Popup trigger={<button>Analytic Monthly Report</button>} position="bottom">
                                                                            <div>
                                                                                <Tabs>
                                                                                    <TabList>
                                                                                        <Tab>Desc</Tab>
                                                                                        <Tab>Tech</Tab>
                                                                                        <Tab>Link</Tab>
                                                                                    </TabList>
                                                                                    <TabPanel>
                                                                                        <div>
                                                                                            <p>ARC Monthly Report can be updated automatically.</p>
                                                                                        </div>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <table>
                                                                                            <tr>
                                                                                                <th className='text-right'>Platform :</th>
                                                                                                <td>Website</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Type :</th>
                                                                                                <td>CRM</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>FrontEnd :</th>
                                                                                                <td>AngularJS</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Backend :</th>
                                                                                                <td>Golang</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Database :</th>
                                                                                                <td>PostgreSQL</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>ERP :</th>
                                                                                                <td>SAP</td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <a className='text-secondary' target="_blank">
                                                                                            Click Here
                                                                                        </a>
                                                                                    </TabPanel>
                                                                                </Tabs>
                                                                            </div>
                                                                        </Popup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/hil.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                    <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-gradient'>
                                                                        <Popup trigger={<button>Hold Item List</button>} position="bottom">
                                                                            <div>
                                                                                <Tabs>
                                                                                    <TabList>
                                                                                        <Tab>Desc</Tab>
                                                                                        <Tab>Tech</Tab>
                                                                                        <Tab>Link</Tab>
                                                                                    </TabList>
                                                                                    <TabPanel>
                                                                                        <div>
                                                                                            <p>Hold Item List can be used and managed by Planner, Engineering and Production personnel so as to avoid unmonitored and overdue ASDCS items.</p>
                                                                                        </div>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <table>
                                                                                            <tr>
                                                                                                <th className='text-right'>Platform :</th>
                                                                                                <td>Website</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Type :</th>
                                                                                                <td>CRM</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>FrontEnd :</th>
                                                                                                <td>AngularJS</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Backend :</th>
                                                                                                <td>Golang</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Database :</th>
                                                                                                <td>PostgreSQL</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>ERP :</th>
                                                                                                <td>SAP</td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <a className='text-secondary' target="_blank">
                                                                                            Click Here
                                                                                        </a>
                                                                                    </TabPanel>
                                                                                </Tabs>
                                                                            </div>
                                                                        </Popup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/port18.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <h4 className='text-gradient '>
                                                                    IMTE
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/xpream.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                    <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-gradient'>
                                                                        <Popup trigger={<button>XPREAM</button>} position="bottom">
                                                                            <div>
                                                                                <Tabs>
                                                                                    <TabList>
                                                                                        <Tab>Desc</Tab>
                                                                                        <Tab>Tech</Tab>
                                                                                        <Tab>Link</Tab>
                                                                                    </TabList>
                                                                                    <TabPanel>
                                                                                        <div>
                                                                                            <p>Hold Item List can be used and managed by Planner, Engineering and Production personnel so as to avoid unmonitored and overdue ASDCS items.</p>
                                                                                        </div>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <table>
                                                                                            <tr>
                                                                                                <th className='text-right'>Platform :</th>
                                                                                                <td>Website</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Type :</th>
                                                                                                <td>CRM</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>FrontEnd :</th>
                                                                                                <td>AngularJS</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Backend :</th>
                                                                                                <td>Golang</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Database :</th>
                                                                                                <td>PostgreSQL</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>ERP :</th>
                                                                                                <td>SAP</td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <a className='text-secondary' target="_blank">
                                                                                            Click Here
                                                                                        </a>
                                                                                    </TabPanel>
                                                                                </Tabs>
                                                                            </div>
                                                                        </Popup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/xpream.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                    <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-gradient'>
                                                                        <Popup trigger={<button>XPREAM TV</button>} position="bottom">
                                                                            <div>
                                                                                <Tabs>
                                                                                    <TabList>
                                                                                        <Tab>Desc</Tab>
                                                                                        <Tab>Tech</Tab>
                                                                                        <Tab>Link</Tab>
                                                                                    </TabList>
                                                                                    <TabPanel>
                                                                                        <div>
                                                                                            <p>Hold Item List can be used and managed by Planner, Engineering and Production personnel so as to avoid unmonitored and overdue ASDCS items.</p>
                                                                                        </div>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <table>
                                                                                            <tr>
                                                                                                <th className='text-right'>Platform :</th>
                                                                                                <td>Website</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Type :</th>
                                                                                                <td>CRM</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>FrontEnd :</th>
                                                                                                <td>AngularJS</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Backend :</th>
                                                                                                <td>Golang</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Database :</th>
                                                                                                <td>PostgreSQL</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>ERP :</th>
                                                                                                <td>SAP</td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <a className='text-secondary' target="_blank">
                                                                                            Click Here
                                                                                        </a>
                                                                                    </TabPanel>
                                                                                </Tabs>
                                                                            </div>
                                                                        </Popup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='flex flex-col lg:flex-row items-start justify-between'>
                                    <div className='w-full lg:pt-[50px] lg:ml-[50px]'>
                                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 text-center'>

                                            <div className='w-full'>
                                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                                    <img src='/images/ierapps.png' alt='' />
                                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                                        <div className='text-center w-full text-white'>
                                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                                    <div className='bg-white rounded-full px-5 py-2 inline-block mb-2 text-gradient'>
                                                                        <Popup trigger={<button>IeraApps</button>} position="bottom">
                                                                            <div>
                                                                                <Tabs>
                                                                                    <TabList>
                                                                                        <Tab>Desc</Tab>
                                                                                        <Tab>Tech</Tab>
                                                                                        <Tab>Link</Tab>
                                                                                    </TabList>
                                                                                    <TabPanel>
                                                                                        <div>
                                                                                            <p>Hold Item List can be used and managed by Planner, Engineering and Production personnel so as to avoid unmonitored and overdue ASDCS items.</p>
                                                                                        </div>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <table>
                                                                                            <tr>
                                                                                                <th className='text-right'>Platform :</th>
                                                                                                <td>Mobile</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Type :</th>
                                                                                                <td>CRM</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>FrontEnd :</th>
                                                                                                <td>Java Android</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Backend :</th>
                                                                                                <td>Golang</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>Database :</th>
                                                                                                <td>PostgreSQL</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <th className='text-right'>ERP :</th>
                                                                                                <td>SAP</td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </TabPanel>
                                                                                    <TabPanel>
                                                                                        <a className='text-secondary' target="_blank">
                                                                                            Click Here
                                                                                        </a>
                                                                                    </TabPanel>
                                                                                </Tabs>
                                                                            </div>
                                                                        </Popup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
