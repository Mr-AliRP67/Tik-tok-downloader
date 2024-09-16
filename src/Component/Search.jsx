

import 'animate.css';
import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import './search.css';
const Search = () => {
    const [showContent, setshowContent] = useState("");
    const [isPated, setisPasted] = useState(true);
    const [isDownload, SetIsDownload] = useState(false)
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })


    const paste = async () => {
        if (isPated) {
            try {
                const textClipBoard = await navigator.clipboard.readText()
                setshowContent(textClipBoard);
                alert('your text is paste')
            }
            catch (err) {
                alert('error this link', err)
            }

        }
        else {
            setshowContent('')
            alert('your tetx is clear')
        }
        setisPasted(!isPated);
    }
    const fadeInUp = {
        hidden: {
          opacity: 0,
          y: 40
        },
        show: {
          opacity: 1,
          y: 0
        }
      }



    return (
        <div className='container-fluid bg-primary'>
            <div className="container " >
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-12 text-md-center text-center">
                        <div id='center'>
                            <h1 className='animate__animated animate__fadeIn'>TikTok Video Download</h1>
                            <h2 className='animate__animated animate__fadeIn'>Without Watermark. Fast. All devices
                            </h2>
                        </div>
                    </div>

                </div>
                <div className="row  d-flex align-item-center justify-content-center" id='row'>
                    <div className="col-sm-6 col-md-12 col-lg-8  col-12 ">
                        <div className="paste d-flex align-item-center justify-content-center position-relative ">
                            <input type="text"
                                placeholder='Download tiktok video'
                                value={showContent}
                                onChange={(e) => setshowContent(e.target.value)}

                            ></input>
                            <div className=' d-flex align-item-center justify-content-center position-absolute end-0 top-0 bottom-0 px-2'>
                                <button className=' d-flex align-item-center justify-content-center rounded' onClick={paste} style={{
                                    background: isPated ? '#dae4ff' : '#6b6b79'

                                }}>
                                    <i style={{
                                        color: isPated ? "#0423ed" : "#fff"
                                    }}>{isPated ? <i class="fa-regular fa-clipboard"></i> : <i class="fa-solid fa-xmark"></i>}</i><span style={{

                                        color: isPated ? "#0423ed" : "#fff"
                                    }}>{!showContent ? 'paste' : 'clear'}</span>
                                </button>
                            </div>
                        </div>
                        {<section {...getCollapseProps()}
                            className='isDownload? "" :animate__animated animate__fadeIn'
                            containerHeight={300}
                        >
                            <div className='container bg-white text-white mt-2 rounded py-2 ' id='box'>
                                <div className="row">
                                    <h4 className=' text-center'>Choose this type and download video</h4>
                                    <div className="col-6">
                                        <i class="fa-brands fa-tiktok"></i>
                                    </div>
                                    <div className="col-6" id='download'>
                                        <button className='hd'>Download Hd</button>
                                        <button className='hd'>Download mp4</button>
                                    </div>
                                </div>
                            </div>

                        </section>}

                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-4  col-12 ">
                        <div className="button position-relative" id='collapseOne'>
                            <button
                                {...getToggleProps({
                                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                })}
                            >
                                {<div><i class="fa-solid fa-down-long"> </i>Download</div>}
                            </button>
                           
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Search;