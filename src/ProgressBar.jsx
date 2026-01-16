import React from "react";

function ProgressBar() {
    const [percent, setPercent] = React.useState(0);
    const handlePlusClick = () => {
        setPercent((prevPercent) => prevPercent < 100 ? prevPercent + 10 : 100)
    }
    const handleMinusClick = () => {
        setPercent((prevPercent) => prevPercent > 0 ? prevPercent - 10 : 0)
    }
    return (
        <div>
            <h2>Progres Bar</h2>
            <div style={{ marginBottom: "20px", position: "relative", maxWidth: "90%", margin: "20px auto", backgroundColor: "lightgray", height: "20px", borderRadius: "10px" }}>
                <div
                    id="testBgColor"
                    style={{
                        width: `${percent}%`,
                        backgroundColor: `${percent >= "80" ? "green" : percent >= "40" & percent < "80" ? "orange" : percent < "40" ? "red" : "red"}`, height: "100%", borderRadius: "10px"
                    }}>
                </div>
                <div style={{ position: "absolute", marginTop: "-20px", width: "100%", margin: "0 auto", color: "black", textAlign: "center" }}>
                    {percent}%</div>
            </div>
            <button
                style={{ padding: "10px 20px", backgroundColor: "lightgray", marginRight: "10px" }}
                onClick={() => handlePlusClick()}>
                +10%
            </button>
            <button
                style={{ padding: "10px 20px", backgroundColor: "lightgray" }}
                onClick={() => handleMinusClick()}>
                -10%
            </button>
        </div>
    );
}

export default ProgressBar;
