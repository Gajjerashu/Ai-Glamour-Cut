import React, { useState } from 'react';
import './Story.css';

const Story = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="glamour-story-wrapper">
            <div className="story-premium-container">

                {/* SECTION 1: OUR STORY */}
                <div className="story-block-item">
                    <h2 className="story-title-styled">OUR STORY</h2>
                    <div className="title-underline-red"></div>
                    <p className="story-para-main">
                        GLAMOUR CUTZ is one of the most powerful and fastest growing salon chain brands,
                        providing the hairstyling industry a new horizon. Emerging as one of the largest
                        single salon chains in the region.
                    </p>
                </div>

                {/* SECTION 2: HISTORY */}
                <div className="story-block-item mt-5">
                    <h3 className="story-title-styled">HISTORY OF THE COMPANY</h3>
                    <div className="title-underline-red"></div>
                    <p className="story-para-main">
                        GLAMOUR CUTZ was established in January 2014 and has consistently shown year-on-year
                        growth. We are now a chain of multiple branches, on a growth path to 50+ salons,
                        currently employing over 200+ professionals.
                    </p>

                    {/* READ MORE CONTENT */}
                    <div className={`expandable-content ${isExpanded ? 'show-content' : ''}`}>
                        <p className="story-para-main">
                            Glamour Cutz has remained a pioneer in hair, beauty, and nail services and is now
                            setting new benchmarks in make-up, exceeding industry standards to give
                            professionalism a new art form. Our commitment to excellence is reflected in our
                            state-of-the-art facilities and our continuous investment in staff training with
                            global experts.
                        </p>
                    </div>

                    <button
                        className="story-red-action-btn"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Show Less -' : 'Read More +'}
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Story;