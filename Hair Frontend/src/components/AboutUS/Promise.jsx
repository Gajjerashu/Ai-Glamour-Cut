import React from 'react';
import { Target, ShieldCheck, Scissors } from 'lucide-react';
import './Promise.css';

const Promise = () => {
    return (
        <section className="glamour-promise-wrapper">
            <div className="glamour-promise-container">

                {/* Vision Card */}
                <div className="promise-card-item">
                    <div className="promise-badge">
                        <Target size={28} />
                    </div>
                    <h2 className="promise-card-title">Corporate Vision</h2>
                    <div className="promise-separator"></div>
                    <p className="promise-card-text">
                        Our vision is to be a leading customer-centric salon chain, warmly welcoming
                        all customers for an experience which takes them on a high in terms of
                        quality Hair, Beauty & Skin services in a hygienic, relaxed, and
                        comfortable environment to make their day fabulous.
                    </p>
                </div>

                {/* Central Decorative Scissors (Hidden on Mobile) */}
                <div className="promise-center-art">
                    <div className="art-line"></div>
                    <div className="art-circle">
                        <Scissors size={35} className="scissors-svg" />
                    </div>
                    <div className="art-line"></div>
                </div>

                {/* Promise Card */}
                <div className="promise-card-item">
                    <div className="promise-badge">
                        <ShieldCheck size={28} />
                    </div>
                    <h2 className="promise-card-title">Customer Promise</h2>
                    <div className="promise-separator"></div>
                    <p className="promise-card-text">
                        Our commitment is to always try to master the art of exemplary services
                        & experience; it is our endeavor to serve with excellence. We feel under
                        oath to provide an unwinding environment with precision, detail and purpose
                        where you can immerse yourself in peace and luxury.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Promise;