import React from 'react';
import { A } from "hookrouter";
import '../css/master.css';


export const DownloadResume =() =>{
    return (
        <section id="resume">
              <div class="container-fluid">
                <h2 class="section-heading">Download Resume</h2>
                <p>To Download my Resume in PDF format, please click the download button below.</p>
                <button class="btn btn-outline-dark btn-lg"><i class="fas fa-download"></i> Download</button>
              </div>
          </section>
    )
}