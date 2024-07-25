import React, { Component } from 'react';

const Portofolio = () => {
    return (
        <div className='container mx-auto max-w-[1200px] p-3 overflow-hidden'>
            <div className="flex justify-between py-5 items-center">
                <div className='font-secondary text-center font-bold mb-12'>
                    <h4 className='text-secondary mb-3 text-[30px] text-left'>Recent</h4>
                    <h4 className='text-secondary mb-3 text-[50px]'>Portofolio</h4>
                </div>
                <div className='font-secondary text-center font-bold mb-12'>
                    <h4 className='text-secondary mb-0 text-[50px] text-right'>22</h4>
                    <h2 className='mb-3 text-[20px] text-right'>Complete Projects</h2>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row items-start justify-between'>
                <div className='w-full lg:pt-[50px] lg:ml-[50px]'>
                    <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 text-center'>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port1.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <a href='https://rsudrsoetomo.jatimprov.go.id/' className='text-gradient' target="_blank">
                                                Company Profile RSUD Dr. Soetomo
                                            </a>
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
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <h4 className='text-gradient '>
                                                Helpdesk ITKI
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port14.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <a href='https://rsudrsoetomo.jatimprov.go.id/permohonan-informasi' className='text-gradient' target="_blank">
                                                    Permohonan Informasi
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port15.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <a href='https://rsudrsoetomo.jatimprov.go.id/pengaduan-layanan-publik' className='text-gradient' target="_blank">
                                                    Pengaduan Layanan Publik
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port2.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <h4 className='text-gradient '>
                                                Ruang Lawyer
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port3.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <a href='https://web.firecek.com/' className='text-gradient' target="_blank">
                                                    Firecek
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port4.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <a href='https://www.figma.com/design/gtC4w1XOxnwUJgyjFD6mKn/Portofolio-1?t=LYuAcS9SGxLD6KSS-1' className='text-gradient' target="_blank">
                                                    Telkomsel MyOrbit
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port5.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <a href='https://www.figma.com/design/gtC4w1XOxnwUJgyjFD6mKn/Portofolio-1?node-id=2319-3338&t=LYuAcS9SGxLD6KSS-1' className='text-gradient' target="_blank">
                                                    Realisasi Anggaran
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port6.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <a href='https://www.figma.com/design/gtC4w1XOxnwUJgyjFD6mKn/Portofolio-1?node-id=2319-3338&t=LYuAcS9SGxLD6KSS-1' className='text-gradient' target="_blank">
                                                    Tools Mangement System
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port10.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <a href='https://www.figma.com/design/tiqfGhQ0Q51zKK2oAs6BRW/Portofolio-2?node-id=0-1&t=LYuAcS9SGxLD6KSS-1' className='text-gradient' target="_blank">
                                                    IT PMO
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port16.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <h4 className='text-gradient '>
                                                Analytic Monthly Report
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port17.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <h4 className='text-gradient '>
                                                Hold Item List
                                            </h4>
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
                                <img src='/images/port19.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <h4 className='text-gradient '>
                                                IERApps
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port20.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <h4 className='text-gradient '>
                                                XPREAM TV
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port21.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <h4 className='text-gradient '>
                                                XPREAM
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port22.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <a href='https://www.figma.com/design/0kTZIgt8Z584mGcDz9SoGt/Audit-TI?node-id=8-2&t=sUbKTk2QIFCwbpeX-1' className='text-gradient' target="_blank">
                                                    IT PMO
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port7.png' alt='' />
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
                                <img src='/images/port8.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <a href='https://www.figma.com/design/tiqfGhQ0Q51zKK2oAs6BRW/Portofolio-2?node-id=0-1&t=LYuAcS9SGxLD6KSS-1' className='text-gradient' target="_blank">
                                                    Gudang Fresh Superindo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port9.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <a href='http://samiqbaal.pmii.web.id/2022/06/website-infaq-pondok-pesantren-bahrul.html' className='text-gradient' target="_blank">
                                                    Infaq Bahrul Maghfiroh
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port12.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <a href='http://samiqbaal.pmii.web.id/2022/06/website-majamen-gedung-universitas.html' className='text-gradient' target="_blank">
                                                    SIM Inventory UISI
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                <img src='/images/port13.png' alt='' />
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <a href='http://samiqbaal.pmii.web.id/2022/06/website-majamen-gedung-universitas.html' className='text-gradient' target="_blank">
                                                    E-Commerce Raprima Tempeh
                                                </a>
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
    )
}
export default Portofolio
