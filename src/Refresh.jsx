import React, { useState, useEffect } from "react";
import { GridLoader } from "react-spinners";
import data from "./data.json";
import './Refresh.css'


const Refresh = ({ refreshOption, setIsLoading }) => {
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#282c34");

    const effect = useEffect(() => {
        setLoading(true);
        setIsLoading(true)
        setTimeout(() => {
            setLoading(false);
            setIsLoading(false);
        }, 5000);
    }, [refreshOption]);


    return (
        <div>
            {refreshOption === "refreshTable" ? (

                <div className="refreshTable">
                    {/* <GridLoader
                        color={color}
                        loading={loading}
                        size={145}
                        speedMultiplier={0.25}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        className="refreshTable"
                    /> */}
                    <div className="tableLoader">
                        <h1>Loading</h1>
                    </div>
                    <div>
                        <h1><span className="loading-dots">. . .</span></h1>
                    </div>
                </div>
            ) : (
                <div className="refreshPage">
                    {/* <GridLoader
                        color={color}
                        loading={loading}
                        size={190}
                        speedMultiplier={0.25}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        className="refreshTable"
                    /> */}
                    <div className="pageloader">
                    </div>
                    <div>
                        <h1>Loading</h1>
                    </div>
                    <div>
                        <h1><span className="loading-dots">. . .</span></h1>
                    </div>

                </div>

            )}
        </div>
    );
};

export default Refresh;
