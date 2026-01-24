import React, { useState } from 'react';
import axios from 'axios';
import './AIAnalyzer.css';

const AIAnalyzer = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [prediction, setPrediction] = useState(null);

    // Handle Image Selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
            setPrediction(null); // Reset previous result
        }
    };

    // Send Image to Backend for AI Analysis
    const startAnalysis = async () => {
        if (!selectedFile) return alert("Please upload a photo first!");

        setLoading(true);
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            // Real-world logic: Send to Node.js backend
            const response = await axios.post('http://localhost:5000/api/ai/analyze', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setPrediction(response.data);
        } catch (error) {
            console.error("AI Analysis Error:", error);
            // Testing mate Dummy Data (Backend na hoy tyare)
            setTimeout(() => {
                setPrediction({
                    faceShape: "Oval",
                    recommendation: "Classic Undercut with a light beard would look great on you!",
                    confidence: "94%"
                });
                setLoading(false);
            }, 3000);
        } finally {
            if (!prediction) setLoading(false);
        }
    };

    return (
        <div className="ai-analyzer-container">
            <div className="container py-5">
                <div className="text-center mb-5 mt-5">
                    <h1 className="display-5 fw-bold text-white">AI <span className="text-danger">Style Predictor</span></h1>
                    <p className="text-secondary">Upload your photo and let our AI suggest the best haircut for your face shape.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className={`upload-card ${loading ? 'analyzing' : ''}`}>
                            {preview ? (
                                <div className="preview-wrapper">
                                    <img src={preview} alt="User Face" className="img-fluid rounded" />
                                    {loading && <div className="scan-bar"></div>}
                                </div>
                            ) : (
                                <label className="upload-placeholder">
                                    <input type="file" onChange={handleImageChange} hidden accept="image/*" />
                                    <div className="icon">📸</div>
                                    <span>Click to Upload Face Photo</span>
                                </label>
                            )}
                        </div>

                        <div className="text-center mt-4">
                            {!prediction && (
                                <button
                                    className="btn btn-danger btn-lg px-5 py-3 rounded-pill shadow-lg"
                                    onClick={startAnalysis}
                                    disabled={loading || !selectedFile}
                                >
                                    {loading ? 'AI IS SCANNING...' : 'START ANALYSIS'}
                                </button>
                            )}

                            {prediction && (
                                <button className="btn btn-outline-light rounded-pill mt-2" onClick={() => { setPreview(null); setPrediction(null); }}>
                                    Try Another Photo
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Result Display */}
                    {prediction && (
                        <div className="col-md-5">
                            <div className="result-card p-4 animate__animated animate__fadeInRight">
                                <h3 className="text-danger fw-bold mb-3">Analysis Result</h3>
                                <div className="result-item">
                                    <label>Detected Face Shape:</label>
                                    <h4>{prediction.faceShape}</h4>
                                </div>
                                <hr className="border-secondary" />
                                <div className="result-item">
                                    <label>AI Recommendation:</label>
                                    <p className="lead">{prediction.recommendation}</p>
                                </div>
                                <div className="confidence-badge">Confidence: {prediction.confidence}</div>
                                <button className="btn btn-danger w-100 mt-4">Book This Style Now</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AIAnalyzer;